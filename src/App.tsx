import React from "react";
import {
  Deck,
  Slide,
  Heading,
  FlexBox,
  Box,
  FullScreen,
  Progress,
  Text,
  OrderedList,
  ListItem,
  Appear,
  UnorderedList,
} from "spectacle";
import { WhyUseReactSlide } from "./presentation/WhyUseReactSlide";

const theme = {
  colors: {
    primary: "#ffffff",
    secondary: "#ffffff",
    background: "#9e719a",
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

function App() {
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
        <Heading>React Is Killing Your Performance And It's Your Fault 🚀</Heading>
      </Slide>
      <Slide>
        <Heading>About me</Heading>
        <Appear>
          <OrderedList>
            <ListItem>Software Developer for the last 10 years</ListItem>
            <ListItem>Worked at Checkpoint, Microsoft and Soluto</ListItem>
          </OrderedList>
        </Appear>
      </Slide>
      <WhyUseReactSlide />
      <Slide>
        <Heading>But... it comes with a price 💴</Heading>
        <UnorderedList>
          <ListItem>
            To enjoy the declarative API, 
          </ListItem>
        </UnorderedList>
      </Slide>
    </Deck>
  );
}

export default App;
