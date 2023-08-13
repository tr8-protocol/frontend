import React from 'react';
import { Box, Button, ChakraProvider, Container, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import logo from './Logo (1).png'
import image from './Section1.png'

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
            <Link ml={2} href="#">My TR8s</Link>
            <Button ml={2} colorScheme="blue" color="#dd5947">Create a TR8</Button>
          </Flex>
        </Flex>

        <Flex mt={8} justify="space-between" align="center">
          <Box flex="1">
            <Heading size="xl">Who are you? Digitize your Identity.</Heading>
            <Text mt={4}>Discover the future of identity and credentials with TR8s – the platform that captures every facet of who you are. TR8s go beyond traditional records, encompassing credentials, certifications, event attendance, and more, all meticulously woven together to create a comprehensive digital tapestry of your identity. Start building your TR8 collection today.</Text>
            <Button mt={4} colorScheme="blue">Get Started</Button>
          </Box>
          <Box p={4} bg="gray.100" borderRadius="md">
          <Image src={image} alt="Hero Image" w={400} h={300} borderRadius="md" />
          </Box>
        </Flex>

        <Box mt={12}>
        <Heading size="lg">What are TR8s and How do they work?</Heading>
        <Flex mt={4} justify="space-between" align="flex-start">
          <Box p={4} bg="gray.100" borderRadius="md" flex="1">
            <Box mb={4}>
              <Text textAlign="left">TR8 - Redefining NFTs for the Future</Text>
              <Text mt={4} textAlign="left">
                TR8 isn't just another NFT platform; it's a transformative experience that empowers you to showcase your achievements and identity in a way that's never been possible before. Our commitment to innovation, trust, and user-centricity drives us to reshape the NFT landscape. Join us on this journey as we redefine what it means to own, display, and share your digital accomplishments. TR8 - The Future of Multi-Chain NFTs is here, and it's changing the game.
              </Text>
            </Box>
            <Box mb={4}>
              <Text textAlign="left">Multi-Chain Attestations: TR8 introduces a groundbreaking concept multi-chain attestations. Your achievements are seamlessly anchored on multiple blockchain networks, offering unmatched interoperability and resilience.</Text>
            </Box>
            <Box mb={4}>
              <Text textAlign="left">Trust and Transparency: Embrace a new level of trust with TR8. Each NFT is backed by verifiable data, ensuring authenticity. Say goodbye to uncertainty and hello to transparency in the NFT world.</Text>
            </Box>
            <Box mb={4}>
              <Text textAlign="left">Interconnected Identity: TR8 weaves your digital identity through real-world attestations. Whether it's an event you attended or a certificate you earned, each attestation contributes to a comprehensive narrative.</Text>
            </Box>
            <Box mb={4}>
              <Text textAlign="left">Flexible Token Gating: Customize your NFT distribution with TR8's Resolver Contracts. Define conditions for attestation and minting, allowing you to host exclusive events or issue certificates with ease.</Text>
            </Box>
            <Box>
              <Text textAlign="left">Native Multi-Chain Presence: TR8 goes beyond bridging chains. It natively exists on multiple chains, providing a seamless experience without compromising security. Welcome to the future of NFTs with TR8.</Text>
            </Box>
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
