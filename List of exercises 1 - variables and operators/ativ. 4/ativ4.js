//Recebe um salário e sua porcentagem de aumento, e retorna  o novo salário.


const sal = parseInt(prompt(`Digite o valor do salario`))

const porc = parseInt(prompt(`Digite em porcentagem o quanto sera aumentado`))

const tot = ((porc / 100) * sal) + sal

document.write(`Aumentando o atual salario em ${porc}%, dará ${tot} reais.`)