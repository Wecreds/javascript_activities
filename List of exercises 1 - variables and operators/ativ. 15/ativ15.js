// latasTinta - Recebe quantos metros quadrados precisa pintar, e retorna a quantidade de latas de tinta para comprar. A cobertura da tinta é de 3 metros por litro de tinta. Cada lata possui 18 litros de tinta.

const vmetros = parseInt(prompt(`Digite quantos metros quadrados precisa pintar`))

const vtinta = vmetros/(18*3)

const arrendodamento = vtinta % 18

if (arrendodamento === 0) {
    document.write(`Você vai precisar de ${Math.floor(vtinta)} latas de tintar para pintar ${vmetros} metros quadrados.`)
} else {
    document.write(`Arrendondando para cima, você vai precisar de ${Math.floor(vtinta) + 1} latas de tinta para pintar.`) 
}
