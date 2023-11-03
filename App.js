import React from 'react';
import getPrediction from './helper/getPrediction';


import {
  StyleSheet,
  Text,
  View
} from 'react-native';

getPrediction()

export default App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Temps</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
