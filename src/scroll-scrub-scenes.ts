/**
 * Non-animated build (see design-brief.md): no scroll-scrub film is used.
 * This file is retained as inert scaffold; the index route does not import it.
 * Theme tokens are set to the brand palette for reference.
 */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#FF5C7A",
  background: "#E7F4FB",
  ink: "#3B4A56",
  muted: "#5F707C",
};

export const scrollScrubScenes: ScrollScrubScene[] = [];