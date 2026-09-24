import { test } from "node:test";
import assert from "node:assert/strict";
import {
  restoreAstEntities,
  normalizeDigitTildeRanges,
  validateMdx,
} from "../../scripts/lib/translation-guards.mjs";

const SOURCE = [
  "<p><span>~15%&ast;</span> <span>paid by the hotel&ast;</span></p>",
  "<p>plain line, no footnote</p>",
  "<p>&ast;Card processing is passed through.</p>",
].join("\n");

test("restoreAstEntities puts &ast; back where the translator emitted a raw asterisk", () => {
  const translated = [
    "<p><span>~15%*</span> <span>платено от хотела*</span></p>",
    "<p>обикновен ред</p>",
    "<p>*Обработката на карти е на себестойност.</p>",
  ].join("\n");
  const restored = restoreAstEntities(SOURCE, translated);
  assert.equal(
    restored,
    [
      "<p><span>~15%&ast;</span> <span>платено от хотела&ast;</span></p>",
      "<p>обикновен ред</p>",
      "<p>&ast;Обработката на карти е на себестойност.</p>",
    ].join("\n"),
  );
});

test("restoreAstEntities leaves already-correct translations untouched", () => {
  const translated = SOURCE.replace("paid by the hotel", "payé par l’hôtel");
  assert.equal(restoreAstEntities(SOURCE, translated), translated);
});

test("restoreAstEntities never touches ** bold or lines the source did not mark", () => {
  const source = "**Bold** text\n<span>cost&ast;</span>";
  const translated = "**Удебелен** текст\n<span>цена*</span>";
  assert.equal(
    restoreAstEntities(source, translated),
    "**Удебелен** текст\n<span>цена&ast;</span>",
  );
});

test("restoreAstEntities does nothing when line counts diverge (cannot align safely)", () => {
  const translated = "<span>a*</span>";
  assert.equal(restoreAstEntities(SOURCE, translated), translated);
});

test("normalizeDigitTildeRanges turns 15~25% into 15–25% when the source has no such range", () => {
  const source = "cheaper than the 15–25% OTAs charge";
  assert.equal(
    normalizeDigitTildeRanges(source, "OTA가 부과하는 15~25%보다 낮으며"),
    "OTA가 부과하는 15–25%보다 낮으며",
  );
});

test("normalizeDigitTildeRanges keeps a range the source itself wrote with a tilde", () => {
  const source = "about 3~5 nights";
  const translated = "약 3~5박";
  assert.equal(normalizeDigitTildeRanges(source, translated), translated);
});

test("validateMdx accepts well-formed MDX", async () => {
  assert.deepEqual(await validateMdx("# Hi\n\n<span>ok&ast;</span>"), { ok: true });
});

test("validateMdx reports the compiler error for the emphasis-across-spans bug", async () => {
  const result = await validateMdx("<p><span>~15%*</span> <span>cost*</span></p>");
  assert.equal(result.ok, false);
  assert.match(result.error, /closing tag/);
});

test("validateMdx reports the compiler error for the strikethrough-across-spans bug", async () => {
  const result = await validateMdx("<p><span>~15%</span> <span>15~25%</span></p>");
  assert.equal(result.ok, false);
});
