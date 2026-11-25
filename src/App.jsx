import { useEffect, useState } from "react";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";

export default function App() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowArrow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="header">
      <Header />

      <main>
        <Hero />
        <Main />
      </main>

      <Footer />

      <a
        href="#header"
        aria-label="Back to top"
        aria-hidden={!showArrow}
        tabIndex={showArrow ? 0 : -1}
        className={`fixed bottom-6 right-6 z-40 grid size-11 place-items-center rounded-full bg-accent text-on-accent transition-all duration-300 hover:-translate-y-0.5 ${showArrow ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
    </div>
  );
}