import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductList from './components/ProductList';

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


const App = () => (
  <View style={styles.container}>
    <ProductList />
  </View>
);

export default App;

