import {
  Box,
  Button,
  useColorModeValue,
  Heading,
  VStack,
  Spacer,
  Text,
  Fade,
  useDisclosure,
} from '@chakra-ui/react';
import StartForm from './StartForm';

function Start() {
  const bg = useColorModeValue('gray.300', 'gray.600');
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg={bg}
      w="50vw"
      h="75vh"
      marginTop="5vh"
      borderRadius="25px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Fade in={!isOpen} w="100%" h="100%">
        <VStack>
          <Heading>Welcome!</Heading>
          <Text>
            To get started, click <Button onClick={onToggle}>here.</Button>
          </Text>
        </VStack>
      </Fade>
      <Fade in={isOpen} w="100%" h="100%">
        <StartForm />
      </Fade>
    </Box>
  );
}

export default Start;
