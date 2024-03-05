import SocialLinks from "./components/SocialLinks.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Cursor from "./components/Cursor.tsx";
import { useMediaQuery } from "./hooks/useMediaQuery.tsx";
import { useTouch } from "./hooks/useTouch.tsx";

function App() {
  const mediaQuery = useMediaQuery("sm");

  let touch = useTouch();

  return (
    <main
      className={
        "bg-[#0D0E0E] w-screen h-screen overflow-hidden justify-between box-border flex flex-col xl:text-lg 2xl:text-xl text-md sm:grid sm:p-10 sm:grid-cols-2 sm:grid-rows-2 m-0 xl:p-20 p-6 text-[#dadddd]"
      }
    >
      <h1
        id={"name"}
        className={
          "flex flex-col text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl"
        }
      >
        <p className={"w-fit"}>David Orban</p>
        <p className={"xl:p-10 pl-6 xl:pl-20 w-fit"}>Full-Stack Developer</p>
      </h1>
      {mediaQuery && (
        <>
          <SocialLinks />
          <About />
          <Projects />
        </>
      )}
      {!mediaQuery && (
        <section className={"flex h-[80%] justify-between flex-col sm:gap-16"}>
          <About />
          <aside className="flex flex-col gap-4 ">
            <Projects />
            <SocialLinks />
          </aside>
        </section>
      )}
      {!touch && <Cursor />}
    </main>
  );
}

export default App;
