import React from "react";
import { Text } from "spectacle";

export const SlowRendering: React.FC<{ text: string }> = ({ text }) => {
  let start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > 200) {
      break;
    }
  }

  return (
    <div style={{ userSelect: "none", padding: "30px" }}>
      <Text>{text}</Text>
    </div>
  );
};
