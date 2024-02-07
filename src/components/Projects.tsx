import { Button } from "./UI/Button.tsx";

export default function Projects() {
  return (
    <nav
      className={
        "flex flex-col sm:p-4 items-start z-20 sm:justify-end sm:items-end"
      }
    >
      <h2 className={"text-xl text-[#939b9b] p-2"}>Projects:</h2>
      <Button title={"Marks"} />
      <Button title={"Personal-Blog"} />
      <Button title={"E-Commerce-Website"} />
      <Button title={"E-Commere Dashboard"} />
    </nav>
  );
}
