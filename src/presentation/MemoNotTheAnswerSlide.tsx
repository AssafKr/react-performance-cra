import { Slide, Heading, Text, Stepper, CodePane, Notes } from "spectacle";
import { MemoWithChildren } from "../components/MemoWithChildren";

export const MemoNoTheAnswerSlide = () => {
  return (
    <Slide>
      <Heading>memo is not always the answer</Heading>
      <Stepper
        values={[0, 1, 2]}
        render={(value, step, isActive) => {
          if (!isActive) return null;
          if (step === 0)
            return (
              <Text>
                If the props are always different, it can actually damage
                performance
              </Text>
            );
          if (step === 1)
            return (
              <CodePane language={"tsx"}>
                {`              
              const AcceptsChildren: React.FC = React.memo(({ children }) => (
                  <div> My children: {children} </div> )
              
              export const MemoWithChildren: React.FC = () => {
                const [count, setCount] = useState(0);
                return (
                  <div>
                    <AcceptsChildren><div>child</div></AcceptsChildren>
                    <button onClick={() => {setCount(count + 1); }}>
                      render
                    </button>
                    {\`renders: \${count}\`}
                  </div> ); };
              `}
              </CodePane>
            );
          if (step === 2)
            return (
              <Text>
                <MemoWithChildren />
              </Text>
            );
        }}
      />
      <Notes>
        Show the dev tools and show that the component rendered because of
        children
      </Notes>
    </Slide>
  );
};
