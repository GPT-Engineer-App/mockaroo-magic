import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <Box p={8}>
        <Heading mb={4}>About Todo App</Heading>
        <Text>
          This is a simple Todo application built with React and Chakra UI.
          It allows you to add, view, and delete todo items.
        </Text>
      </Box>
    </>
  );
};

export default About;