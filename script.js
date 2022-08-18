const calcular = document.getElementById('calcular')

function imc () {
    const nome = document.getElementById('nom').value
    const ps = document.getElementById('pesm').value
    const al = document.getElementById('altc').value
    const resultado = document.getElementById('res')

    if (nome !== '' && ps !== '' && al !== '') {

        const valorIMC = (ps / (al * al)).toFixed(2)
        resultado.innerHTML = `${nome} seu IMC está em ${valorIMC} </br>`

        if (valorIMC < 18.5) {
            resultado.innerHTML += 'Abaixo do peso.'
        } else {
            resultado.innerHTML += 'Peso ideal'
        }

    } else {
        alert ('Preencha todos os campos.')
    }
}
calcular.addEventListener('click', imc)