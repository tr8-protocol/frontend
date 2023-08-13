import React, { useState } from 'react';
import {
  Box,
  Flex,
  VStack,
  HStack,
  IconButton,
  Input,
  Spacer,
  Avatar,
  Text,
  ChakraProvider,
  Button
} from '@chakra-ui/react';
import { AiOutlineDashboard, AiFillStar, AiOutlineHistory, AiOutlineSetting } from 'react-icons/ai';
import { RiWallet3Line, RiLogoutBoxRLine, RiNotification2Line, RiSearchLine } from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';
import DashboardComponent from './DashboardComponent';

const Dashboard = () => {
  
  const [showDashboard, setShowDashboard] = useState(false);
  const [showCreateaTR8, setShowCreateaTR8] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showMyTR8s, setShowMyTR8s] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleButtonClick = (buttonName) => {
    setShowDashboard(buttonName === "Dashboard");
    setShowCreateaTR8(buttonName === "CreateaTR8");
    setShowFavorites(buttonName === "Favorites");
    setShowMyTR8s(buttonName === "MyTR8s");
    setShowWallet(buttonName === "Wallet");
    setShowHistory(buttonName === "History");
    setShowSettings(buttonName === "Settings");
  };

  return (
    <ChakraProvider>
    <Flex>
      <VStack p={4} bg="gray.100">
      <Box bg="blue.500" w="250px" p={4} color="white" >
        <Avatar size="lg" icon={<FaRegUserCircle />} />
        <Text>Name</Text>
        <Flex direction="column" mt={6}>
            <Flex align="center">
            <IconButton icon={<AiOutlineDashboard />} />
            <Button
              colorScheme="blue"
              size="lg"
              mb={2}
              onClick={() => handleButtonClick("Dashboard")}
              _hover={{ bg: "blue.600" }}
              justifyContent="start" 
              w="100%" 
            >
              Dashboard
            </Button>
            </Flex>
            <Flex align="center">
            <IconButton icon={<AiFillStar />} />
            <Button
              colorScheme="blue"
              size="lg"
              mb={2}
              onClick={() => handleButtonClick("CreateaTR8")}
              _hover={{ bg: "blue.600" }}
              justifyContent="start" 
              w="100%"
            >
              Create a TR8
            </Button>
            </Flex>
            <Flex align="center">
            <IconButton icon={<AiFillStar />} />
            <Button
              colorScheme="blue"
              size="lg"
              mb={2}
              onClick={() => handleButtonClick("Favorites")}
              _hover={{ bg: "blue.600" }}
              justifyContent="start" 
              w="100%"
            >
              Favorites
            </Button>
            </Flex>
            <Flex align="center">
            <IconButton icon={<AiFillStar />} />
            <Button
              colorScheme="blue"
              size="lg"
              mb={2}
              onClick={() => handleButtonClick("MyTR8s")}
              _hover={{ bg: "blue.600" }}
              justifyContent="start" 
              w="100%"
            >
              My TR8s
            </Button>
            </Flex>
            <Flex align="center">
            <IconButton icon={<RiWallet3Line />} />
            <Button
              colorScheme="blue"
              size="lg"
              mb={2}
              onClick={() => handleButtonClick("Wallet")}
              _hover={{ bg: "blue.600" }}
              justifyContent="start" 
              w="100%"
            >
              Wallet
            </Button>
            </Flex>
            <Flex align="center">
            <IconButton icon={< AiOutlineHistory />} />
            <Button
              colorScheme="blue"
              size="lg"
              mb={2}
              onClick={() => handleButtonClick("History")}
              _hover={{ bg: "blue.600" }}
              justifyContent="start" 
              w="100%"
            >
              History
            </Button>
            </Flex>
            <Flex align="center">
            <IconButton icon={<AiOutlineSetting />} />
            <Button
              colorScheme="blue"
              size="lg"
              mb={2}
              onClick={() => handleButtonClick("Settings")}
              _hover={{ bg: "blue.600" }}
              justifyContent="start" 
              w="100%"
            >
              Settings
            </Button>
            </Flex>
          </Flex>
        </Box>
        <Spacer />
        <HStack>
          <IconButton icon={<RiLogoutBoxRLine />} />
        </HStack>
      </VStack>
        
        <Box flex="1" p={4}>
          {showDashboard && <DashboardComponent />}
          {showCreateaTR8 && <DashboardComponent />}
          {showFavorites && <DashboardComponent />}
          {showMyTR8s && <DashboardComponent />}
          {showWallet && <DashboardComponent />}
          {showHistory && <DashboardComponent />}
          {showSettings && <DashboardComponent />}
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Dashboard; 
  