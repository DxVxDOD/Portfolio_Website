import { useEffect, useRef } from "react";

export default function About() {
  const textRef = useRef<HTMLDivElement>(null);

  const longText = `A <b>Front-End Developer</b> who is passionate about web development and eager to tackle challenges. Specializing in <b>React</b> and <b>Typescript</b>, I am open to new technologies and aspire to become a <b>Full-Stack Developer</b>. I prioritize optimal coding practices and embrace diverse ideas to drive innovation and excellence in my career.`;

  const textArray = longText.split(" ");

  function textAnimation(text: HTMLDivElement | null, textArray: string[]) {
    let newDom = "";
    const animationDelay = 6;

    if (text) {
      for (let i = 0; i < textArray.length; i++) {
        newDom += '<span class="char">' + textArray[i] + "&nbsp;" + "</span>";
      }

      text.innerHTML = newDom;
      const length = text.children.length;

      const textChildren = Array.from(
        text.children as HTMLCollectionOf<HTMLDivElement>,
      );

      for (let i = 0; i < length; i++) {
        textChildren[i].setAttribute(
          "style",
          `animation-delay: ${animationDelay * i}ms`,
        );
      }
    }
  }

  useEffect(() => {
    const text = textRef.current;

    textAnimation(text, textArray);
  }, [textRef]);

  return (
    <aside className="text-sm md:text-lg xl:text-xl">
      <div className="text" ref={textRef}>
        {longText}
      </div>
    </aside>
  );
}
