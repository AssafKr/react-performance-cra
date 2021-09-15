import {
  Slide,
  Heading,
  CodePane,
  Text,
  Stepper,
  Appear,
  Notes,
} from "spectacle";
import { ReactIsAwesome } from "../components/ReactIsAwesome";

export const WhyUseReactSlide = () => {
  return (
    <Slide>
      <Heading>why use React?</Heading>
      <Stepper values={[1, 2, 3, 4, 5, 6, 7]}>
        {(_, step, isActive) => {
          if (!isActive) return null;

          if (step === 0 || step === 1) {
            return (
              <>
                <Text>
                  Write complex web applications in a declarative way 💪
                </Text>
                {step === 1 && (
                  <>
                    <Text>Example:</Text>
                    <Text color="#ffffff">
                      <ReactIsAwesome />
                    </Text>
                  </>
                )}
              </>
            );
          }

          if (step === 2 || step === 3)
            return (
              <>
                <CodePane language={"ts"}>
                  {`
                  export function ReactIsAwesome(parent: HTMLDivElement) {
                    let part = 0;
                    const wrapper = document.createElement("div");
                    wrapper.textContent = "React is awesome";
                    parent.appendChild(wrapper);
                    const button = document.createElement("button");
                    button.addEventListener("click", () => {
                      ++part;
                      wrapper.firstChild!.textContent =
                        part === 0 ? "React is awesome" : part === 1 ? "for creating"
                          : part === 2 ? "complex apps" : "in a declarative way";
                    });
                    wrapper.appendChild(button);
                  }
                `}
                </CodePane>
                {step === 3 && (
                  <img
                    src="/drake-bad.jpg"
                    alt="bad drake"
                    style={{
                      position: "absolute",
                      top: "240px",
                      right: "30px",
                    }}
                  />
                )}
                ;
              </>
            );
          if (step === 4 || step === 5)
            return (
              <>
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
                {step === 5 && (
                  <img
                    src="/drake-good.jpg"
                    alt="bad drake"
                    style={{
                      position: "absolute",
                      top: "240px",
                      right: "30px",
                    }}
                  />
                )}
              </>
            );
        }}
      </Stepper>
      <Notes>
        In this talk I'll mostly talk about web and the DOM, but the same
        priciples could be applied to any React rendering, like Native
        Imperative/Declerative
      </Notes>
    </Slide>
  );
};
