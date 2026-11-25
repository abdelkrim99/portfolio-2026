import Reveal from "../Reveal/Reveal";

export default function Section({ id, title, description, tone = "canvas", children }) {
  return (
    <section id={id} className={`py-10 sm:py-14 ${tone === "surface" ? "bg-surface" : ""}`}>
      <div className="wrapper">
        <Reveal className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
          {description && <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
