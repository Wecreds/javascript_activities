//Recebe uma quantidade de cigarros fumados por dia e a quantidade de anos que fuma, e retorna o total de dias perdidos, sabendo que cada cigarro reduz a vida em 10 minutos.

const cig = parseInt(prompt(`Digite a quantidade de cigarros fumados por dia`))

const anos = parseInt(prompt(`Digite a quantidade de anos que voce fuma`))

const anos2 = anos * 365

const min = (cig * 10) * anos2

const horas = min / 60

const dias = horas / 24

document.write(`Parabens! você perdeu ${Math.floor(dias)} dias de vida!`)