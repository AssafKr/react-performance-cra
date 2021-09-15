import {
  Deck,
  Slide,
  Heading,
  Appear,
  OrderedList,
  ListItem,
  Box,
  FlexBox,
  FullScreen,
  Progress,
  Text,
  Notes,
} from "spectacle";
import { Draggable } from "../components/Draggable";
import { AvoidPassingState } from "./AvoidPassingStateSlide";
import { DevModeSlide } from "./DevModeSlide";
import { ImmutableSlide } from "./ImmutableSlide";
import { MemoNoTheAnswerSlide } from "./MemoNotTheAnswerSlide";
import { MemoSlide } from "./MemoSlide";
import { ReconciliationSlide } from "./ReconciliationSlide";
import { WhyUseReactSlide } from "./WhyUseReactSlide";

const theme = {
  colors: {
    primary: "#97e0c2",
    secondary: "#ffffff",
  },
  fonts: {
    header: "'Montserrat', sans-serif",
    text: "'Quicksand', sans-serif",
  },
};

const template: React.FC = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen color={"white"} size={30} />
    </Box>
    <Box padding="1em">
      <Progress color={"white"} size={10} />
    </Box>
  </FlexBox>
);

export const PerformanceDeck = () => {
  return (
    <Deck
      theme={theme}
      template={template}
      transition={{
        from: {
          opacity: 0,
        },
        enter: {
          opacity: 1,
        },
        leave: {
          opacity: 0,
        },
      }}
    >
      <Slide>
        <Heading>
          React Is Killing Your Performance And It's Your Fault 🚀
        </Heading>
        <Notes>
          by "it's your fault" - React is very fast and performant. It's used
          everywhere in very complex applications. If you encounter performance
          issues it's helpful to understand what React does and the design
          principles, so you don't shoot you own foot.
        </Notes>
      </Slide>
      <Slide>
        <Heading>About me 👋</Heading>
        <Appear>
          <OrderedList>
            <ListItem>Software Developer for the last 10 years</ListItem>
            <ListItem>Worked at Checkpoint, Microsoft and Soluto</ListItem>
            <ListItem>Co-founder of Livecycle.io</ListItem>
          </OrderedList>
        </Appear>
        <Notes>
          Livecycle automatically creates live environment for every change in
          the source code. It allows for collaboration and feedback in the PR
          for stakeholder who are not developers, like PMs and designers. You
          can register to get access to our beta. Check us out at livecycle.io
        </Notes>
      </Slide>
      <WhyUseReactSlide />
      <Slide>
        <Heading>But... it comes with a price 💴</Heading>
        <Appear>
          <Text>To enjoy all those good stuff, React has to do some work</Text>
        </Appear>
        <Appear>
          <Text>
            At runtime, React makes sure that what we told it to do, is actually
            happening
          </Text>
        </Appear>
        <Appear>
          <Text>
            It compares between the what we described, and what is actually in
            the DOM
          </Text>
        </Appear>
        <Notes>
          Components have a render function (or are render functions themselves
          in case of Function Components) They produce elements Which make up
          the "Virtual DOM" (again, this term is not quite accurate since we can
          render other stuff than the DOM)
        </Notes>
      </Slide>
      <ReconciliationSlide />
      <Slide>
        <Heading>Optimizations</Heading>
        <Appear>
          <Text>Generally, only optimize if you need to</Text>
        </Appear>
        <Appear>
          <Text>
            Usually, the really expensive stuff are the DOM changes, not React
          </Text>
        </Appear>
        <Appear>
          <Text>Use the DevTools to investigate</Text>
        </Appear>
        <Notes>
          We are not going to talk about DOM optimizations, painting, layouting
          etc. We are focusing on the reconciliation optimizations, but usually
          the DOM ones are the most expensive
        </Notes>
      </Slide>
      <DevModeSlide />
      <MemoSlide />
      <ImmutableSlide />
      <MemoNoTheAnswerSlide />
      <Slide>
        <Heading>instead of memo, decouple from children</Heading>
        <Appear>
          <Text>
            finding which component needs to be memoized and wrap it with
            React.memo can be annoying
          </Text>
        </Appear>
        <Appear>
          <Text>instead:</Text>
        </Appear>
        <Appear>
          <Draggable />
        </Appear>
      </Slide>
      <AvoidPassingState />
      <Slide>
        <Heading>Summary</Heading>
        <OrderedList>
          <Appear>
            <ListItem>React has an overhead</ListItem>
            <ListItem>Optimize only when needed</ListItem>
            <ListItem>Production build, weaker devices, DevTools</ListItem>
            <ListItem>React.memo</ListItem>
            <ListItem>Decouple children from wrapper</ListItem>
            <ListItem>Keep state low in the tree</ListItem>
          </Appear>
        </OrderedList>
      </Slide>
      <Slide>
        <Heading>Thank you 🙏</Heading>
        <Appear>
          <Text>Questions ❓</Text>
        </Appear>
      </Slide>
    </Deck>
  );
};
