import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { trackOpenRolesCta } from "@/scripts/analytics";

const CareersBanner = () => {
  const handleOpenRolesClick = () => {
    trackOpenRolesCta("careers-banner");
  };

  return (
    <section className="py-20 md:py-32 bg-black/5">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <ScrollReveal>
            <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <Image
                src="/images/office-team.jpg"
                alt="Sesame AI team members collaborating in the office"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-heading-m font-semibold mb-6">
                Careers at Sesame AI
              </h2>
            </ScrollReveal>

            <ScrollReveal staggerIndex={1}>
              <p className="text-lg text-gray mb-6">
                We're solving challenging technical problems at the frontier of
                AI research and engineering. Our team is diverse, collaborative,
                and driven by our mission to create beneficial AI.
              </p>
            </ScrollReveal>

            <ScrollReveal staggerIndex={2}>
              <p className="text-lg text-gray mb-8">
                We offer competitive compensation, excellent benefits, and the
                opportunity to work on technology that can positively impact
                billions of lives.
              </p>
            </ScrollReveal>

            <ScrollReveal staggerIndex={3}>
              <Button
                href="https://www.sesame.com/careers"
                external
                size="lg"
                onClick={handleOpenRolesClick}
              >
                See Open Roles
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersBanner;
