import { Button, Flex } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useMediaQuery } from '@chakra-ui/react';

const PadButtons = ({ incrementar, decrementar }) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 600px)");
  const [isMediumScreen] = useMediaQuery("(max-width: 800px)");
  const [isLargeScreen] = useMediaQuery("(max-width: 1000px)");

  let width;
  if (isSmallScreen) {
    width = "80%";
  } else if (isMediumScreen) {
    width = "50%";
  } else if (isLargeScreen) {
    width = "40%";
  } else {
    width = "35%";
  }

  return (
    <Flex justify="space-between" width={width} padding="6">
      <Button onClick={decrementar} p="6" borderRadius="10px" bg="#17212a" border="none" shadow="none" color="white" width="5rem" height="5rem"
        _hover={{ background: "cyan", color: "#17212a" }} transition="all 0.3s ease-in-out">
        <MinusIcon boxSize="24px" />
      </Button>
      <Button onClick={incrementar} p="6" borderRadius="10px" bg="#17212a" border="none" shadow="none" color="white" width="5rem" height="5rem"
        _hover={{ background: "cyan", color: "#17212a" }} transition="all 0.3s ease-in-out">
        <AddIcon boxSize="24px" />
      </Button>
    </Flex>
  );
};

export default PadButtons;