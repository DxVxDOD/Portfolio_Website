import { useEffect } from "react";

export default function Cursor() {
  const touch = window.matchMedia("(hover: none)").matches;
  const cursorAnimation = (
    cursor: HTMLElement,
    e: MouseEvent,
    interacting: boolean,
  ) => {
    const x = e.clientX - cursor.clientWidth / 2;
    const y = e.clientY - cursor.clientHeight / 2;

    const keyframes = {
      transform: `translate(${x}px, ${
        interacting ? y - cursor.clientHeight / 1.5 : y
      }px) scale(${interacting ? 2 : 1})`,
    };
    cursor.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });
  };

  useEffect(() => {
    const cursor: HTMLElement = document.querySelector(".cursor")!;
    window.onmousemove = (e) => {
      const target = e.target as HTMLElement;
      const interactable = target.closest(".interactable")! as HTMLElement;
      const interacting = interactable !== null;

      cursorAnimation(cursor, e, interacting);

      if (interacting) {
        cursor.setAttribute("class", "cursor show");
        if (interactable.getAttribute("datatype") === "button")
          return cursor.children[1].setAttribute("class", "icon show");
        return cursor.children[2].setAttribute("class", "icon show");
      }

      if (!interacting) {
        const childrenArray = [...cursor.children];
        for (let i = 1; i < childrenArray.length; i++) {
          childrenArray[i].setAttribute("class", "icon");
        }
        cursor.setAttribute("class", "cursor");
      }
    };
    document.body.onmouseleave = () => {
      cursor.setAttribute("class", "cursor hide ");
    };
  }, []);

  if (touch) return null;

  return (
    <svg
      className={"cursor"}
      xmlns="http://www.w3.org/2000/svg"
      fill="#dadddd"
      width={40}
      height={40}
      viewBox={"0 0 40 40"}
    >
      <circle cx="20" cy="20" r="20" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="black"
        width="30"
        height="30"
        viewBox="-15 -15 40 40"
      >
        <path d="M4,17H20a1,1,0,0,0,.832-1.555l-8-12a1.039,1.039,0,0,0-1.664,0l-8,12A1,1,0,0,0,4,17ZM12,5.8,18.131,15H5.869ZM3,20a1,1,0,0,1,1-1H20a1,1,0,0,1,0,2H4A1,1,0,0,1,3,20Z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="-15 -15 40 40"
        fill="none"
      >
        <path
          d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </svg>
  );
}
