import { useEffect, type RefObject } from "react";

const SCROLL_LOCK_MS = 700;
type Anchor = "top" | "bottom";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function useDirectionalSnap(containerRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isAnimating = false;
    let currentIndex = 0;
    let currentAnchor: Anchor = "top";

    const getSections = () =>
      Array.from(container.children).filter(
        (node): node is HTMLElement => node instanceof HTMLElement && node.tagName.toLowerCase() === "section"
      );

    const initIndex = () => {
      const sections = getSections();
      if (sections.length === 0) return;

      const currentScroll = container.scrollTop;
      let nearestIndex = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section, index) => {
        const distance = Math.abs(section.offsetTop - currentScroll);
        if (distance < minDistance) {
          minDistance = distance;
          nearestIndex = index;
        }
      });

      currentIndex = nearestIndex;
      currentAnchor = "top";
    };

    initIndex();

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 4 || isAnimating) return;

      const sections = getSections();

      if (sections.length === 0) return;

      event.preventDefault();

      const direction = event.deltaY > 0 ? 1 : -1;

      currentIndex = clamp(currentIndex, 0, sections.length - 1);

      let targetIndex = currentIndex;
      let targetAnchor: Anchor = currentAnchor;

      if (direction > 0) {
        targetIndex = clamp(currentIndex + 1, 0, sections.length - 1);
        targetAnchor = "top";
      } else if (currentAnchor === "bottom") {
        targetIndex = currentIndex;
        targetAnchor = "top";
      } else {
        targetIndex = clamp(currentIndex - 1, 0, sections.length - 1);
        targetAnchor = "bottom";
      }

      const targetSection = sections[targetIndex];

      if (!targetSection || (targetIndex === currentIndex && targetAnchor === currentAnchor)) return;

      const targetTop =
        targetAnchor === "top"
          ? targetSection.offsetTop
          : targetSection.offsetTop + targetSection.offsetHeight - container.clientHeight;

      isAnimating = true;
      const originalSnap = container.style.scrollSnapType;
      container.style.scrollSnapType = "none";
      container.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });

      window.setTimeout(() => {
        container.style.scrollSnapType = originalSnap;
        currentIndex = targetIndex;
        currentAnchor = targetAnchor;
        isAnimating = false;
      }, SCROLL_LOCK_MS);
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, [containerRef]);
}
