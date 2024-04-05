import React from 'react';
import { Box, Flex, Spacer, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex bg="gray.200" p={4} alignItems="center">
      <Box>
        <Link as={RouterLink} to="/" fontWeight="bold">Todo App</Link>
      </Box>
      <Spacer />
      <Box>
        <Link as={RouterLink} to="/about" ml={4}>About</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;