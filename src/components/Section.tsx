import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

const Section = ({ id, eyebrow, title, intro, children }: SectionProps) => {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 border-t border-border">
      <div className="page-wrap py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`} className="serif mt-3 text-3xl tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        {intro ? (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
};

export default Section;
