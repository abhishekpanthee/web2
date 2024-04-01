"use client";import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function Avatar({
  image,
  className,
}: {
  image: ImageField;
  className?: string;
}) {
  const component = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".avatar",
        {
          opacity: 0,
          scale: 1.4,
        },
        {
          scale: 1,
          opacity: 1,
          duration: prefersReducedMotion ? 0 : 1.3,
          ease: "power3.inOut",
        },
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, [prefersReducedMotion]);

  return (
    <div
      ref={component}
      className={clsx("relative h-full w-full flex justify-end", className)}
    >
      <div
        className="avatar aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0"
        style={{ perspective: "500px", perspectiveOrigin: "150% 150%" }}
      >
        <PrismicNextImage
          field={image}
          className="avatar-image h-80 w-80 sm:h-96 sm:w-96 object-cover" // Adjusted image size
          imgixParams={{ q: 90 }}
        />
        <div className="highlight absolute inset-0 hidden w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block"></div>
      </div>
    </div>
  );
}
