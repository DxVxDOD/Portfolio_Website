import { useEffect } from "react";

export default function Cursor() {
  const cursorAnimation = (
    cursor: HTMLElement,
    e: MouseEvent,
    interacting: boolean,
  ) => {
    const x = e.clientX - 25.5;
    const y = e.clientY - 25.5;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`,
    };
    cursor.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });
  };

  const getCursorType = (type: string | null) => {
    switch (type) {
      case "button":
        return "";
      default:
        return "";
    }
  };

  useEffect(() => {
    const cursor = document.getElementById("cursor-lag")!;
    window.onmousemove = (e) => {
      const target = e.target as HTMLElement;
      const interactable = target.closest(".interactable")! as HTMLElement;

      const interacting = interactable !== null;

      cursorAnimation(cursor, e, interacting);

      if (interacting)
        return (cursor.style.fill = getCursorType(
          interactable.getAttribute("datatype"),
        ));

      if (!interacting) return (cursor.style.fill = "");
    };
  }, []);

  return (
    <svg
      id={"cursor-lag"}
      className={"cursor fixed z-40 left-0 top-0 pointer-events-none"}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 1000 1000"
      fill="#dadddd"
    >
      <circle cx="420" cy="420" r="412.5" />
      <svg
        className={''}
        xmlns="http://www.w3.org/2000/svg"
        fill="green"
        width="1000px"
        height="1000px"
        viewBox="0 0 100 100"
      >
        <path d="M4,17H20a1,1,0,0,0,.832-1.555l-8-12a1.039,1.039,0,0,0-1.664,0l-8,12A1,1,0,0,0,4,17ZM12,5.8,18.131,15H5.869ZM3,20a1,1,0,0,1,1-1H20a1,1,0,0,1,0,2H4A1,1,0,0,1,3,20Z" />
      </svg>
    </svg>
  );
}
