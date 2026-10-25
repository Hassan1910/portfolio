import Section from "@/components/Section";
import { moreProjects, profile, projects } from "@/data/profile";

const ProjectsSection = () => {
  return (
    <Section
      id="projects"
      eyebrow="Selected projects"
      title="Things I have shipped"
      intro="Live work from the current CV. Stack notes match what each project actually runs on."
    >
      <div className="divide-y divide-border border-y border-border">
        {projects.map((project) => (
          <article key={project.name} className="py-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-medium text-foreground">
                {project.live ? (
                  <a href={project.live} className="text-link" target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p className="text-sm text-muted-foreground">{project.summary}</p>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{project.detail}</p>
            <p className="mt-3 text-xs tracking-wide text-muted-foreground">{project.stack.join(" · ")}</p>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {project.live ? (
                <a href={project.live} className="text-link" target="_blank" rel="noopener noreferrer">
                  Live site
                </a>
              ) : null}
              {project.repo ? (
                <a href={project.repo} className="text-link" target="_blank" rel="noopener noreferrer">
                  Source
                </a>
              ) : null}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-medium text-foreground">Also on GitHub</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          {moreProjects.map((project) => (
            <li key={project.name}>
              <a href={project.href} className="text-link" target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
              <span> — {project.detail}</span>
            </li>
          ))}
          <li>Earlier gym and driving-school systems are on GitHub as well.</li>
        </ul>
        <p className="mt-4 text-sm">
          <a href={profile.github} className="text-link" target="_blank" rel="noopener noreferrer">
            github.com/Hassan1910
          </a>
        </p>
      </div>
    </Section>
  );
};

export default ProjectsSection;
