import React from "react";
import { useState } from "react";

const AcceptsChildren: React.FC = React.memo(({ children }) => {
  return (
    <div style={{ textAlign: "center", margin: "40px" }}>
      My children:
      {children}
    </div>
  );
});

export const MemoWithChildren: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        border: "solid white 6px",
        borderRadius: "23px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AcceptsChildren>
        <div>child</div>
      </AcceptsChildren>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        render
      </button>
      {`renders: ${count}`}
    </div>
  );
};
