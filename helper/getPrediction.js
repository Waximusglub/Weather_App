import axios from "axios";
import { WeatherApi as keyapi } from '../keys.json';


const getPrediction = async () => {

  let code= "25072"
  const predicciones = [];

    await axios.get(`https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/${code}`, {
        headers: {
            'api_key': keyapi,
        }
    }).then( async (response) => {

      console.log("Prediction: " + response.data.datos)

      await axios.get(response.data.datos).then((response) => {

        const data = response.data
        const prediction = data[0].prediccion.dia;

        prediction.map((dia) => {

          // Filtar la data que surti solament el dia i treure els 0 del dies 01, 02, 03...
          var date = dia.fecha.substring(8,10);
          if(date.charAt(0) == '0' ){
            date = date.substring(1);
            console.log(date)
          }

          const obj={
            fecha: date,
            // probPrecipitacion: dia.probPrecipitacion,
            // cotaNieveProv: dia.cotaNieveProv,
            // estadoCielo: dia.estadoCielo,
            // viento: dia.viento,
            // rachaMax: dia.rachaMax,
            temperatura: dia.temperatura,
            sensTermica: dia.sensTermica,
            humedadRelativa: dia.humedadRelativa,
            
          }

          predicciones.push(obj);
        });

      })
    
    }).catch(err=>{
      console.log(`Error a la crida de API: \n ${err}`)
    })

    return predicciones;

};

export default getPrediction

// axios({
//     headers: {
//       'api_key': keyapi,
//     },
//     method: 'get',
//     url: `https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/25072`,
//   }).then((response) => {
//     console.log("Resposta: " + response.data.datos)
//     axios.get(response.data.datos).then((response) => {
  
//       const data = response.data
  
//       // const origin = data[0].origen
  
//       // const source = {
//       //   productor: origin.productor,
//       //   web: origin.web,
//       //   enlace: origin.enlace,
//       //   copyright: origin.copyright,
//       //   notaLegal: origin.notaLegal
//       // }
  
//       const prediction = data[0].prediccion.dia
  
//       prediction.forEach(dia => {
//         setDays.
//       })
  
//     })
//   });