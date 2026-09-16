"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function FeatureParallax({
  glow,
  imageContent,
  imageWidth = "clamp(220px, 26vw, 300px)",
  textContent,
  textMaxWidth = "360px",
  reverse,
  className,
}: {
  glow?: ReactNode;
  imageContent: ReactNode;
  imageWidth?: string;
  textContent: ReactNode;
  textMaxWidth?: string;
  reverse: boolean;
  className?: string;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const row = rowRef.current;
      const img = imageRef.current;
      const txt = textRef.current;
      if (!row || !img || !txt) return;

      const rect = row.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const rowCenter = rect.top + rect.height / 2;
      const raw = (vh / 2 - rowCenter) / (vh / 2 + rect.height / 2);
      const progress = Math.max(-1, Math.min(1, raw));

      const side = reverse ? 1 : -1;
      img.style.transform = `translate3d(${progress * side * 16}px, ${progress * -22}px, 0)`;
      txt.style.transform = `translate3d(0, ${progress * -9}px, 0)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reverse]);

  return (
    <div ref={rowRef} className={className}>
      {glow}
      <div
        ref={imageRef}
        className="relative flex-shrink-0"
        style={{ width: imageWidth, willChange: "transform" }}
      >
        {imageContent}
      </div>
      <div
        ref={textRef}
        className="text-center md:text-left"
        style={{ maxWidth: textMaxWidth, willChange: "transform" }}
      >
        {textContent}
      </div>
    </div>
  );
}
