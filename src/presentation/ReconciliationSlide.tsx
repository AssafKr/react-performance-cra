import { Slide, Heading, Stepper, CodePane, Text } from "spectacle";

const imgStyle: React.CSSProperties = {
  position: "absolute",
  maxHeight: "72%",
  left: "13%",
};

export const ReconciliationSlide = () => {
  return (
    <Slide>
      <Heading>The Reconciliation Algorithm</Heading>
      <Stepper values={[1, 2, 3, 4, 5]}>
        {(_, step, isActive) => {
          if (step === 0) return <img src="1.png" alt="1" style={imgStyle} />;
          if (step === 1) return <img src="2.png" alt="2" style={imgStyle} />;
          if (step === 2) return <img src="3.png" alt="2" style={imgStyle} />;
          if (step === 3)
            return (
              <>
                <Text>apply the diff:</Text>
                <CodePane language={"typescript"}>
                  {`
              element1.parentElement.removeChild(element1);
              element2.textContent = G;
            `}
                </CodePane>
              </>
            );
          if (step === 4)
            return (
              <>
                <Text>
                  The algorithm is very optimized and fast but still has an
                  overhead. It's better to avoid it if we can
                </Text>
              </>
            );
        }}
      </Stepper>
    </Slide>
  );
};
