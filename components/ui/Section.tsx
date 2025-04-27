export default function Section({
  num,
  children,
}: {
  num?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative px-[6vw] py-16">
      {num && <p className="text-ink/40 text-base font-normal mb-4">{num}</p>}
      {children}
      <hr className="h-px bg-fog border-0 mt-16" />
    </section>
  );
}
