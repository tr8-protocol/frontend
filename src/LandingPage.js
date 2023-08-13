import React from 'react';
import { Box, Button, ChakraProvider, Container, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import logo from './Logo (1).png'

const LandingPage = () => {
  return (
    <ChakraProvider>
    <Box bg="black.500" minHeight="100vh" color="black">
      <Container maxW="container.xl" p={4}>
        <Flex justify="space-between" alignItems="center">
        <Box p={4} bg="gray.100" borderRadius="md">
          <Image src={logo} alt="Logo" w={8} h={8} />
          </Box>
          <Flex>
            <Link href="#">About</Link>
            <Link ml={4} href="#">My TR8s</Link>
            <Button ml={4} colorScheme="whiteAlpha">Create a TR8</Button>
          </Flex>
        </Flex>

        <Flex mt={8} justify="space-between" align="center">
          <Box flex="1">
            <Heading size="xl">Who are you? Digitize your Identity.</Heading>
            <Text mt={4}>Discover the future of identity and credentials with TR8s – the platform that captures every facet of who you are. TR8s go beyond traditional records, encompassing credentials, certifications, event attendance, and more, all meticulously woven together to create a comprehensive digital tapestry of your identity. Start building your TR8 collection today.</Text>
            <Button mt={4} colorScheme="blue">Get Started</Button>
          </Box>
          <Box p={4} bg="gray.100" borderRadius="md">
          <Image src="/path/to/hero-image.jpg" alt="Hero Image" w={400} h={300} borderRadius="md" />
          </Box>
        </Flex>

        <Box mt={12}>
          <Heading size="lg">What are TR8s and How do they work?</Heading>
          <Flex mt={4} justify="space-between" align="flex-start">
            <Box p={4} bg="gray.100" borderRadius="md" flex="1">
            <Box p={4} bg="gray.100" borderRadius="md">
              <Text>TR8 - Redefining NFTs for the Future</Text>
              <Text mt={4}>TR8 isn't just another NFT platform; it's a transformative experience that empowers you to showcase your achievements and identity in a way that's never been possible before. Our commitment to innovation, trust, and user-centricity drives us to reshape the NFT landscape. Join us on this journey as we redefine what it means to own, display, and share your digital accomplishments. TR8 - The Future of Multi-Chain NFTs is here, and it's changing the game.</Text>
            </Box>
            <Text ml={4}>Text on the right</Text>
            </Box>
          </Flex>
        </Box>

        <Box mt={12}>
          <Heading size="lg">Use Cases of TR8: Transforming Digital Identity</Heading>
          <Flex mt={4} justify="space-between">
            <Box p={4} bg="gray.100" borderRadius="md" flex="1">
              <Heading size="md">Enhanced Credentials</Heading>
              <Text mt={2}>TR8 transforms traditional credentials into secure and verifiable digital tokens. Certifications, event attendance, academic achievements, and more gain a new level of authenticity, bolstering trust in a digital world.</Text>
            </Box>
            <Box p={4} bg="gray.100" borderRadius="md" flex="1" ml={4}>
              <Heading size="md">Diverse Applications</Heading>
              <Text mt={2}>From professional certifications to virtual avatars, TR8's versatile approach finds applications in various domains. Artists, gamers, communities, and individuals can all benefit from the power of TR8 to showcase and celebrate achievements.</Text>
            </Box>
            <Box p={4} bg="gray.100" borderRadius="md" flex="1" ml={4}>
              <Heading size="md">Innovative Possibilities</Heading>
              <Text mt={2}>TR8's decentralized and customizable platform opens doors to endless possibilities. Create, share, and authenticate personalized achievements, collectibles, and even charitable initiatives, shaping the future of digital identity and NFTs.</Text>
            </Box>
          </Flex>
        </Box>

        <Box mt={12} textAlign="center">
          <Text>Contact Us</Text>
        </Box>
      </Container>
    </Box>
    </ChakraProvider>
  );
}

export default LandingPage;
