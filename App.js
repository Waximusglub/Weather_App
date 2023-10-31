import React from 'react';
import axios from 'axios';
import {WeatherApi as keyapi} from './keys.json';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';


axios({
  headers: {
    'api_key': keyapi,
  },
  method: 'get',
  url: `https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/25072`,
}).then((response) => {

  axios.get(response.data.datos).then((response) => {


    const data = response.data

    const origin = data[0].origen

    const source = {
      productor: origin.productor,
      web: origin.web,
      enlace: origin.enlace,
      copyright: origin.copyright,
      notaLegal: origin.notaLegal
    }

    const prediction = data[0].prediccion.dia

    
    const week= [];
    prediction.forEach(dia=>{
      week.push(dia);
      console.log(Object.values(dia));
    })

  })
});

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
