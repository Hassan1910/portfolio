import Section from "@/components/Section";
import { experience } from "@/data/profile";

const ExperienceSection = () => {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I have worked"
      intro="Current technical internship at Mawingu, then Savenet, Marsabit General Hospital, and an attachment at NHIF Isiolo."
    >
      <ol className="space-y-12">
        {experience.map((role) => (
          <li key={`${role.org}-${role.period}`} className="grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
            <p className="text-sm tabular-nums text-muted-foreground">{role.period}</p>
            <div>
              <h3 className="text-base font-medium text-foreground">{role.title}</h3>
              <p className="mt-1 text-sm text-foreground">{role.org}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{role.context}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="text-primary">
                      –
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default ExperienceSection;
