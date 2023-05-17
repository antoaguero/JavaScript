alert ("¡El mes que viene aumenta tu alquiler! Calcula aquí el nuevo precio ");


function precioactual () {
    let precio = parseInt (prompt("Ingrese el precio de su alquiler actual"))
    while( precio <= 0) {
        precio = parseInt (prompt("¡Tan barato no puede ser! Volve a ingresar el precio:"))
    }
    return precio
}
 
function inflaciontotal () {
    let inflacion = parseInt(prompt("Ingrese la infacíon de los ultimos 12 meses"))
    while( inflacion <= 0) {
        inflacion = parseInt (prompt("¡En Argentina hay mucha más inflación anual! Volve a ingresar la inflación:"))
    return inflacion
}
}
function calcularalquiler (precio, inflacion) {
    if (precio && inflacion) {
        const calculo = (((inflacion + 100)* precio)/100)
        return calculo 
    }
    return "Te falto ingresar el valor del alquiler o el de la inflación"
}
    

const precio = precioactual()
const inflacion = inflaciontotal()
const valoralquiler = calcularalquiler(precio , inflacion)
alert ("El nuevo valor del alquiler es de $" + valoralquiler)
