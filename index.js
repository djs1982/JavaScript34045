let nombre = prompt("Ingresa tu nombre")
alert("hola "+ nombre)
let resultadoConsulta = confirm ("Queres cotizar un prestamo personal para empleados en relación de dependencia?")

if(resultadoConsulta == 1){

    alert("vamos a cotizar")

function calcular (){
    let prestamo = prompt("Ingrese Prestamo deseado")
    let cuotas = prompt ("ingrese cantidad de cuotas hasta 36, si ingresa más será calculado 36")
    const interes = 1.5
    const cuotaMaxima = 36
    let resultado = parseFloat(prestamo) * interes / parseFloat(cuotas)
    let resultadoMaxima = parseFloat(prestamo) * interes / parseFloat(cuotaMaxima)
    if(cuotas<36){alert("Resultado de la cuota de su prestamo " + resultado)}
    else{alert("Resultado de la cuota de su prestamo " + resultadoMaxima)}
    let SueldoNeto = prompt("Ingresar sueldo mensual en mano")
    if(SueldoNeto * 13 /2 < resultado) { alert("no puede acceder al prestamo solicite un nuevo valor") }
    else{alert("se puede adjudicar el prestamo")}}

    calcular()

}

else {alert("Gracias por contactarte con nosotros " + nombre)}
