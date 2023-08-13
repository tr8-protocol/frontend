import React from 'react';
import { Box, Center, Heading, Text, Input, Button, Link as ChakraLink, ChakraProvider } from '@chakra-ui/react';

const LoginPage = () => {
  return (
    <ChakraProvider>
    <Center>
    <Box p={4} bg="gray.100" borderRadius="md" maxW="500px" margin="100px">
      <Center>
        <Heading size="xl">Sign In</Heading>
      </Center>
      <Text mt={4}>Email Address</Text>
      <Input placeholder="Email Address" />
      <Text mt={4}>Password</Text>
      <Input type="password" placeholder="Your Password" />
      <Button mt={6} colorScheme="blue" size="lg" isFullWidth>
        Sign In
      </Button>
      <Text mt={4} textAlign="center">
        Don't have an account? <ChakraLink color="blue.500" href="#">Sign up here</ChakraLink>
      </Text>
    </Box>
    </Center>
    </ChakraProvider>
  );
};

export default LoginPage;
