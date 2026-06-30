import { useState } from "react";

export const useSlider = (images: string[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
      return;
    }

    setCurrentIndex((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (currentIndex >= images.length - 1) {
      setCurrentIndex(0);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    prevSlide,
    nextSlide,
    goToSlide,
  };
};
