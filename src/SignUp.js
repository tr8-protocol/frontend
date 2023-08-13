import React from 'react';
import { Box, Center, Heading, Text, Flex, Input, Link, Button, ChakraProvider, Image } from '@chakra-ui/react';
import logo from './Logo (1).png'

const SignupPage = () => {
  return (
    <ChakraProvider>
      <Box p={4} bg="white" borderRadius="md">
        <Image src={logo} alt="Logo" w={8} h={8} />
      </Box>
    <Center margin="100px">
    <Box p={4} bg="white" borderRadius="md" maxW="500">
      <Center>
        <Heading size="xl">Let’s get started</Heading>
      </Center>
      <Text mt={4} textAlign="center">
      Create an account to start digitizing your identity.
      </Text>
      <Flex mt={6}>
        <Box mr={2}>
        <Text mt={4} textAlign="left">First Name</Text>
          <Input placeholder="First Name" />
        </Box>
        <Box ml={2}>
        <Text mt={4} textAlign="left">Last Name</Text>
          <Input placeholder="Last Name" />
        </Box>
      </Flex>
      <Text mt={4} textAlign="left">Email</Text>
      <Input placeholder="Email" />
      <Text mt={4} textAlign="left">Password</Text>
      <Input type="password" placeholder="Password" />
      <Flex mt={4} justifyContent="space-between">
        <Link>Remember me</Link>
        <Link>Forgot password?</Link>
      </Flex>
      <Button mt={6} colorScheme="blue" size="lg" width="400px">
        Sign Up Now
      </Button>
    </Box>
    </Center>

    <Box mt={12} textAlign="center">
          <Text>Contact Us</Text>
        </Box>
    </ChakraProvider>
  );
};

export default SignupPage;
