import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

interface HijoProps {
  contador: number;
  incrementar: () => void;
  decrementar: () => void;
}

const Hijo = ({ contador, incrementar, decrementar }: HijoProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={incrementar} />
      <Button title="Decrementar" onPress={decrementar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Hijo;