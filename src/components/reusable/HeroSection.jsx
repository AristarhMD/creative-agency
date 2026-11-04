import heroImgMob from "../../assets/mobile/image-hero.jpg";
import heroImgTab from "../../assets/tablet/image-hero.jpg";
import heroImgDesk from "../../assets/desktop/image-hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative md:h-151.5 md:pt-15.5 md:pl-10 xl:pt-28 xl:pl-41.25">
      <div className="md:absolute md:h-full md:top-0 md:right-0 ">
        <picture>
          <source media="(min-width:1280px )" srcset={heroImgDesk} />
          <source media="(min-width:768px )" srcset={heroImgTab} />
          <img
            src={heroImgMob}
            alt="Image of the two people working in the office"
          />
        </picture>
      </div>
      <div className="px-6 py-14 md:p-0  md:w-[50%] max-w-141 relative z-1">
        <h1 className="preset-3 md:preset-2 xl:preset-1 text-neutral-950 mb-4 md:w-[90%] xl:w-full">
          Branding & website design agency
        </h1>
        <p className="preset-8-r xl:preset-6-r text-neutral-950 mb-10">
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <button className="cursor-pointer px-10 py-6 bg-red-500 hover:bg-red-300 preset-7-xb text-neutral-0">
          Learn More
        </button>
      </div>
    </section>
  );
}
