import * as CH from "@chakra-ui/react";
import React from "react";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  const { colorMode, toggleColorMode } = CH.useColorMode();

  return (
    <CH.Flex flexDirection="column" gap={8}>
      <CH.Flex
        height={16}
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        position="sticky"
        bg="gray.800"
        zIndex={10}
        top={0}
        px={4}
        gap={4}
      >
        <CH.Link
          as={NavLink}
          to="/"
          color="white"
          _activeLink={{
            textDecoration: "underline",
          }}
        >
          Home
        </CH.Link>
        <CH.IconButton
          aria-label="toogle color mode"
          icon={
            <CH.Icon as={colorMode === "dark" ? MdModeNight : MdLightMode} />
          }
          onClick={toggleColorMode}
        />
      </CH.Flex>
      <CH.Container maxWidth="container.lg" px={4} pb={8}>
        <Outlet />
      </CH.Container>
    </CH.Flex>
  );
};

export default Layout;
