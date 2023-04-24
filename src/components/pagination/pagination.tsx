import * as CH from "@chakra-ui/react";
import * as D from "duck";
import React from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

const Pagination: React.FC<{ meta: D.PageMeta }> = ({ meta }) => {
  const [inputValue, setInputValue] = React.useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const goNext = () => {
    if (page < meta.pages) {
      setSearchParams((prev) => ({
        ...prev,
        page: page + 1,
      }));
    }
  };

  const goBack = () => {
    if (page > 0) {
      setSearchParams((prev) => ({
        ...prev,
        page: page - 1,
      }));
    }
  };

  const goTo = (newPage: number) => {
    if (newPage > 0 && newPage <= meta.pages) {
      setSearchParams((prev) => ({
        ...prev,
        page: newPage,
      }));
    }
  };

  return (
    <CH.HStack spacing={2}>
      <CH.IconButton
        aria-label="go previous page"
        icon={<CH.Icon as={IoChevronBackOutline} />}
        onClick={goBack}
      />
      {page > 1 && <CH.Button onClick={() => goTo(1)}>1</CH.Button>}
      <CH.Button as="div" pointerEvents="none" colorScheme="blue">
        {page}
      </CH.Button>
      {page !== meta.pages && (
        <>
          <CH.Text userSelect="none">of</CH.Text>
          <CH.Button onClick={() => goTo(meta.pages)}>{meta.pages}</CH.Button>
        </>
      )}
      <CH.IconButton
        aria-label="go next page"
        icon={<CH.Icon as={IoChevronForwardOutline} />}
        onClick={goNext}
      />

      <CH.Flex
        as="form"
        alignItems="center"
        gap={2}
        onSubmit={(e) => {
          e.preventDefault();
          if (inputValue) {
            goTo(Number(inputValue));
          }
        }}
      >
        <CH.Text flexShrink={0}>Go To:</CH.Text>
        <CH.Input
          maxWidth="60px"
          value={inputValue}
          type="number"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </CH.Flex>
    </CH.HStack>
  );
};

export default Pagination;
