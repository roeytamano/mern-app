import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base: "column",
        sm: "row",
      }}>
      <Text
        fontSize={"2xl"}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}
      >
        <Link to={"/"}>Product Store 🛒</Link>
      </Text>  

      <HStack spacing={2} alignItems={"center"}>
        <Link to={"/create"}>
          <Button >
            <PlusSquareIcon fontSize={20}/>
          </Button>
        </Link>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <IoMoon fontSize={20} />
          ) : (
            <LuSun fontSize={20} />
          )}
        </Button>
      </HStack>

      </Flex>
    </Container>
  )
}

export default Navbar