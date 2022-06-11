//Recebe uma temperatura em graus Celsius, e retorna a temperatura em graus Fahrenheit.


const Celsius = parseInt(prompt(`Digite a temperatura em Celsius`))

const fahr = ((Celsius * 9) /5) + 32 

document.write(`Convertendo para Fahrenheit dará ${fahr} graus.`)