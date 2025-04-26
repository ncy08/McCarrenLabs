import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { trackJoinCta } from "@/scripts/analytics";

const HeroSection = () => {
  const handleJoinClick = () => {
    trackJoinCta("hero");
  };

  return (
    <section className="h-hero md:min-h-[90vh] relative overflow-hidden bg-gradient-to-br from-black to-black/90 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/hero-pattern.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20 pb-16">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl lg:text-display-xl font-bold max-w-4xl mx-auto mb-6">
            Building AI to Solve Hard Problems
          </h1>
        </ScrollReveal>

        <ScrollReveal staggerIndex={1}>
          <p className="text-lg md:text-xl text-gray max-w-2xl mx-auto mb-10">
            Sesame AI is creating next-generation artificial intelligence to
            tackle the world's most complex challenges. Join us on this journey.
          </p>
        </ScrollReveal>

        <ScrollReveal staggerIndex={2}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/team" size="lg" onClick={handleJoinClick}>
              Join Our Team
            </Button>
            <Button
              href="https://www.sesame.com/research"
              variant="outline"
              size="lg"
              external
              className="border-white text-white hover:bg-white/10"
            >
              View Research
            </Button>
          </div>
        </ScrollReveal>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
