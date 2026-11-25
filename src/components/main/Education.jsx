import Section from "../Section/Section";
import Reveal from "../Reveal/Reveal";
import { education } from "../../data/education";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="grid gap-10 md:grid-cols-3">
        {education.map((item, i) => (
          <Reveal as="li" key={item.level} delay={i * 120} className="group">
            <span
              aria-hidden="true"
              className="block h-0.5 w-12 bg-line transition-all duration-500 group-hover:w-full group-hover:bg-accent"
            />
            <p className="mt-6 text-sm text-muted">{item.period}</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">
              {item.level} in {item.field}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{item.school}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}