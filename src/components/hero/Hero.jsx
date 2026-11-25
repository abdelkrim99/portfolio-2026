import { Fragment } from "react";
import { profile } from "../../data/profile";
import Marquee from "../Marquee/Marquee";

const STEP = 60; // ms entre chaque mot du titre

export default function Hero() {
  const words = profile.headline.split(" ");
  const after = words.length * STEP;

  return (
    <>
      <section id="about" className="wrapper pb-8 pt-6 sm:pb-12 sm:pt-10">
        <div className="flex items-center gap-4">
          <img
            src={profile.avatar}
            alt={profile.fullName}
            className="size-14 rounded-full object-cover object-top ring-2 ring-accent ring-offset-4 ring-offset-canvas"
          />
          <p className="text-sm font-medium">
            {profile.fullName}
            <span className="block text-muted">{profile.title ?? "Software engineer & web developer"}</span>
          </p>
        </div>

        <h1 className="mt-10 max-w-3xl text-4xl font-bold leading-[0.98] tracking-tighter sm:text-6xl">
          {words.map((word, i) => (
            <Fragment key={i}>
              <span className="inline-block animate-rise" style={{ animationDelay: `${i * STEP}ms` }}>
                {word}
              </span>{" "}
            </Fragment>
          ))}
        </h1>

        <p
          className="mt-8 max-w-xl animate-rise text-lg leading-relaxed text-muted"
          style={{ animationDelay: `${after + 50}ms` }}
        >
          {profile.bio}
        </p>

        <div
          className="mt-10 flex animate-rise flex-wrap items-center gap-3"
          style={{ animationDelay: `${after + 150}ms` }}
        >
          <a
            href="#contact"
            className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </a>
          <a
            href={profile.cv.url}
            download={profile.cv.filename}
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-ink"
          >
            <span className="icon-download" aria-hidden="true" />
            {profile.cv.label}
          </a>
          <ul className="ml-2 flex items-center">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full text-xl text-muted transition-colors hover:text-ink"
                >
                  <span className={s.icon} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Marquee />
    </>
  );
}
