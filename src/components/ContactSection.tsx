import ContactForm from "@/components/contact/ContactForm";
import Section from "@/components/Section";
import { profile } from "@/data/profile";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phoneDisplay, href: `tel:${profile.phoneTel}` },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
  { label: "GitHub", value: profile.githubLabel, href: profile.github },
];

const ContactSection = () => {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Write or call"
      intro={`${profile.locationLong}. Email is the most reliable way to reach me.`}
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_16rem] lg:gap-16">
        <ContactForm />
        <ul className="space-y-5 text-sm">
          <li>
            <p className="text-muted-foreground">Location</p>
            <p className="mt-1 text-foreground">{profile.locationLong}</p>
          </li>
          {links.map((link) => (
            <li key={link.label}>
              <p className="text-muted-foreground">{link.label}</p>
              <a
                href={link.href}
                className="text-link mt-1 inline-block break-all"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default ContactSection;
