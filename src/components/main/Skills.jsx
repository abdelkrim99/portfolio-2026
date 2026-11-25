import Section from "../Section/Section";
import Reveal from "../Reveal/Reveal";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" tone="surface">
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.id} delay={(i % 2) * 100}>
            <h3 className="mb-4 font-semibold">{group.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-canvas px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:border-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
