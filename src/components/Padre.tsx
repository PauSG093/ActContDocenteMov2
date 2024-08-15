import React from 'react';
import { View, StyleSheet } from 'react-native';
import Hijo from './hijo';
import useCounter from '../hooks/useCounter';

const Padre: React.FC = () => {
  const { contador, incrementar, decrementar } = useCounter();

  return (
    <View style={styles.container}>
      <Hijo contador={contador} incrementar={incrementar} decrementar={decrementar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default Padre;