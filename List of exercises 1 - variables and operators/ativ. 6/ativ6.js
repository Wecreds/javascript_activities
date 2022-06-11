//Recebe uma data em dias com horas, minutos e segundos, e retorna a data em segundos.

const dias =  parseInt(prompt(`Digite os dias`))

const hor = parseInt(prompt(`Digite as horas`))

const min = parseInt(prompt(`Digite os minutos`))

const seg = parseInt(prompt(`Digite os segundos`))

const tot = (dias * 86400) + (hor * 3600) + (min * 60) + seg

document.write(`Convetendo a data dada em segundos, dará ${tot} segundos.`)