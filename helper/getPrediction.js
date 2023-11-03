import axios from "axios";
import { WeatherApi as keyapi } from '../keys.json';


const getPrediction = async () => {

  let code= "25072"

  var week=[]

    await axios.get(`https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/${code}`, {
        headers: {
            'api_key': keyapi,
        }
    }).then((response) => {

      console.log("Prediction: " + response.data.datos)

      axios.get(response.data.datos).then((response) => {

        const data = response.data
        const prediction = data[0].prediccion.dia;







        // prediction.forEach((dia, index) => {
        //   console.log(`Día ${index + 1}: Fecha - ${dia.fecha}, Temperatura - ${dia.temperatura}`);
        // });

        prediction.map((dia,index) => ({

        }));
    
        // // Mostrar los datos transformados
        // console.log(transformedData);
        
        
      })
    
    
    }).catch(err=>{
      console.log("Error a la crida de API")
    })
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