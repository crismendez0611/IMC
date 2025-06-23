// imprimir en caja resultado
//document.getElementById("resultado").value="Hola mundo!"

function Calcular() {

    altura = parseFloat(document.getElementById("altura").value)
    peso = parseFloat(document.getElementById("peso").value)

    //Verifica si los datos ingresados son correctos, si lo son calcula el IMC y el Estado
    if (altura > 0 & peso > 0) {
        imc = Imc(altura, peso)
        //document.getElementById("estado").value = Estado(imc)
        Estado(imc)
    }
    else {

        document.getElementById("imc").value = "Ingrese datos correctos"
        document.getElementById("estado").value = "Ingrese datos correctos"
    }

}


// IMC
function Imc(altura, peso) {

    altura = altura / 100
    imc = peso / (altura * altura)
    document.getElementById("imc").value = imc.toFixed(2)

    return imc

}


//Estado

function Estado(imc) {
    if (imc < 15) {
        document.getElementById("estado").value = "Delgadez muy Severa"
        document.getElementById("estado").style.color="red"
    }
    if (imc >= 15 && imc <= 15.9) {
        document.getElementById("estado").value = "Delgadez Severa"
        document.getElementById("estado").style.color="red"
    }
    if (imc >= 16 && imc <= 18.4) {
        document.getElementById("estado").value = "Delgadez"
        document.getElementById("estado").style.color="yellow"
    }
    if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("estado").value = "Peso Correcto"
        document.getElementById("estado").style.color="green"
    }
    if (imc >= 25 && imc <= 29.9) {
        document.getElementById("estado").value = "Sobrepeso"
        document.getElementById("estado").style.color="yellow"
    }
    if (imc >= 30 && imc <= 34.9) {
        document.getElementById("estado").value = "Obesidad Moderada"
        document.getElementById("estado").style.color="red"
    }
    if (imc >= 35 && imc <= 39.9) {
        document.getElementById("estado").value = "Obesidad Severa"
        document.getElementById("estado").style.color="red"
    }
    if (imc >= 40) {
        document.getElementById("estado").value = "Obesidad Mórbida"
        document.getElementById("estado").style.color="red"
    }
}