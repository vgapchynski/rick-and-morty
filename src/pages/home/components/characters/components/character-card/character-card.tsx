import * as CH from "@chakra-ui/react";
import * as D from "duck";
import React from "react";
import { Link } from "react-router-dom";

const CharacterCard: React.FC<{ data: D.Character }> = ({ data }) => {
  return (
    <CH.Card
      boxShadow="lg"
      background={`url(${data.image}) no-repeat center`}
      backgroundSize="cover"
      minHeight="320px"
      overflow="hidden"
    >
      <CH.LinkBox
        as={CH.CardBody}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={2}
        bg="rgba(0,0,0,.6)"
        transition="0.2s opacity"
        _hover={{
          opacity: 0,
        }}
        color="white"
        textAlign="center"
      >
        <CH.Heading as="h3" size="lg">
          <CH.LinkOverlay as={Link} to={`/characters/${data.id}`}>
            {data.name}
          </CH.LinkOverlay>
        </CH.Heading>
        <CH.Text>{data.gender}</CH.Text>
        <CH.Flex alignItems="center" gap={1}>
          Status:
          <CH.Tag colorScheme={D.COLORSCHEME_BY_CHARACTER_STATUS[data.status]}>
            {data.status}
          </CH.Tag>
        </CH.Flex>
        <CH.Text>Location: {data.location.name}</CH.Text>
      </CH.LinkBox>
    </CH.Card>
  );
};

export default CharacterCard;
