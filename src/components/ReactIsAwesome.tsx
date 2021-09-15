import React, { useState } from "react";

export const ReactIsAwesome: React.FC = () => {
  const [part, setPart] = useState(0);

  const title =
    part === 0
      ? "React is awesome"
      : part === 1
      ? "for creating"
      : part === 2
      ? "complex apps"
      : "in a declarative way";

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {title}
      <button
        style={{ width: "fit-content", marginTop: "20px", fontSize: "28px" }}
        onClick={() => setPart((part) => part + 1)}
      >
        click me!
      </button>
    </div>
  );
};
