import { profile } from "../../data/profile";

export default function Marquee() {
  const items = [...profile.techStack, ...profile.techStack];

  return (
    <div className="overflow-hidden border-y border-line bg-surface py-5" aria-hidden="true">
      <ul className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {items.map((name, i) => (
          <li key={i} className="flex items-center gap-10 pr-10 text-lg font-semibold text-muted">
            {name}
            <span className="size-1.5 rounded-sm bg-accent" />
          </li>
        ))}
      </ul>
    </div>
  );
}
