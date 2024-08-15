import React from 'react';
import { View, StyleSheet } from 'react-native';
import Padre from './src/components/Padre';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Padre />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;