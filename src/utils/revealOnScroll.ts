// Delay between cards that enter the viewport together, so they appear one after another
const STAGGER_MS = 100;

// One observer shared by every card instead of one per element
const observer =
    typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(
              (entries) => {
                  entries
                      .filter((entry) => entry.isIntersecting)
                      .forEach((entry, index) => {
                          const node = entry.target as HTMLElement;
                          node.style.setProperty(
                              "--reveal-delay",
                              `${index * STAGGER_MS}ms`,
                          );
                          node.dataset.revealed = "";
                          observer?.unobserve(node);
                      });
              },
              { rootMargin: "0px 0px -10% 0px" },
          );

/**
 * Ref callback that fades and slides an element in the first time it scrolls into view.
 * Usage: <div ref={revealOnScroll}>. The animation lives in index.css.
 */
export function revealOnScroll(node: HTMLElement | null) {
    if (!node) return;

    node.dataset.reveal = "";

    // Without IntersectionObserver, show the element right away rather than leave it hidden
    if (!observer) {
        node.dataset.revealed = "";
        return;
    }

    observer.observe(node);
    return () => observer.unobserve(node);
}
