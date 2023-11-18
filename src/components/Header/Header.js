import { Heading, Box, Text } from '@chakra-ui/react';

const Header = () => (
  <Box as="nav" bg="#fff" width="100%">
    <Heading as="h1" letterSpacing="4px" textTransform="uppercase">
      {Array.from('Simply Countly').map((letter, index) => (
        letter === ' ' ? 
        <Text as="span" key={index} color="white">
          {letter}
        </Text>
        :
        <Text as="span" key={index} color="white" bg="rgba(0,0,0,0.8)" borderRadius="20px" p={1} boxShadow="-2px 2px 2px rgba(0,0,0,0.2)">
          {letter}
        </Text>
      ))}
    </Heading>
  </Box>
);

export default Header;