import { useEffect } from "react";

export default function Cursor() {

  // const cursorAnimation = (
  //   cursor: HTMLElement,
  //   e: MouseEvent,
  //   interacting: boolean,
  // ) => {
  //   const x = e.clientX - 25.5;
  //   const y = e.clientY - 25.5;
  //
  //   const keyframes = {
  //     transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`,
  //   };
  //   cursor.animate(keyframes, {
  //     duration: 800,
  //     fill: "forwards",
  //   });
  // };
  //
  // const getCursorType = (type: string | null) => {
  //   switch (type) {
  //     case 'button':
  //       return 'red'
  //     default:
  //       return 'blue'
  //   }
  // }
  //
  // useEffect(() => {
  //   const cursor = document.getElementById("cursor")!;
  //   window.onmousemove = (e) => {
  //     const target = e.target as HTMLElement;
  //     const interactable = target.closest(".interactable")! as HTMLElement;
  //
  //
  //     const interacting = interactable !== null;
  //
  //     cursorAnimation(cursor, e, interacting);
  //
  //     if(interacting) return cursor.style.fill = getCursorType(interactable.getAttribute('datatype'))
  //
  //     if(!interacting) return cursor.style.fill = ''
  //
  //   };
  // }, []);

useEffect(() => {
  (function () {

    const link = document.querySelectorAll('nav > .hover-this');
    const cursor: HTMLElement = document.querySelector('.cursor')!;

    const animateit = function (e) {
      const span = document.querySelector('span')!;
      const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,

        move = 25,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;

      span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = e => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

  })();
},[])


  return (
    <svg
      // id={"cursor"}
      className={"cursor fixed z-40 left-0 top-0 pointer-events-none"}
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 1000 1000"
      fill="none"
    >
      <circle cx="420" cy="420" r="412.5" stroke="#A1A1AA" strokeWidth={"10"} />
      <circle cx="420" cy="420" r="131.5" stroke="#A1A1AA" strokeWidth={"10"} />
      <circle cx="420.5" cy="420.5" r="22.5" fill="#A1A1AA" />
    </svg>
  );
}
