import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { trackJoinCta } from "@/scripts/analytics";

const JoinUsBanner = () => {
  const handleJoinClick = () => {
    trackJoinCta("join-banner");
  };

  return (
    <section className="py-20 bg-orange text-white">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-heading-m font-semibold mb-6">
              Join Us in Shaping the Future of AI
            </h2>
          </ScrollReveal>

          <ScrollReveal staggerIndex={1}>
            <p className="text-lg mb-8">
              We're building a team of exceptional people who are passionate
              about creating AI that benefits humanity. If you're excited about
              our mission, we want to hear from you.
            </p>
          </ScrollReveal>

          <ScrollReveal staggerIndex={2}>
            <Button
              href="/team"
              variant="secondary"
              size="lg"
              onClick={handleJoinClick}
            >
              Join Our Team
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default JoinUsBanner;
