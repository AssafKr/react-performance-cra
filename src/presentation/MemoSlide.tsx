import { Slide, Heading, Appear, Text, Notes } from "spectacle";
import { Draggable } from "../components/Draggable";

export const MemoSlide: React.FC = () => {
  return (
    <Slide>
      <Heading>React.memo</Heading>
      <Appear>
        <Text>
          If your component is pure, you can avoid rendering it by using
          React.memo
        </Text>
      </Appear>
      <Appear>
        <Text>
          A pure component is one that given the same props and state, always
          return the same element
        </Text>
      </Appear>
      <Appear>
        <Draggable />
        <Appear>
          <Text>How can we improve?</Text>
        </Appear>
      </Appear>
      <Notes>
        Show the dev mode and show it the child is being rendered because of parent
        Change the code to use React.memo
        Show the dev tools again
      </Notes>
    </Slide>
  );
};
