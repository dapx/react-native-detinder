import * as config from '../../config';

let detento = {};
let selectedDetento = {};

export function fetchQuestions(){
  console.log(config.config.host);
  return fetch(`http://${config.config.host}:${config.config.port}/questions`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
  });
}

export function fetchDetentos(){
  console.log(JSON.stringify(detento));
 return fetch(`http://${config.config.host}:${config.config.port}/detentos`, {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
   },
   body: JSON.stringify(detento)
 }).then((response) => response.json()).then((responseJson) => {
       return responseJson;
     })
     .catch((error) => {
       console.error(error);
     });
}

export function fetchDetentosBKP(){
 return fetch(`http://${config.config.host}:${config.config.port}/detentos`)
     .then((response) => response.json())
     .then((responseJson) => {
       //Cards = responseJson;
       return responseJson;
     })
     .catch((error) => {
       console.error(error);
     });
}

export function defineDetento(key, value){
  for (valor in key) {
    detento[key[valor]]=value;
  }
  console.log(detento);
  return detento;
}

export function defineDetentoString(key, value){
  detento[key]=[value];
  console.log(detento);
  return detento;
}

export function deleteDetentoAttr(key){
  detento[key]=undefined;
  console.log(detento);
  return detento;
}

export function loadDetento(ind_id){
  return fetch(`http://${config.config.host}:${config.config.port}/detentos/${ind_id}`)
      .then((response) => response.json())
      .then((responseJson) => {
        //Cards = responseJson;
        selectedDetento = responseJson;
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
}

export function getDetento(){
  return selectedDetento;
}

export function recoverDetento(){
  return detento;
}
