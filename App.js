import React, { useState, useEffect } from 'react';
import getPrediction from './helper/getPrediction';



import {
  StyleSheet,
  Text,
  View
} from 'react-native';



export default App = () => {

  const [predicciones, setPredicciones] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const prediccionesObtenidas = await getPrediction();
        setPredicciones(prediccionesObtenidas);   
      } catch (err) {
        console.log(`Error get pred: \n ${err}`)
      }
    }
    getData()
  }, [])
  
  return (
    <View style={styles.container}>
    {predicciones.map((dia, index) => (
      <View key={index}>
        {index === 0 ? (
          <View style={styles.today}>
            <View >
              <Text> Dimarts {dia.fecha}</Text>
              <Text>{dia.temperatura.maxima}ºC</Text>
            </View>
            <View>
              <Text>Sensación térmica: {dia.sensTermica.maxima}</Text>
              <Text>Humedad: {dia.humedadRelativa.maxima}%</Text>
            </View>
          </View>
        ) : (
          <View>
            <Text>{dia.fecha}</Text>
            <Text>{dia.temperatura.maxima}ºC</Text>
            <Text>Sensación térmica: {dia.sensTermica.maxima}</Text>
            <Text>Humedad: {dia.humedadRelativa.maxima}%</Text>
          </View>
        )}
      </View>
    ))}
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#85BCFF',
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
  today: {
    marginTop: 16,
    // paddingVertical: 8,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 150,
  },
});
