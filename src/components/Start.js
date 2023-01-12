import { Box, useColorModeValue, Heading, Spacer, Text, Select } from "@chakra-ui/react";

function Start() {
  const bg = useColorModeValue('gray.300', 'gray.600');
  return (
    <Box bg={bg} w='750px' h='750px' marginTop='5vh' borderRadius='25px' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
      <Heading>Welcome!</Heading>
      <Text>To get started, fill out the form below.</Text>
      <Spacer />
      <Select placeholder="Select your Store :">
        <option value='Broadmoor'>Broadmoor</option>
        <option value='Colfax'>Colfax</option>
        <option value='Fraser'>Fraser</option>
        <option value='Littleton'>Littleton</option>
        <option value='Nederlands'>Nederlands</option>
        <option value='Northfield'>Northfield</option>
        <option value='Quincy'>Quincy</option>
        <option value='Rockrimmon'>Rockrimmon</option>
        <option value='Sheridan'>Sheridan</option>
      </Select>
      <Spacer />
    </Box>
  );
}

export default Start;