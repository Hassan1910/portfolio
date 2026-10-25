import Section from "@/components/Section";
import { aboutParagraphs } from "@/data/profile";

const AboutSection = () => {
  return (
    <Section id="about" eyebrow="About" title="Support first, then the tools around it">
      <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>Project work sits beside the helpdesk and network support.</p>
      </div>
    </Section>
  );
};

export default AboutSection;
