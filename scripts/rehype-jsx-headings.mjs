import { visit } from 'unist-util-visit';

const HEADING = /^h[1-6]$/;

/**
 * Turn `<h2 class="…">` written by hand in an `.mdx` file into a real hast
 * heading element.
 *
 * MDX parses every HTML-looking tag as JSX, so a hand-written heading arrives
 * as an `mdxJsxFlowElement`, not an `element`. Astro's `rehypeHeadingIds`
 * bails on anything that is not an `element` (`if (node.type !== "element")
 * return;`), so those headings never reach `file.data.astro.headings` and
 * Starlight renders an empty "On this page". /legal/payment-terms/ and
 * /legal/platform-agreements/ hit exactly that: three contracts per page,
 * every clause heading hand-written for styling, and no in-page navigation.
 *
 * Astro runs user rehype plugins BEFORE `rehypeHeadingIds` in both the
 * Markdown and the MDX pipeline, so converting here is enough for the ids to
 * be collected. An explicit `id` on the heading is kept as-is by
 * `rehypeHeadingIds`, which is what keeps the stable `#ap-4-fees` clause
 * anchors (linked from redirects, llms.txt and the Legal hub) working.
 *
 * Attributes that are JSX expressions rather than plain strings are dropped
 * rather than guessed at; a heading needing one should stay JSX and simply
 * will not appear in the table of contents.
 */
export function rehypeJsxHeadings() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'mdxJsxFlowElement' && node.type !== 'mdxJsxTextElement') return;
      if (typeof node.name !== 'string' || !HEADING.test(node.name)) return;

      const properties = {};
      for (const attribute of node.attributes ?? []) {
        if (attribute.type !== 'mdxJsxAttribute') continue;
        if (typeof attribute.value !== 'string') continue;
        const name = attribute.name === 'class' ? 'className' : attribute.name;
        properties[name] = name === 'className' ? attribute.value.split(/\s+/) : attribute.value;
      }

      node.type = 'element';
      node.tagName = node.name;
      node.properties = properties;
      delete node.name;
      delete node.attributes;
    });
  };
}
