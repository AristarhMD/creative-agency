import designImgMob from "../../assets/mobile/image-strategic.jpg";
import designImgTab from "../../assets/tablet/image-strategic.jpg";
import designImgDesk from "../../assets/desktop/image-strategic.jpg";

export default function DesignSection() {
  return (
    <section className="md:flex">
      <div className="h-50 md:h-164.5 xl:h-246 w-full xl:w-[51%]">
        <picture className="block h-full w-full">
          <source media="(min-width:1280px )" srcSet={designImgDesk} />
          <source media="(min-width:768px )" srcSet={designImgTab} />
          <img
            src={designImgMob}
            alt="Photo of the table from top with some persons thats working on laptop and drinking coffe"
            className="h-full w-full object-cover object-bottom"
          />
        </picture>
      </div>
      <div className="bg-neutral-900 px-6 py-18 md:pt-29 md:pl-17.25 xl:pt-50 xl:pl-38.5 md:w-full xl:w-[49%]">
        <article className="md:w-[88.8%] max-w-111.25">
          <h2 className="preset-4 xl:preset-2 text-neutral-0 mb-6 md:w-1/2 xl:w-full">
            <span className="text-red-500">Design</span> is strategic.
          </h2>
          <p className="preset-8-r xl:preset-6-r mb-10 text-neutral-0">
            “A well-crafted design strategy consistently produces desired
            outcomes and brand awareness. We are firm believers that success
            lies in creative collaboration with our clients.”
          </p>
          <button className="cursor-pointer preset-8-xb xl:preset-6-xb text-red-500 border-b-2 border-red-500 pb-2">
            Schedule a Call
          </button>
        </article>
      </div>
    </section>
  );
}
