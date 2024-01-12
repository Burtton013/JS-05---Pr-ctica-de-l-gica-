
function informacionUsuario() {
    const nombreUsuario = prompt("Ingresa tu nombre de usuario:");
    const edad = prompt("Ingresa tu edad:");
    const peliculaFavorita = prompt("Ingresa las peliculas que mas te gusten, porfavor separar cada una con una coma.")
        .split(',')
        .map(peli => peli.trim());
    return {
        Usuario: nombreUsuario,
        Edad: edad,
        Pelicualafav: peliculaFavorita
    };
}
function mostrarDatos(usuarioInfo) {
    console.log(`Usuario: ${usuarioInfo.username}`);
    console.log(`Edad: ${usuarioInfo.age}`);
    console.log("Peliculafav:");
    usuarioInfo.favoriteMovies.forEach(pelicula => {
        console.log(` ${pelicula} es de las mejores pelis.`);
    });
}
const usuarioInfo = informacionUsuario();
mostrarDatos(usuarioInfo);


