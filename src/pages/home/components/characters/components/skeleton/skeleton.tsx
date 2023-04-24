import * as CH from "@chakra-ui/react";
import React from "react";

const Skeleton: React.FC = () => {
  return (
    <CH.Grid gridTemplateColumns="repeat(2, 1fr)" width="100%" gap={4}>
      {[...Array(10).keys()].map((key) => (
        <CH.GridItem key={key}>
          <CH.Skeleton minHeight="320px" boxShadow="lg" />
        </CH.GridItem>
      ))}
    </CH.Grid>
  );
};

export default Skeleton;
