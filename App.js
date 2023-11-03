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
      <Text style={styles.title}>App Temps</Text>
      {predicciones.map((dia, index) => (
        <View key={index}>
          <Text>Fecha: {dia.fecha}</Text>
          <Text>Temperatura: {dia.temperatura.maxima}</Text>
          <Text>Sensación térmica: {dia.sensTermica.maxima}</Text>
          <Text>Humedad relativa: {dia.humedadRelativa.maxima}</Text>
        </View>
      ))}



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
