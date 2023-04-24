import * as CH from "@chakra-ui/react";
import React from "react";

import * as LC from "./components";

const Home: React.FC = () => {
  return (
    <CH.VStack spacing={4}>
      <CH.Heading as="h1">Characters Rick & Morty</CH.Heading>
      <LC.Characters />
    </CH.VStack>
  );
};

export default Home;
