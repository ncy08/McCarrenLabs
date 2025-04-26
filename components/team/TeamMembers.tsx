import React from "react";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

const defaultMembers: TeamMember[] = [
  {
    name: "Jane Doe",
    role: "CEO & Co-Founder",
    bio: "Passionate about creating technology that enhances human potential.",
    imageUrl: "/images/team/placeholder.jpg",
  },
  {
    name: "John Smith",
    role: "CTO & Co-Founder",
    bio: "Leading our technical vision with expertise in AI and machine learning.",
    imageUrl: "/images/team/placeholder.jpg",
  },
];

type TeamMembersProps = {
  members?: TeamMember[];
};

const TeamMembers = ({ members = defaultMembers }: TeamMembersProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-[var(--s28)] sm:px-[var(--s32)] md:px-[var(--s40)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {members.map((member, index) => (
            <div key={index} className="team-member">
              <div className="relative w-full aspect-square mb-6 bg-[rgb(var(--color-light-2))]">
                {member.imageUrl && (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-lg font-medium text-[rgb(var(--color-green-6))] mb-3">
                {member.role}
              </p>
              <p className="text-base">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
