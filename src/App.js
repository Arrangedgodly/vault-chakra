import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Start from './components/Start';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
          <ColorModeSwitcher justifySelf="flex-end" />
          <Flex alignItems='center' justifyContent='center'>
            <Start />
          </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
