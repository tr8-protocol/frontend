import React from 'react';
import { Box, Center, Heading, Text, Flex, Input, Link, Button, ChakraProvider } from '@chakra-ui/react';

const SignupPage = () => {
  return (
    <ChakraProvider>
    <Center margin="100px">
    <Box p={4} bg="gray.100" borderRadius="md" maxW="500">
      <Center>
        <Heading size="md">Let’s get started</Heading>
      </Center>
      <Text mt={4} textAlign="center">
      Create an account to start digitizing your identity.
      </Text>
      <Flex mt={6}>
        <Box mr={2}>
        <Text mt={4}>First Name</Text>
          <Input placeholder="First Name" />
        </Box>
        <Box ml={2}>
        <Text mt={4}>Last Name</Text>
          <Input placeholder="Last Name" />
        </Box>
      </Flex>
      <Text mt={4}>Email</Text>
      <Input placeholder="Email" />
      <Text mt={4}>Password</Text>
      <Input type="password" placeholder="Password" />
      <Flex mt={4} justifyContent="space-between">
        <Link>Remember me</Link>
        <Link>Forgot password?</Link>
      </Flex>
      <Button mt={6} colorScheme="blue" size="lg" isFullWidth>
        Sign Up Now
      </Button>
    </Box>
    </Center>
    </ChakraProvider>
  );
};

export default SignupPage;
