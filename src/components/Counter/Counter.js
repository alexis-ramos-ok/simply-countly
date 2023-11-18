import React, { useState } from 'react';
import { useMediaQuery, VStack } from '@chakra-ui/react';
import Header from '../Header/Header';
import Screen from '../Screen/Screen';
import PadButtons from '../PadButtons/PadButtons';
import Footer from '../Footer/Footer';

const Counter = () => {
  const [contador, setContador] = useState(0);
  const [isMobile] = useMediaQuery('(max-width: 480px)');

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  const reiniciar = () => setContador(0);

  return (
    <VStack minH="100vh" align="center" justify="space-between" bg="#f3f7fb">
      <Header />
      <Screen contador={contador} />
      <PadButtons incrementar={incrementar} decrementar={decrementar} isMobile={isMobile} />
      <Footer reiniciar={reiniciar} isMobile={isMobile} />
    </VStack>
  );
};

export default Counter;