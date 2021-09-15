import { Slide, Heading, Stepper, Text, Appear, Notes } from "spectacle";
import { PassingState } from "../components/PassingState";

export const AvoidPassingState = () => {
  return (
    <Slide>
      <Heading>Avoid passing state around</Heading>
      <Appear>
        <Text>
          <PassingState />
        </Text>
      </Appear>
      <Notes>
        Show the code for PassingState and separate it into another component
      </Notes>
    </Slide>
  );
};
