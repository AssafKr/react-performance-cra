import React, { useState } from "react";
import { SlowRendering } from "./Inner";

export const Draggable = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        width: "500px",
        height: "500px",
        top: `${position.top}px`,
        left: `${position.left}px`,
        borderRadius: "25px",
        cursor: "grab",
        background: "white",
        overflowY: "auto",
      }}
      onMouseMove={(e) => {
        if (isDragging)
          setPosition({ top: e.clientY - 250, left: e.clientX - 250 });
      }}
      onMouseDown={() => {
        setIsDragging(true);
      }}
      onMouseUp={() => setIsDragging(false)}
    >
      <SlowRendering text={"Drag me 🐉"} />
    </div>
  );
});
