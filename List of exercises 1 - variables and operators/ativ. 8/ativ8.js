//Recebe uma temperatura em graus Fahrenheit, e retorna a temperatura em graus Celsius.


const fahr = parseInt(prompt(`Digite a temp. em Fahrenheit`))

const cel = ((fahr - 32) * 5) / 9

document.write(`Convertendo para Celsius dará ${Math.floor(cel)} graus.`)

