//Recebe a quantidade de dias que o carro foi alugado e a quantidade de quilômetros rodados, e retorna o valor a ser pago. 1 dia: 60 reais mais R$ 0,15 por km rodado.


const dias = parseInt(prompt(`Informe a quantidade de dias que o carro foi alugado`))

const km = parseInt(prompt(`Informe a quantidade de quilômetros rodados`))

const valor = ((km / 100) * 15) + (dias * 60)

document.write(`O valor da sua tarifa é ${valor}`)

