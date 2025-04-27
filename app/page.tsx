import HeroSection from "@/components/home/HeroSection";
import GoalsSection from "@/components/home/GoalsSection";
import JoinUsBanner from "@/components/home/JoinUsBanner";
// import ScrollFades from "@/components/ui/ScrollFades";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GoalsSection />
      <JoinUsBanner />
      {/* <ScrollFades /> */}
    </main>
  );
}
