"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  label: string;
}

// Keeps slider values between valid bounds.
const clampPercent = (value: number) => Math.min(Math.max(value, 0), 100);

function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  label,
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerIdRef = useRef<number | null>(null);

  // Converts screen X coordinates into a percentage position in the slider frame.
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = clampPercent((x / rect.width) * 100);
    setPosition(percent);
  }, []);

  // Handles both mouse and touch via pointer events for consistent behavior.
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      pointerIdRef.current = e.pointerId;
      containerRef.current.setPointerCapture(e.pointerId);
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    if (pointerIdRef.current !== null) {
      containerRef.current.releasePointerCapture(e.pointerId);
      pointerIdRef.current = null;
    }
    setIsDragging(false);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 2;

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((current) => clampPercent(current - step));
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((current) => clampPercent(current + step));
    }
    if (e.key === "Home") {
      e.preventDefault();
      setPosition(0);
    }
    if (e.key === "End") {
      e.preventDefault();
      setPosition(100);
    }
  }, []);

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-lg bg-neutral-100 touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        role="slider"
        aria-label={`${label} comparison slider`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
      >
        {/* After image is rendered as the base layer. */}
        <Image
          src={after}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
        />

        {/* Before image sits above and is clipped by slider position. */}
        <div
          className="absolute inset-0 overflow-hidden transition-[clip-path] duration-150 ease-out"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
            transitionDuration: isDragging ? "0ms" : "150ms",
          }}
        >
          <Image
            src={before}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
          />
        </div>

        {/* Divider line + grab handle for the interactive control. */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-lg z-10 transition-[left] duration-150 ease-out"
          style={{
            left: `${position}%`,
            transitionDuration: isDragging ? "0ms" : "150ms",
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-green-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h8m-8 0l3-3m-3 3l3 3m5-3h-3m3 0l-3-3m3 3l-3 3"
              />
            </svg>
          </div>
        </div>

        {/* Context labels improve clarity when users first land on the section. */}
        <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10">
          After
        </div>
      </div>
      <p className="text-center text-sm text-neutral-500 font-medium">
        {label}
      </p>
    </div>
  );
}

export default function BeforeAfterSection() {
  const transformations = [
    {
      before: "/before-office.webp",
      after: "/after-office.webp",
      beforeAlt: "Cluttered messy office before cleaning and organisation",
      afterAlt: "Clean organised office after Jade's Reset Cleaning service",
      label: "Home office — declutter & deep clean",
    },
    {
      before: "/before-bedroom.webp",
      after: "/after-bedroom.webp",
      beforeAlt: "Messy bedroom with items scattered before cleaning",
      afterAlt: "Tidy peaceful bedroom after Jade's Reset Cleaning service",
      label: "Bedroom — reset clean & organisation",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900">
            See the Difference
          </h2>
          <p className="mt-4 text-neutral-500 max-w-2xl mx-auto text-lg">
            Drag the slider to see real transformations. Every space has
            potential — let me help you unlock yours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transformations.map((t) => (
            <BeforeAfterSlider key={t.label} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
