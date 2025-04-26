import TeamMembers from "@/components/team/TeamMembers";
import MotionSection from "@/components/ui/MotionSection";
import GridBand from "@/components/ui/GridBand";

export const metadata = {
  title: "Team | Sesame AI",
  description: "Meet our team",
};

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "CEO & Co-Founder",
      bio: "Passionate about creating technology that enhances human potential.",
      imageUrl: "/images/team/team-1.jpg",
    },
    {
      name: "John Smith",
      role: "CTO & Co-Founder",
      bio: "Leading our technical vision with expertise in AI and machine learning.",
      imageUrl: "/images/team/team-2.jpg",
    },
    {
      name: "Alex Johnson",
      role: "Head of Research",
      bio: "Pioneering voice technology research with over 10 years of experience.",
      imageUrl: "/images/team/team-3.jpg",
    },
    {
      name: "Sarah Williams",
      role: "Lead Designer",
      bio: "Creating intuitive and beautiful experiences for our users.",
      imageUrl: "/images/team/team-4.jpg",
    },
  ];

  return (
    <main>
      <MotionSection className="bg-white py-24 md:py-36">
        <GridBand>
          <div className="col-start-2 col-end-12 lg:col-end-10">
            <h1 className="heading-2 font-semibold mb-6">Our Team</h1>
            <p className="body-lg mb-12 max-w-2xl">
              Sesame is built by an interdisciplinary team of researchers,
              engineers, designers, and operators with experience from leading
              technology companies and research labs.
            </p>
          </div>
        </GridBand>
      </MotionSection>

      <TeamMembers members={teamMembers} />
    </main>
  );
}
