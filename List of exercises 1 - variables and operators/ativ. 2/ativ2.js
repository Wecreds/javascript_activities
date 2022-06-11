//Recebe um valor em metros, e retorna o valor em milímetros, sabendo que 1 metro equivale a 1000 mm.

const vmetros = parseInt(prompt(`digite o valor em metros: `))

const vmili = vmetros * 1000

document.write(`mutiplicando o valor por 1000 nos retorna o valor em milimetros, que é ${vmili} `)