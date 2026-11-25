import Section from "../Section/Section";
import Reveal from "../Reveal/Reveal";
import { focus } from "../../data/focus";

export default function Focus() {
  return (
    <Section id="focus" title="What I do" description="Full-stack applications, built on solid data.">
      <div className="grid gap-10 md:grid-cols-3">
        {focus.map((item, i) => (
          <Reveal key={item.id} delay={i * 120} className="group">
            <span
              aria-hidden="true"
              className="block h-0.5 w-12 bg-line transition-all duration-500 group-hover:w-full group-hover:bg-accent"
            />
            <h3 className="mt-6 text-xl font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
