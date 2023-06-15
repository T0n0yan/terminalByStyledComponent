import React from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Console from "./components/Console";
import Flex from "./components/Flex";
import Title from "./components/title";



const AppWrrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background: black;
  padding: 2rem;
  color: white;
`;

const App = () => {
  return (
     <AppWrrapper>
       <Flex justifyContent="center" margin=" 0 auto">
         <Title fontSize="100px">Terminal by T0n0yan</Title>
       </Flex>
       <Flex direction="column" margin={"10px"}>
         <Console/>
         <Button align="flex-end">Send</Button>
       </Flex>
     </AppWrrapper>
  );
};

export default App;
