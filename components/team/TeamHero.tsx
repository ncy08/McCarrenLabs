import React from "react";

const TeamHero = () => {
  return (
    <section className="pt-[var(--s80)] md:pt-[var(--s120)]">
      <div className="container mx-auto px-[var(--s28)] sm:px-[var(--s32)] md:px-[var(--s40)]">
        <h1 className="text-6xl font-bold mb-8">Our Team</h1>
        <p className="text-xl max-w-2xl mb-12">
          We believe in building technology that empowers people. Our diverse
          team of experts is dedicated to creating AI solutions that feel
          natural and intuitive.
        </p>
      </div>
    </section>
  );
};

export default TeamHero;
