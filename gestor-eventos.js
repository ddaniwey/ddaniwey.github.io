// ****************
// ************  EVENTO BUSCAR TÍTULO  ***********
document.querySelector('#botonTitulo').addEventListener('click', () => {
    clearCards();

    const textoBusqueda = document.querySelector('#inputTitulo').value;
    console.log('ok');
    console.log(textoBusqueda);
    const peliculasFiltradas = 
    peliculas.filter((pelicula) => 
        pelicula.Title
        .toUpperCase()
        .includes(textoBusqueda.trim().toUpperCase()))

    peliculasFiltradas.forEach(pelicula => {
        generarFicha(pelicula);
        
    });
})

document.querySelector('#botonActor').addEventListener('click', () => {
    clearCards();

    // Filtrado de actor
    const buscar = document.querySelector('#inputActor').value;

    const peliculasFiltradas =
    peliculas.filter((pelicula) => 
        pelicula.Actors.toLowerCase().includes(buscar.toLowerCase()))
    peliculasFiltradas.forEach(pelicula => {
        generarFicha(pelicula);
    })
    
})
