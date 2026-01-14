import { useEffect, useState } from "react";
import "./mouseEffect.scss";

export default function MouseEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
      }}
    />
  );
}
