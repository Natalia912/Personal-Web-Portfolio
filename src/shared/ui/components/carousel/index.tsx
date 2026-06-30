"use client";

import { HTMLAttributes, PropsWithChildren, useState, useEffect } from "react";
import { ArrowRight } from "@/src/shared/ui/icons";
import { cn } from "@/src/shared/utils";
import Image from "next/image";
import { useSlider } from "./use-slider";
import { useSwipe } from "./use-swipe";

type Props = {
  images: string[];
};

const CarouselButton = ({
  children,
  className,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLButtonElement>) => (
  <button
    className={cn(
      "absolute top-1/2 -translate-y-1/2 cursor-pointer border-0 p-2 rounded-full bg-brand-100/70 text-brand-950 transition-all hover:bg-brand-300 focus-visible:bg-brand-300 lg:group-hover:opacity-100 opacity-0 hidden lg:block",
      className ?? "",
    )}
    {...props}
  >
    {children}
  </button>
);

export const Carousel = ({ images }: Props) => {
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useSlider(images);

  const { onTouchStart, onTouchEnd, onTouchMove } = useSwipe(
    nextSlide,
    prevSlide,
  );

  return (
    <div className="relative max-w-200 h-auto group snap-x overscroll-x-auto">
      <div className="overflow-hidden rounded-xl">
        {/* Slide Wrapper */}
        <div
          className="flex transition-transform duration-500 w-full aspect-2/1 snap-start"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((slide, index) => (
            <div className="min-w-full relative h-full" key={index}>
              <Image
                src={slide}
                alt={`Slide ${index}`}
                priority={index === 0}
                fill
                sizes="(max-width: 1200px) 100vw, 75vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Arrows */}
      <CarouselButton className="-left-3 lg:-left-5" onClick={prevSlide}>
        <ArrowRight className="rotate-180 w-4 h-4 lg:w-6 lg:h-6" />
      </CarouselButton>
      <CarouselButton className="-right-3 lg:-right-5" onClick={nextSlide}>
        <ArrowRight className="w-4 h-4 lg:w-6 lg:h-6" />
      </CarouselButton>

      {/* Indicator Dots */}
      <div className="absolute bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "w-2 h-2 bg-brand-300/75 rounded-full cursor-pointer transition-colors",
              currentIndex === index ? "bg-brand-900" : "",
            )}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
