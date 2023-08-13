import React from 'react';
import {
  Box,
  Flex,
  VStack,
  Image,
  Text,
  Avatar,
  Button,
  ChakraProvider,
} from '@chakra-ui/react';
import image from './Replace Image.png'
import image1 from './Rectangle.png'

const ViewDetails = () => {
  return (
    <ChakraProvider>
      <Box
        bg="white"
        w="600px"
        p={4}
        boxShadow="md"
        borderRadius="md"
        display="flex"
        alignItems="center"
      >
        <Image src={image} alt="" w="40%" h="auto" />

        <VStack ml={4} align="start">
          <Text fontWeight="bold" fontSize="lg">
          Legendary Hero
          </Text>
          <Text>
          A virtual asset earned by achieving remarkable feats in a popular online game sanctioned by the Epic Gaming League. 
          </Text>
          <Flex align="center">
            <Avatar size="sm" src={image1} />
            <Text ml={2}>Epic Gaming League</Text>
          </Flex>
          <Text>Date Acquired</Text>
          <Text>11.14.2022</Text>
          <Text>Chain Compatibility</Text>
          <Text>Ethereum</Text>
          <Flex mt={2}>
            <Button colorScheme="blue" mr={2}>
            Trade
            </Button>
            <Button colorScheme="green">Transfer</Button>
          </Flex>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default ViewDetails;
