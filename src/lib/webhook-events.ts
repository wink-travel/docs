/**
 * The number of webhook event types Wink actually delivers.
 *
 * Marketing pages carried a hardcoded "64+" while the platform's own event
 * catalogue listed 70 delivered types. A hardcoded count drifts every time the
 * catalogue changes and nobody notices, so it is derived here from the same
 * schema the Webhook Events Catalog page renders from.
 *
 * `delivered: false` types exist internally (payments, ledger, channel-manager
 * sync) but are never sent to subscribers, so they must not be counted.
 */
import webhooks from "../../schemas/webhooks.json";

interface WinkEventType {
  key: string;
  name: string;
  description: string;
  delivered: boolean;
  roles: string[];
}

const eventTypes = (webhooks as { "x-wink-event-types": WinkEventType[] })["x-wink-event-types"];

/** Event types actually delivered to webhook subscribers. */
export const deliveredWebhookEventCount: number = eventTypes.filter((e) => e.delivered).length;

/** Every event type in the catalogue, delivered or not. */
export const totalWebhookEventCount: number = eventTypes.length;
