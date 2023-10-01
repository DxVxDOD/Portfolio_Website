import { useEffect } from "react";
import SocialLinks from "./components/SocialLinks.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Cursor from "./components/Cursor.tsx";

function App() {
  const cursorAnimation = (
    cursor: HTMLElement,
    e: MouseEvent,
    interacting: boolean,
  ) => {
    const x = e.clientX - 25.5;
    const y = e.clientY - 25.5;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`,
    };
    cursor.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });
  };

  const getCursorType = (type: string | null) => {
    switch (type) {
      case 'button':
        return 'red'
      default:
        return 'blue'
    }
  }

  useEffect(() => {
    const cursor = document.getElementById("cursor")!;
    window.onmousemove = (e) => {
      const target = e.target as HTMLElement;
      const interactable = target.closest(".interactable")! as HTMLElement;


      const interacting = interactable !== null;

      cursorAnimation(cursor, e, interacting);

      if(interacting) return cursor.style.fill = getCursorType(interactable.getAttribute('datatype'))

      if(!interacting) return cursor.style.fill = 'white'

    };
  }, []);

  return (
    <main
      className={
        "bg-zinc-950 w-screen h-screen overflow-hidden box-border grid grid-cols-2 grid-rows-2 m-0 p-20 text-zinc-300"
      }
    >
      <h1 id={'name'} className={"flex flex-col text-5xl"}>
        <p className={"w-fit"}>David Orbang</p>
        <p className={"p-10 pl-20 w-fit"}>Front-End Developer</p>
      </h1>
      <SocialLinks />
      <About />
      <Projects />
      <Cursor />
    </main>
  );
}

export default App;
