import mobSlide1 from "../../assets/mobile/image-slide-1.jpg";
import mobSlide2 from "../../assets/mobile/image-slide-2.jpg";
import mobSlide3 from "../../assets/mobile/image-slide-3.jpg";
import tabSlide1 from "../../assets/tablet/image-slide-1.jpg";
import tabSlide2 from "../../assets/tablet/image-slide-2.jpg";
import tabSlide3 from "../../assets/tablet/image-slide-3.jpg";
import deskSlide1 from "../../assets/desktop/image-slide-1.jpg";
import deskSlide2 from "../../assets/desktop/image-slide-2.jpg";
import deskSlide3 from "../../assets/desktop/image-slide-3.jpg";
import { useRef } from "react";

export default function Slider({ activeSlide, nextSlide, prevSlide }) {
  const MIN_SWIPE_DISTANCE = 50;

  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const onTouchStart = (e) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStart.current === null || touchEnd.current === null) return;

    const swipeDistance = touchStart.current - touchEnd.current;

    if (swipeDistance > MIN_SWIPE_DISTANCE) nextSlide();
    else if (swipeDistance < -MIN_SWIPE_DISTANCE) prevSlide();
  };

  return (
    <div
      className="overflow-hidden md:ml-auto md:w-[57.03%] xl:w-[62.15%]"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="h-101 md:h-118 xl:h-182 w-full flex transition-all duration-300 ease-in-out"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        <div className="relative w-full shrink-0">
          <picture>
            <source media="(min-width:1280px )" srcSet={deskSlide1} />
            <source media="(min-width:768px )" srcSet={tabSlide1} />
            <img
              src={mobSlide1}
              alt="Photo of the page from the book with Lean Product Readmap"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute bottom-0 flex flex-col items-end gap-0.5 pr-8 md:pr-10 pt-6 md:pt-11.25 pb-7.5 md:pb-10.5 xl:py-17 xl:pr-38.5 w-full bg-gradient-2 text-neutral-0">
            <p className="preset-8-xb xl:preset-5">Lean Product Roadmap</p>
            <span className="preset-8-r xl:preset-6-r">2019 Project</span>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="relative w-full shrink-0">
          <picture>
            <source media="(min-width:1280px )" srcSet={deskSlide2} />
            <source media="(min-width:768px )" srcSet={tabSlide2} />
            <img
              src={mobSlide2}
              alt="Photo of the table with the iPhone, macbook and a bag with inscription of the New Majestic Hotel on it"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute bottom-0 flex flex-col items-end gap-0.5 pr-8 md:pr-10 pt-6 md:pt-11.25 pb-7.5 md:pb-10.5 xl:py-17 xl:pr-38.5 w-full bg-gradient-2 text-neutral-0">
            <p className="preset-8-xb xl:preset-5">New Majestic Hotel</p>
            <span className="preset-8-r xl:preset-6-r">2018 Project</span>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full shrink-0">
          <picture>
            <source media="(min-width:1280px )" srcSet={deskSlide3} />
            <source media="(min-width:768px )" srcSet={tabSlide3} />
            <img
              src={mobSlide3}
              alt="Photo of the page with crypto statistic"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute bottom-0 flex flex-col items-end gap-0.5 pr-8 md:pr-10 pt-6 md:pt-11.25 pb-7.5 md:pb-10.5 xl:py-17 xl:pr-38.5 w-full bg-gradient-2 text-neutral-0">
            <p className="preset-8-xb xl:preset-5">Crypto Dashboard</p>
            <span className="preset-8-r xl:preset-6-r">2016 Project</span>
          </div>
        </div>
      </div>
    </div>
  );
}
