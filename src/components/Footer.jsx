import BgPattern from "./reusable/BgPattern";

export default function Footer() {
  return (
    <footer className="px-6 py-24 md:h-66 md:py-0 md:pt-17.5 xl:h-92 xl:p-0 xl:flex xl:items-center xl:justify-center relative">
      <div className="mx-auto w-full flex flex-col md:flex-row items-center justify-start md:justify-between gap-12 md:w-[89.71%] md:max-w-277.5">
        <p className="preset-4 xl:preset-2 text-neutral-950 md:w-1/2 md:max-w-158.5">
          Let's build something great together.
        </p>
        <button className="cursor-pointer px-10 py-6 bg-red-500 hover:bg-red-300 preset-7-xb xl:preset-6-xb text-neutral-0">
          Schedule a Call
        </button>
      </div>
      <BgPattern
        type="red"
        style="hidden xl:block absolute xl:w-33.5 xl:h-15 -left-16.75"
      />
    </footer>
  );
}
