
//Recebe uma distância e a velocidade de movimentação, e retorna as horas que seriam gastas para percorrer em linha reta. 

const km = parseInt(prompt(`Digite o valor de km/h: `))

const dis = parseInt(prompt(`Digite a distancia em km: `))

const tot = dis / km

document.write(`você demoraria ${Math.floor(tot)} horas para percorrer ${dis}km a ${km}km/h`)

//me estrangulei pra conseguir adicionar esse Math.Floor, mas consegui.
