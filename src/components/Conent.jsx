import ApproachSection from "./reusable/ApproachSection";
import DesignSection from "./reusable/DesignSection";
import HeroSection from "./reusable/HeroSection";
import SliderSection from "./reusable/SliderSection";

export default function Content() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <DesignSection />
      <ApproachSection />
      <SliderSection />
    </main>
  );
}
