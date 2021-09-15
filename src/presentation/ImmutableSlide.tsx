import { Appear, CodePane, Heading, Notes, Slide, Stepper, Text } from "spectacle";

export const ImmutableSlide = () => {
  return (
    <Slide>
      <Heading>Do not mutate props values</Heading>
      <Stepper values={[0, 1, 2]}>
        {(value, step, isActive) => {
          if (!isActive) return null;
          if (step === 0)
            return (
              <Text>
                The comparison made by React.memo is shallow. So changing
                objects' inner data wouldn't help.{" "}
              </Text>
            );
          if (step === 1)
            return (
              <CodePane language="tsx">
                {`
        const Inner: React.FC<Props> = React.memo(({ size }) => (
            <div style={{ width: size.width, height: size.height }}>My Component</div> )
        
        const MyComponent = () => {
          const [props, setProps] = useState({ size: { width: 100, height: 100 } });
          return (
            <>
              <Inner size={props.size} />
              <button onClick={() => {
                  const size = props.size;
                  size.height += 100;
                  setProps({ size }); }}>
                increase
              </button>
            </>
          ); };                            
      `}
              </CodePane>
            );
          if (step === 2)
            return (
              <CodePane language="tsx">
                {`
      const Inner: React.FC<Props> = React.memo(({ size }) => (
          <div style={{ width: size.width, height: size.height }}>My Component</div> )
      
      const MyComponent = () => {
        const [props, setProps] = useState({ size: { width: 100, height: 100 } });
        return (
          <>
            <Inner size={props.size} />
            <button onClick={() => {
                setProps({ size: {...size, height: props.size.height + 100} }); }}>
              increase
            </button>
          </>
        ); };                            
  `}
              </CodePane>
            );
        }}
      </Stepper>
      <Notes>
        If you are using React.memo, then pay attention to the props values
        if they are objects, do not mutate them or the comparison will fail
      </Notes>
    </Slide>
  );
};
