import { Box } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

const Screen = ({ contador, direction = 1 }) => (
  <AnimatePresence mode='wait'>
    <MotionBox
      fontSize="10rem"
      color="#17212a"
      key={contador}
      initial={{ rotateX: -90 * direction }}
      animate={{ rotateX: 0 }}
      exit={{ rotateX: 90 * direction }}
      transition={{ duration: 0.2 }}
    >
      {contador}
    </MotionBox>
  </AnimatePresence>
);

export default Screen;