import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    let scale = 1; // control scale

    // Track mouse
    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", moveCursor);
    const SPEED = 0.50;


    function animate() {
      currentX += (mouseX - currentX) * SPEED;
      currentY += (mouseY - currentY) * SPEED;

    cursor.style.transform = `
    translate(${currentX}px, ${currentY}px)
    translate(-50%, -50%)
    scale(${scale})
`;
      requestAnimationFrame(animate);
    }

    animate();

    //  Click effect
    const handleDown = () => (scale = 0.7);
    const handleUp = () => (scale = 1);

    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-9999"
    >
      <div className="w-20 h-20 rounded-full bg-linear-to-r from-pink-500 to-blue-500 blur-2xl opacity-60" />
    </div>
  );
}