import React from 'react';
import {
  Box,
  Flex,
  Input,
  Text,
  IconButton,
  Textarea,
  Select,
  Button,
  Switch,
  FormControl,
  FormLabel,
  ChakraProvider,
  Center
} from '@chakra-ui/react';
import { RiNotification2Line } from 'react-icons/ri';

const CreateTR8 = () => {
  return (
    <ChakraProvider>
      <Box p={4}>
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="xl" fontWeight="bold">Create a TR8</Text>
          <IconButton icon={<RiNotification2Line />} aria-label="Notifications" />
        </Flex>
        <Flex>
        <Box w="50%" pr={2}>
          <Text textAlign="left">TR8 Title</Text>
          <Input placeholder="Provide a descriptive title for the TR8" mb={2} />
          
          <Text textAlign="left">Description</Text>
          <Textarea placeholder="Add a detailed description of the TR8, including its significance and context." mb={2} />

          <Text textAlign="left">Issuer/Organization</Text>
          <Input placeholder="The entity that issued or is associated with the TR8" mb={2} />
          
          <Text textAlign="left">Category/Type</Text>
          <Select placeholder="Select option" mb={2}>
            <option>Certification</option>
            <option>Asset</option>
            <option>Degree</option>
            <option>Event Participation</option>
          </Select>
          
          <Text textAlign="left">Date of Issuance</Text>
          <Input type="date" placeholder="Date Dropdown" mb={5} />
          
          <FormControl display="flex" alignItems="center" mb={2}>
            <FormLabel htmlFor="toggle" mb="0">
            Cross-chain Portability
            </FormLabel>
            <Switch id="toggle" ml={2} />
          </FormControl>

          <FormControl display="flex" alignItems="center" mb={2}>
            <FormLabel htmlFor="toggle" mb="0">
            Tradeable
            </FormLabel>
            <Switch id="toggle" ml={2} />
          </FormControl>

          <FormControl display="flex" alignItems="center" mb={2}>
            <FormLabel htmlFor="toggle" mb="0">
            Transfer Locking
            </FormLabel>
            <Switch id="toggle" ml={2} />
          </FormControl>

          <Text textAlign="left" mt={5}>Metadata URI (Advanced Users)</Text>
          <Input placeholder="Specify the metadata URI for the TR8" mb={2} />
          
          <Button colorScheme="blue" width="500px" mt={2}>Create TR8</Button>
        </Box>
        
        <Box w="50%" pl={4}>
          <Center h="150px" border="1px dashed gray" borderRadius="md" mt={2}>
          <Text>No File Found!</Text>
          <br/>
          <Text>Upload an image that represents the TR8.</Text>
          </Center>
          <Button colorScheme="blue" mt={2} width="500px" >Upload File</Button>
        </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default CreateTR8;
