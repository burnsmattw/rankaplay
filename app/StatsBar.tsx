"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

const stats: {
  label: string;
  icon: ReactNode;
  target?: number;
  suffix?: string;
  display?: string;
}[] = [
  {
    label: "Game Types",
    target: 400,
    suffix: "+",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    label: "Players & Teams",
    display: "∞",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="9" r="3" />
        <circle cx="16" cy="9" r="3" />
        <path d="M3 20c0-3.3 2.2-5.5 5-5.5s5 2.2 5 5.5" />
        <path d="M11 14.5c2.8 0 5 2.2 5 5.5" />
      </svg>
    ),
  },
  {
    label: "To Download",
    display: "Free",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v12" />
        <path d="M7 10l5 5 5-5" />
        <path d="M4 19h16" />
      </svg>
    ),
  },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(400, active);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-3 text-center gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center">
          <span
            className="mb-2 flex items-center justify-center rounded-full"
            style={{ width: "36px", height: "36px", backgroundColor: "rgba(99,102,241,0.15)", color: "#818cf8" }}
          >
            {stat.icon}
          </span>
          <div className="text-3xl font-extrabold" style={{ color: "#818cf8" }}>
            {typeof stat.target === "number" ? `${count}${stat.suffix ?? ""}` : stat.display}
          </div>
          <div className="text-sm mt-1" style={{ color: "#64748b" }}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
