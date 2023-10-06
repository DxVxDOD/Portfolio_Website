import SocialLinks from "./components/SocialLinks.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Cursor from "./components/Cursor.tsx";
import { useMediaQuery } from "./hooks/useMediaQuery.tsx";

function App() {
  return (
    <main
      className={
        "bg-[#0D0E0E] w-screen h-screen overflow-hidden box-border flex flex-col justify-between xl:text-xl text-md " +
        "sm:grid sm:grid-cols-2 sm:grid-rows-2 m-0 xl:p-20 p-6 text-[#dadddd]"
      }
    >
      <h1
        id={"name"}
        className={"flex flex-col text-3xl md:text-5xl xl:text-7xl"}
      >
        <p className={"w-fit"}>David Orbang</p>
        <p className={"xl:p-10 pl-6 xl:pl-20 w-fit"}>Front-End Developer</p>
      </h1>
      {useMediaQuery("sm") &&
      <>
        <SocialLinks/>
        <About/>
        <Projects/>
      </>
      }
      {!useMediaQuery("sm") && (
        <section className={"flex flex-col gap-16"}>
          <Projects />
          <SocialLinks />
        </section>
      )}
      <Cursor />
    </main>
  );
}

export default App;
