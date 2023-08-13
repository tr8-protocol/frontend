import React from 'react';
import {
  Box,
  Flex,
  Input,
  Text,
  IconButton,
  Button,
  Image,
  Heading,
  ChakraProvider
} from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { RiSearchLine, RiNotification2Line } from 'react-icons/ri';
import ViewDetails from './ViewDetails';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import image1 from './Replace Image (1).png'
import image2 from './Replace Image (2).png'
import image3 from './Replace Image (3).png'
import image4 from './Replace Image (4).png'
import image5 from './Replace Image (5).png'


const DashboardComponent = ({ imageSrc, id, text }) => {
  const handleLike = () => {
  };

  return (
    <ChakraProvider>
      <Flex align="center">
        <Input placeholder="Search" />
        <IconButton ml={4} icon={<RiSearchLine />} />
        <IconButton ml={4} icon={<RiNotification2Line />} />
      </Flex>
      <Heading mt={5} mb={5}>My TR8s</Heading>
      <Flex direction="row" flexWrap="wrap" justify="space-between">
      <Box position="relative">
        <Box
          position="relative"
          w="300px"
          h="300px" 
          border="black"
        >
          <Image src={image1} alt="" w="90%" h="100%" objectFit="cover" />
          <Box position="absolute" top={0} right={0}>
            <Box bg="white" p={1} borderRadius="md">
              ID: 200495
            </Box>
            <IconButton icon={<AiFillStar />} onClick={handleLike} />
          </Box>
        </Box>
        <Box mt={2} w="300px">
          <Text>Property Mogul</Text>
          <Text>08.10.2023</Text>
          <Text>Prestige Real Estate Institute</Text>

          <Button mt={2} colorScheme="blue">
            View Details
          </Button>
        </Box>
    </Box>

    <Box position="relative">
        <Box
          position="relative"
          w="300px"
          h="300px" 
          border="black"
        >
          <Image src={image2} alt="" w="90%" h="100%" objectFit="cover" />
          <Box position="absolute" top={0} right={0}>
            <Box bg="white" p={1} borderRadius="md">
              ID: 200495
            </Box>
            <IconButton icon={<AiFillStar />} onClick={handleLike} />
          </Box>
        </Box>
        <Box mt={2} w="300px">
          <Text>Distinguished Scholar</Text>
          <Text>02.04.2023</Text>
          <Text>Quantum University</Text>

          <Button mt={2} colorScheme="blue">
            View Details
          </Button>
        </Box>
    </Box>

    <Box position="relative">
        <Box
          position="relative"
          w="300px"
          h="300px" 
          border="black"
        >
          <Image src={image3} alt="" w="90%" h="100%" objectFit="cover" />
          <Box position="absolute" top={0} right={0}>
            <Box bg="white" p={1} borderRadius="md">
              ID: 200495
            </Box>
            <IconButton icon={<AiFillStar />} onClick={handleLike} />
          </Box>
        </Box>
        <Box mt={2} w="300px">
          <Text>Cybersecurity Guru</Text>
          <Text>10.12.2023</Text>
          <Text>SecureTech Academy</Text>

          <Button  mt={2} colorScheme="blue">
            View Details
          </Button>
        </Box>
    </Box>
    </Flex>
    </ChakraProvider>
  );
};

export default DashboardComponent;
