import React from "react";
import {
  Slide,
  Heading,
  UnorderedList,
  Appear,
  CodePane,
  Text,
  Stepper,
} from "spectacle";
import { ReactIsAwesome } from "../components/ReactIsAwesome";

export const WhyUseReactSlide = () => {
  return (
    <Slide>
      <Heading>why use React?</Heading>
      <Stepper values={[0, 1, 2]}>
        {(value, step, isActive) => {
          if (!isActive) return null;
          console.log("inside stepper", step, isActive);
          if (step === 0)
            return (
              <Text>
                Write complex web applications in a declarative way 💪
              </Text>
            );

          if (step === 1)
            return (
              <CodePane language={"tsx"}>
                {`
          export const ReactIsAwesome: React.FC = () => {
            const [part, setPart] = useState(0);

            const title =
              part === 0 ? "React is awesome" : part === 1 ? "for creating" 
                : part === 2 ? "complex apps" : "in a declarative way";

            return (
              <div>
                {title}
                <button style={{ width: "fit-content" }} onClick={() => setPart(part + 1)}>
                  click me!
                </button>
              </div>
            );
          };
        `}
              </CodePane>
            );
          if (step === 2)
            return (
              <Text>
                <ReactIsAwesome />
              </Text>
            );
        }}
      </Stepper>
    </Slide>
  );
};
