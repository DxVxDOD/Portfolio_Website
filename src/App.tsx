import SocialLinks from "./components/SocialLinks.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Cursor from "./components/Cursor.tsx";

function App() {
  return (
    <main
      className={
        "bg-[#0D0E0E] w-screen h-screen overflow-hidden box-border text-xl grid grid-cols-2 grid-rows-2 m-0 p-20 text-[#dadddd]"
      }
    >
      <h1 id={"name"} className={"flex flex-col text-7xl"}>
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
