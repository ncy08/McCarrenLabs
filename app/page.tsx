import HeroSection from "@/components/home/HeroSection";
import GoalsSection from "@/components/home/GoalsSection";
import JoinUsBanner from "@/components/home/JoinUsBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <GoalsSection />
        <JoinUsBanner />
      </main>

      <Footer />
    </>
  );
}
