//salarioLiquido - Recebe quanto ganha por hora e quantas horas trabalho ao mês, e retorna o salário líquido.
//Descontos:
//- INSS é 8% do salário bruto
//- IR é 11% do salário bruto
//- Sindicato é 5% do salário bruto.

const vhora = parseInt(prompt(`Digite quanto ganha por hora`))

const vmes = parseInt(prompt(`Digite quantas horas trabalha ao mês`))

const vbruto = vmes * vhora

const total = vbruto - ((vbruto/100)* 24)

//24 Porque eo valor que dá ao somar os três descontos.

document.write(`Aplicando os descontos, o seu salario dará R$${total} reais.`)

