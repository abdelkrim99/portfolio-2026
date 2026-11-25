import Section from "../Section/Section";
import Reveal from "../Reveal/Reveal";
import { projects } from "../../data/projects";

function ProjectItem({ project, index }) {
  return (
    <Reveal as="article" delay={(index % 2) * 120} className="group">
      <div className="grid h-56 place-items-center overflow-hidden rounded-2xl bg-line/40 p-6">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-5">
        <p className="text-sm text-muted">{project.context}</p>
        <h3 className="mt-1 text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

        {project.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs font-medium">
                {tag}
              </li>
            ))}
          </ul>
        )}

        {project.links.length > 0 && (
          <div className="mt-4 flex gap-5">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-link underline-offset-4 hover:underline"
              >
                <span className={link.icon} aria-hidden="true" />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" description="Academic projects and side work.">
      <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectItem key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
