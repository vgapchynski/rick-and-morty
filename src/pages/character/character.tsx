import * as CH from "@chakra-ui/react";
import * as D from "duck";
import React from "react";
import { useQuery } from "react-query";
import { Link, Navigate, useParams } from "react-router-dom";

import * as LC from "./components";

const Character: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery<D.Character>(`character/${id}`);

  if (isLoading) {
    return <LC.Skeleton />;
  }

  if (!isLoading && !data) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <CH.Breadcrumb>
        <CH.BreadcrumbItem>
          <CH.BreadcrumbLink as={Link} to="/">
            Home
          </CH.BreadcrumbLink>
        </CH.BreadcrumbItem>
        <CH.BreadcrumbItem isCurrentPage>
          <CH.BreadcrumbLink>{data.name}</CH.BreadcrumbLink>
        </CH.BreadcrumbItem>
      </CH.Breadcrumb>
      <CH.Flex
        gap={8}
        mt={8}
        flexDirection={{
          base: "column",
          md: "row",
        }}
      >
        <CH.Image src={data.image} borderRadius="lg" boxShadow="lg" />
        <CH.VStack alignItems="flex-start">
          <CH.Flex alignItems="center" gap={4}>
            <CH.Heading>{data.name}</CH.Heading>
            <CH.Tag
              colorScheme={D.COLORSCHEME_BY_CHARACTER_STATUS[data.status]}
            >
              {data.status}
            </CH.Tag>
          </CH.Flex>

          <CH.Text>Gender: {data.gender}</CH.Text>
          <CH.Text>Species: {data.species}</CH.Text>
          <CH.Text>Location: {data.location.name}</CH.Text>
          <CH.Text>Origin: {data.origin.name}</CH.Text>
        </CH.VStack>
      </CH.Flex>
    </>
  );
};

export default Character;
