import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      const { clientX, clientY } = e;
      setIsHidden(false);

      if (cursorDotRef.current && cursorOutlineRef.current) {
        // Instant movement for dot
        cursorDotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;

        // Smooth transition for trailing outline (using requestAnimationFrame or web animations API is best, but quick inline transform works too)
        cursorOutlineRef.current.animate(
          {
            transform: `translate3d(${clientX - 16}px, ${clientY - 16}px, 0) scale(${isHovered ? 1.5 : 1})`,
          },
          { duration: 250, fill: "forwards" }
        );
      }
    };

    const mouseDownHandler = () => setIsClicking(true);
    const mouseUpHandler = () => setIsClicking(false);

    const mouseEnterHandler = () => setIsHidden(false);
    const mouseLeaveHandler = () => setIsHidden(true);

    // Event delegation to watch cursor-hover properties
    const mouseOverHandler = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute("data-cursor-text");
        if (text) setCursorText(text);
      } else {
        const standardLink = e.target.closest("a, button, input, textarea, select");
        if (standardLink) {
          setIsHovered(true);
          setCursorText("");
        } else {
          setIsHovered(false);
          setCursorText("");
        }
      }
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mouseup", mouseUpHandler);
    document.addEventListener("mouseleave", mouseLeaveHandler);
    document.addEventListener("mouseenter", mouseEnterHandler);
    window.addEventListener("mouseover", mouseOverHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mousedown", mouseDownHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("mouseleave", mouseLeaveHandler);
      document.removeEventListener("mouseenter", mouseEnterHandler);
      window.removeEventListener("mouseover", mouseOverHandler);
    };
  }, [isHovered]);

  return (
    <>
      {/* Central small dot */}
      <div
        ref={cursorDotRef}
        className={`custom-cursor fixed top-0 left-0 w-2 h-2 rounded-full bg-accent z-[9999] pointer-events-none transition-opacity duration-300 ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${isClicking ? "scale-75" : "scale-100"}`}
        style={{ transform: "translate3d(-100px, -100px, 0)", willChange: "transform" }}
      />
      {/* Outer trailing circle */}
      <div
        ref={cursorOutlineRef}
        className={`custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full border border-neutral-800 z-[9998] pointer-events-none transition-all duration-300 flex items-center justify-center overflow-hidden ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${isHovered ? "bg-primary border-primary" : "bg-transparent"} ${
          isClicking ? "scale-90" : "scale-100"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0)", willChange: "transform" }}
      >
        {cursorText && (
          <span className="text-[8px] tracking-widest font-semibold uppercase text-white scale-90 whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
