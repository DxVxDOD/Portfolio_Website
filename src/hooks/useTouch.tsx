import { useEffect, useState } from "react";

export function useTouch() {
  const [touch, setTouch] = useState(false);

  function listener() {
    const noHover = window.matchMedia("(hover: none)").matches;
    console.log("listen", noHover);
    if (noHover) {
      setTouch(true);
    }
    if (!noHover) {
      setTouch(false);
    }
  }

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      setTouch(true);
    }

    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [touch]);

  return touch;
}
