import React, { useEffect, useRef } from 'react'

const Layout = () => {

  const startTime = new Date().getTime();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const arcs = [
    '##FDFDFD',
    '#F0F0F0',
    '#E2E1E1',
    '#D3D2D2',
    '#C4C3C3',
    '#B6B4B4',
    '#A7A4A4',
    '#989595',
    '#898686',
    '#706D6D',
    '#565353',
    '#413E3E',
    '#2B2A2A',
    '#201F1F'
  ]

  const draw = () => {

    const currentTime = new Date().getTime();
    const elapsedTime = ( currentTime - startTime) / 1000

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

      const center = {
        x: canvas.width * 0.5,
        y: canvas.height * 0.9
      }

      const length = end.x - start.x;
      const initialArcRadius = length * 0.05;
      const spacing = (length / 2 - initialArcRadius) / arcs.length;
      
      if(pen){
        pen.strokeStyle = 'white';
        pen.lineWidth = 1
        
        // bottom line
        pen.beginPath();
        pen.moveTo(start.x, start.y);
        pen.lineTo(end.x, end.y);
        pen.stroke();

        arcs.forEach((arc, index) => {
          const arcRadius = initialArcRadius + (index * spacing);
          const oneCompleteLoop = 2 * Math.PI;
          const numberOfLoops = 50 - index;
          const velocity = (oneCompleteLoop * numberOfLoops) / 900
          const maxAngle = 2 * Math.PI;
          const distance = Math.PI + (elapsedTime * velocity);
          const modDistance = distance % maxAngle;
          const adjsutedDistance = modDistance >= Math.PI ? modDistance : maxAngle - modDistance;
          const x = center.x + arcRadius * Math.cos(adjsutedDistance);
          const y = center.y + arcRadius * Math.sin(adjsutedDistance);
            // Drawing arcs
            pen.beginPath();
            pen.strokeStyle = arc
            pen.arc(center.x, center.y, arcRadius, Math.PI, Math.PI * 2)
            pen.stroke();

            // Balls
            pen.fillStyle = '#B6B4B4'
            pen.beginPath();
            pen.arc(x, y, length * 0.0025, 0, Math.PI * 2)
            pen.fill();
  
        });

        requestAnimationFrame(draw)
      }
    }
  }

  useEffect(() => {

    draw();

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