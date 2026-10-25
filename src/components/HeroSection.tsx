import { profile } from "@/data/profile";

const HeroSection = () => {
  return (
    <section id="home" className="page-wrap pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="flex items-start justify-between gap-8">
        <div>
          <p className="eyebrow">{profile.location}</p>
          <h1 className="serif mt-4 text-5xl tracking-tight text-foreground md:text-6xl">{profile.name}</h1>
          <p className="mt-3 text-lg text-foreground md:text-xl">{profile.role}</p>
        </div>
        <img
          src="/images/profile pic.jpg"
          alt="Portrait of Hassan Adan"
          width={96}
          height={96}
          className="mt-1 h-20 w-20 shrink-0 rounded-full border border-border object-cover object-[center_18%] md:h-24 md:w-24"
        />
      </div>

      <p className="serif mt-10 max-w-xl text-2xl leading-snug text-foreground md:text-[1.75rem]">
        {profile.tagline}
      </p>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
        Technical Intern in Technology Operations at Mawingu. Diploma in ICT Technician (Level 6), KeMU TVET.
        Earlier roles were in Marsabit and Isiolo.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href="#contact" className="btn-primary">
          Contact
        </a>
        <a href={profile.cvPath} className="btn-ghost">
          Download CV
        </a>
      </div>

      <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <li>
          <a className="text-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </li>
        <li>
          <a className="text-link" href={`tel:${profile.phoneTel}`}>
            {profile.phoneDisplay}
          </a>
        </li>
        <li>
          <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
};

export default HeroSection;
