//Recebe as notas das 2 provas e 2 exercícios de programação e retorna se o aluno foi ou não aprovado. As provas têm peso 7 e os exercícios têm peso 3. Cada parcial tem peso igual.  Uma forma de resolver é calcular a 1a parcial, com a média ponderada entre  p1 e ep1, depois calcular a 2a parcial, com as notas de p2 e ep2 e depois       calcular a média aritmética entre a 1a e a 2a parcial.

const p1 = parseInt(prompt(`Digite a nota da primeira prova `))

const p2 = parseInt(prompt(`Digite a nota da segunda prova `))

const e1 = parseInt(prompt(`Digite a nota do primeiro exercício `))

const e2 = parseInt(prompt(`Digite a nota do segundo exercício `))

const n1 = (p1 + e1) / 2

const n2 = (p2 + e2) / 2

const total = (n1 + n2) / 2

if (total >= 6) {
    document.write(`Parabens! você passou com ${total} de nota!`)
} else {
    document.write(`Infelizmente, você reprovou com ${total} de nota.`)
}
