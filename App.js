import React from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

axios({
  headers: {
    'api_key' : 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZXJnaW1hbjAzODZAZ21haWwuY29tIiwianRpIjoiNWExNzYyYmMtMmY5Mi00YzNiLWI0MWEtN2E5MjdmYzJhMDliIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2OTg2NjYxMzAsInVzZXJJZCI6IjVhMTc2MmJjLTJmOTItNGMzYi1iNDFhLTdhOTI3ZmMyYTA5YiIsInJvbGUiOiIifQ.KBKeyn6u-Db7-OIoZ3AgaEWGF5E9piRfUzduA-wqwkQ',
  },
  method: 'get',
  url: `https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/25072`,
}).then((response) => {
  console.log(response.data);
});

export default App = () =>{
  return(
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
