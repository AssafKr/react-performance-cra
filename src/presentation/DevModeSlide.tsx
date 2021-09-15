import { Slide, Heading, Stepper, Notes } from "spectacle";
import { SlowComponent } from "../components/SlowComponent";

export const DevModeSlide = () => {
  return (
    <Slide>
      <Heading>Are you running in dev mode?!</Heading>
      <Stepper values={[0, 1]}>
        {(value, step, isActive) => {
          return isActive && step === 0 && <SlowComponent />;
        }}
      </Stepper>
    </Slide>
  );
};
