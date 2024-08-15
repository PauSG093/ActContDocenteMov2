import { useState } from 'react';

const useCounter = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return { contador, incrementar, decrementar };
};

export default useCounter;