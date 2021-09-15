import { useCallback, useEffect, useState } from "react";

function useForceRender() {
  const [_, setValue] = useState(0);

  return useCallback(() => {
    setValue((value) => value + 1);
  }, []);
}

export const SlowComponent = () => {
  const [show, setShow] = useState(false);

  const forceRender = useForceRender();

  useEffect(() => {
    const runEveryFrame = () => {
      forceRender();
      id = requestAnimationFrame(runEveryFrame);
    };

    let id = requestAnimationFrame(runEveryFrame);
    return () => {
      cancelAnimationFrame(id);
    };
  }, [forceRender]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        style={{ width: "fit-content" }}
        onClick={() => setShow((show) => !show)}
      >
        start!
      </button>
      {show && (
        <svg width="500px" height="500px">
          {Array(2000)
            .fill(0)
            .map((_, i) => {
              return (
                <circle
                  key={i}
                  cx={Math.floor(Math.random() * 500)}
                  cy={Math.floor(Math.random() * 500)}
                  r={3}
                  fill={`hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`}
                />
              );
            })}
        </svg>
      )}
    </div>
  );
};
