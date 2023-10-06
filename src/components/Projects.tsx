export default function Projects() {
  return (
    <nav className={"flex flex-col xl:p-4 items-start z-20 xl:items-end"}>
      <h2 className={"text-xl text-[#939b9b] p-2"}>Projects:</h2>
      <button
        datatype={"button"}
        className={
          "interactable hover:bg-[#202222] hover:text-[#f9f9f9] p-2 rounded-xl"
        }
      >
        Marks /1\
      </button>
      <button
        datatype={"button"}
        className={
          "interactable hover:bg-[#202222] hover:text-[#f9f9f9] p-2 rounded-xl"
        }
      >
        Personal-Blog /2\
      </button>
      <button
        datatype={"button"}
        className={
          "interactable hover:bg-[#202222] hover:text-[#f9f9f9] p-2 rounded-xl"
        }
      >
        E-Commerce-Website /3\
      </button>
    </nav>
  );
}
