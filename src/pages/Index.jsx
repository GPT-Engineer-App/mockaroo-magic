import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <Box p={8}>
        <Heading mb={4}>Your Todos</Heading>
        <Text>Todo list will be shown here.</Text>
      </Box>
    </>
  );
};

export default Index;
