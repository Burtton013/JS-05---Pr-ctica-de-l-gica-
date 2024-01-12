function configuracionAlarma() {
    const segundos = parseInt(prompt("Ingrese la cantidad de segundos para su alarma:"));

    if (!isNaN(segundos) && segundos > 0) {
        setTimeout(() => {
            console.log(`Cantidad de segundos en tu alarma ${segundos}.`);
        }, segundos * 1000);
    } else {
        alert("Error, ingrese nuevamente los segundos.");
    }
}
configuracionAlarma();