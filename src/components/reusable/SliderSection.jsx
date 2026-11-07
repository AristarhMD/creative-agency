import { useState } from "react";
import Slider from "./Slider";

export default function SliderSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    if (activeSlide === 0) setActiveSlide(2);
    else setActiveSlide((prev) => prev - 1);
  };
  const handleNextSlide = () => {
    if (activeSlide === 2) setActiveSlide(0);
    else setActiveSlide((prev) => prev + 1);
  };

  return (
    <section className="md:flex">
      <Slider
        activeSlide={activeSlide}
        nextSlide={handleNextSlide}
        prevSlide={handlePrevSlide}
      />

      <div className="bg-neutral-900 flex flex-col gap-6 md:gap-8 xl:gap-12 items-start justify-center py-16 px-6 md:py-25 md:pl-10 md:pr-17.5 xl:py-38.5 xl:pl-41.25 xl:pr-37.5 md:absolute md:w-[50.78%]">
        <h2 className="preset-4 xl:preset-2 text-neutral-0">
          Brand naming & guidelines
        </h2>

        {/* Slider navigation */}
        <div className="flex items-center gap-4">
          {/* Prev slide */}
          <button className="cursor-pointer" onClick={handlePrevSlide}>
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <g
                transform="matrix(-1 0 0 1 40 0)"
                stroke="#F94F4F"
                fill="none"
                fillRule="evenodd"
              >
                <circle cx="20" cy="20" r="19.5" />
                <path strokeWidth="2" d="M17.5 15l5 5-5 5" />
              </g>
            </svg>
          </button>

          {/* Next Slide */}
          <button className="cursor-pointer" onClick={handleNextSlide}>
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#F94F4F" fill="none" fillRule="evenodd">
                <circle cx="20" cy="20" r="19.5" />
                <path strokeWidth="2" d="M17.5 15l5 5-5 5" />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
