import Section from "@/components/Section";
import { alsoBuilds, homeLab, skillGroups } from "@/data/profile";

const SkillsSection = () => {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I use day to day"
      intro="Network, helpdesk and desktop support come first. Web frameworks are how some of the side projects are built."
    >
      <dl className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.title} className="grid gap-1 sm:grid-cols-[14rem_1fr] sm:gap-8">
            <dt className="text-sm font-medium text-foreground">{group.title}</dt>
            <dd className="text-sm leading-relaxed text-muted-foreground">{group.body}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 border-t border-border pt-8">
        <h3 className="text-sm font-medium text-foreground">Also builds</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{alsoBuilds.join(" · ")}</p>
      </div>

      <div className="mt-8 border-t border-border pt-8">
        <h3 className="text-sm font-medium text-foreground">Home lab</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{homeLab}</p>
      </div>
    </Section>
  );
};

export default SkillsSection;
