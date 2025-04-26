"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import MotionSection from "../ui/MotionSection";

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
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionSection className="py-28 md:py-36">
      <div className="container mx-auto px-[var(--s28)] sm:px-[var(--s32)] md:px-[var(--s40)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="team-member"
              initial={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative w-full aspect-square mb-6 bg-[rgb(var(--color-light-2))] rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                {member.imageUrl && (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                )}
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-lg font-medium text-sesame-accent mb-3">
                {member.role}
              </p>
              <p className="text-base">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default TeamMembers;
