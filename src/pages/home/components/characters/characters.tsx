import * as CH from "@chakra-ui/react";
import * as C from "components";
import * as D from "duck";
import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

import * as LC from "./components";

const Characters: React.FC = () => {
  const [params] = useSearchParams();
  const page = params.get("page") || "1";

  const { data, isLoading } = useQuery<D.UseCharactersQuery>(
    `character?page=${page}`
  );

  if (isLoading) {
    return <LC.Skeleton />;
  }

  if (!isLoading && !data?.results?.length) {
    return <>no data</>;
  }

  return (
    <>
      <CH.Grid
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        width="100%"
        gap={4}
      >
        {data.results.map((character) => (
          <CH.GridItem key={character.id}>
            <LC.CharacterCard data={character} />
          </CH.GridItem>
        ))}
      </CH.Grid>
      <C.Pagination meta={data.info} />
    </>
  );
};

export default Characters;
