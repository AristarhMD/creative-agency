import DesignSection from "./reusable/DesignSection";
import HeroSection from "./reusable/HeroSection";

export default function Content() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <DesignSection />
    </main>
  );
}
