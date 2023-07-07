import React, { useEffect, useRef } from 'react'

const Layout = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if(canvasRef.current) {
      const canvas = canvasRef.current;
      const pen = canvas.getContext('2d');

      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      const start = {
        x: canvas.width * 0.1,
        y: canvas.height * 0.9
      }

      const end = {
        x: canvas.width * 0.9,
        y: canvas.height * 0.9
      }

      if(pen){
        pen.strokeStyle = 'white';
        pen.lineWidth = 2

        pen.beginPath();
        pen.moveTo(start.x, start.y);
        pen.lineTo(end.x, end.y);
        pen.stroke();
      }
    }
  }, [canvasRef])

  return (
    <canvas
    ref={canvasRef}
    className='flex shadow-layoutBoxShadow w-full h-full border-[1.25px] border-zinc-950 lg:border-[1.35px] dark:border-zinc-200'
    >
    </canvas>
  )
}

export default Layout