import { useRef } from "react";
import Section from "../Section/Section";
import Reveal from "../Reveal/Reveal";
import { experience } from "../../data/experience";
import { useScrollFill } from "../../hooks/useScroll";

export default function Experience() {
  const listRef = useRef(null);
  useScrollFill(listRef);

  return (
    <Section id="experience" title="Experience" tone="surface">
      <ol ref={listRef} className="relative ml-2">
        {/* ligne de base + ligne qui se remplit au scroll */}
        <span aria-hidden="true" className="absolute left-0 top-0 h-full w-0.5 bg-line" />
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-0.5 origin-top bg-accent"
          style={{ transform: "scaleY(var(--p, 0))" }}
        />

        {experience.map((job) => (
          <Reveal as="li" key={job.id} className="relative pb-14 pl-10 last:pb-0">
            <span className="absolute -left-[7px] top-1.5 grid size-4 place-items-center" aria-hidden="true">
              {job.current && (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              )}
              <span
                className={`relative size-4 rounded-full border-2 border-accent ${
                  job.current ? "bg-accent" : "bg-surface"
                }`}
              />
            </span>

            <p className="text-sm text-muted">{job.period}</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">{job.role}</h3>
            <p className="mt-1 flex flex-wrap items-center gap-2 text-muted">
              {job.company}
              {job.current && (
                <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-on-accent">
                  Current
                </span>
              )}
            </p>

            {job.summary && <p className="mt-4 max-w-3xl leading-relaxed text-muted">{job.summary}</p>}

            {job.highlights?.length > 0 && (
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-muted/50">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {job.tags?.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <li key={tag} className="rounded-md border border-line bg-canvas px-2.5 py-1 text-xs font-medium">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
