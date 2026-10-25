import Section from "@/components/Section";
import { certifications, education } from "@/data/profile";

const EducationSection = () => {
  return (
    <Section id="education" eyebrow="Education" title="Study and certificates">
      <div className="space-y-8">
        {education.map((item) => (
          <div key={item.title} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-8">
            <p className="text-sm tabular-nums text-muted-foreground">{item.period}</p>
            <div>
              <h3 className="text-base font-medium text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.place}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mb-6 mt-14 text-sm font-medium uppercase tracking-[0.16em] text-primary">Certifications</h3>
      <ul className="space-y-6">
        {certifications.map((cert) => (
          <li key={cert.name} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-8">
            <p className="text-sm tabular-nums text-muted-foreground">{cert.period}</p>
            <div>
              <p className="text-base font-medium text-foreground">{cert.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {cert.issuer}
                {cert.detail ? ` · ${cert.detail}` : ""}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-sm text-muted-foreground">Driving licence: held.</p>
    </Section>
  );
};

export default EducationSection;
