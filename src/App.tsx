import { useRef } from "react";
import { About } from "./components/about";
import { Header } from "./components/header";

function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="App">
        <Header
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <About ref={aboutRef} />
        <About ref={skillsRef} />
        <About ref={projectsRef} />
        <About ref={contactRef} />
      </div>
    </>
  );
}

export default App;
