console.log("alo")

//Ejerciciio 1: NUMERO MAS ALTO

function encuentraNumeroAlto() {
    let numeroAlto = -Infinity;

    for (let i = 1; i <= 10; i++) {
        const informacionIngresada = parseFloat(prompt(`ingresa un numero ${i}:`));
        if (!isNaN(informacionIngresada)) {
            numeroAlto = Math.max(numeroAlto, informacionIngresada);
        } else {
            alert("Porfavor ingrese un numero valido");
            i--; 
        }
    }
    return numeroAlto;
}
const numeroAlto = encuentraNumeroAlto();
console.log(`El numero mas alto entre los nuemeros que ingreso es: ${numeroAlto}`);
