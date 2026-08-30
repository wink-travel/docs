/**
 * Shared schema.org mapping for FAQ structured data. Every component that emits
 * a FAQPage (FaqJsonLd, FaqGrid, AgentJsonLd, ProductJsonLd) maps the same
 * `{ title, content }` shape into the same `Question`/`acceptedAnswer` schema —
 * this is the single place that mapping lives, so a future schema change (e.g.
 * adding `dateModified`) only needs one edit instead of four.
 */

export interface Faq {
  title: string;
  content: string;
}

/** Maps FAQ items to a FAQPage's `mainEntity` array. */
export const faqsToMainEntity = (faqs: Faq[]) =>
  faqs.map((f) => ({
    "@type": "Question",
    name: f.title,
    acceptedAnswer: { "@type": "Answer", text: f.content },
  }));
