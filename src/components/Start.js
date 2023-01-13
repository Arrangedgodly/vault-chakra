import {
  Box,
  Button,
  useColorModeValue,
  Heading,
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
      w="750px"
      h="750px"
      marginTop="5vh"
      borderRadius="25px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading>Welcome!</Heading>
      <Text>
        To get started, click <Button onClick={onToggle}>here.</Button>
      </Text>
      <Fade in={isOpen} marginTop='50px'>
        <Spacer />
          <StartForm />
        <Spacer />
      </Fade>
    </Box>
  );
}

export default Start;
