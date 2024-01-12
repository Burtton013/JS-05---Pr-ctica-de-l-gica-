function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFactorial(n - 1);
    }
}
const userInput = parseInt(prompt("Porfavor ingresa un numero entero que no sea negativo (n >= 0):"));
if (!isNaN(userInput) && userInput >= 0) {
    const resultadoFactorial = calcularFactorial(userInput);
    console.log(`El numero factorial de ${userInput} es: ${resultadoFactorial}`);
} else {
    console.log("Error ingresa un numero entero que no sea negativo.");
}