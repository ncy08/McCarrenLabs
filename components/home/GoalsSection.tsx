import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

/**
 * Goals Section Component
 *
 * Implements requirement from PRD:
 * Key comp: Goal card badge 72px
 */

const goals = [
  {
    icon: "/images/icons/brain.svg",
    title: "Advanced Research",
    description:
      "Pushing the boundaries of AI through novel architectures and algorithms.",
  },
  {
    icon: "/images/icons/lock.svg",
    title: "Safety & Alignment",
    description:
      "Ensuring AI systems are aligned with human values and operate safely.",
  },
  {
    icon: "/images/icons/chart.svg",
    title: "Real-World Impact",
    description:
      "Applying our technology to solve meaningful problems across industries.",
  },
  {
    icon: "/images/icons/team.svg",
    title: "Collaborative Culture",
    description:
      "Building a diverse team of researchers, engineers and domain experts.",
  },
];

const GoalsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-heading-m font-semibold mb-6">
              Our Mission & Goals
            </h2>
            <p className="text-lg text-gray">
              We're on a mission to develop artificial intelligence that is
              safe, beneficial, and accessible to everyone.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <ScrollReveal key={goal.title} staggerIndex={index + 1}>
              <div className="bg-white rounded-md p-6 shadow-default hover:shadow-lg transition-shadow duration-300">
                <div className="w-[72px] h-[72px] bg-black/5 rounded-full flex items-center justify-center mb-6">
                  <Image src={goal.icon} alt="" width={36} height={36} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{goal.title}</h3>
                <p className="text-gray">{goal.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
