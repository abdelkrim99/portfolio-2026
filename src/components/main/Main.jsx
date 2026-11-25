import Focus from "./Focus";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "../contact/Contact";

export default function Main() {
  return (
    <>
      <Focus />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}