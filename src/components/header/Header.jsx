import { useEffect, useRef, useState } from "react";
import { navigation } from "../../data/navigation";
import { profile } from "../../data/profile";
import { useTheme } from "../../hooks/useTheme";
import { useActiveSection, usePageProgress } from "../../hooks/useScroll";

const sectionIds = navigation.map((item) => item.href.slice(1));

const iconButton =
  "grid size-10 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:text-ink";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(sectionIds);
  const progressRef = useRef(null);
  usePageProgress(progressRef);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const linkClass = (href) =>
    `relative py-1 transition-colors hover:text-ink ${active === href.slice(1) ? "text-ink" : ""
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur">
      <div className="wrapper flex h-16 items-center justify-between gap-6">
        <a href="#about" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
          <span className="size-3 rounded-sm bg-accent" aria-hidden="true" />
          {profile.name}
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-muted">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href.slice(1) ? "true" : undefined}
                  className={linkClass(item.href)}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300 ${active === item.href.slice(1) ? "scale-x-100" : "scale-x-0"
                      }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className={iconButton}
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <span className="icon-moon-o" aria-hidden="true" />
            ) : (
              <span className="icon-sun text-amber-500" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            className={`${iconButton} md:hidden`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={open ? "icon-close" : "icon-menu"} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={progressRef}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent"
      />

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-canvas md:hidden">
          <ul className="wrapper divide-y divide-line py-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 font-medium ${active === item.href.slice(1) ? "text-ink" : "text-muted"
                    } hover:text-ink`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
