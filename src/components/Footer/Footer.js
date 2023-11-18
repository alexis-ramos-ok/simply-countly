import { Button, Box } from '@chakra-ui/react';

const Footer = ({ reiniciar, isMobile }) => (
  <Box bg="#fff" width="100%" height="5rem" display="flex" justifyContent="center" alignItems="center">
    <Button onClick={reiniciar} m={isMobile ? '2' : '4'} p="6" borderRadius="30px" bg="#17212a" border="2px solid cyan" color="white" textShadow="0.5px 0.5px 0.5px cyan" width="10rem" height="3rem" fontSize="18px"
      _hover={{ background: "cyan", color: "#17212a" }} transition="all 0.3s ease-in-out">
      Re-Start
    </Button>
  </Box>
);

export default Footer;