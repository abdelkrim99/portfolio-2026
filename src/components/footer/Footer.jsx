import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrapper flex flex-col items-center gap-8 py-12 md:flex-row md:justify-between">
        <figure className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
          <img
            src={profile.avatar}
            alt={profile.fullName}
            className="size-20 rounded-full object-cover object-top ring-4 ring-accent"
          />
          <blockquote className="max-w-xs text-lg font-medium leading-snug">
            “{profile.quote}”
          </blockquote>
        </figure>

        <ul className="flex items-center gap-1">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid size-11 place-items-center rounded-full text-xl text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                <span className={s.icon} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line">
        <p className="wrapper py-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}’s portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
