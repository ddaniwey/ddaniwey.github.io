function ocultarPeliculas(){
    document.querySelectorAll(".pelicula").forEach((pelicula) =>{
        pelicula.style.display = 'none';
    });
}


// DRAMA
document.querySelector('#boton-drama').addEventListener("click", ()=>{
    // 1. Ocultar películas
    ocultarPeliculas();
    // 2. Mostrar las películas de su categoría
    document.querySelectorAll(".drama").forEach((pelicula) => {
        pelicula.style.display='block';
    })
})

// COMEDIA
document.querySelector('#boton-comedia').addEventListener("click", ()=>{
    // 1. Ocultar películas
    ocultarPeliculas();
    // 2. Mostrar las películas de su categoría
    document.querySelectorAll(".comedia").forEach((pelicula) => {
        pelicula.style.display='block';
    })
})



// TERROR
document.querySelector('#boton-terror').addEventListener("click", ()=>{
    // 1. Ocultar películas
    ocultarPeliculas();
    // 2. Mostrar las películas de su categoría
    document.querySelectorAll(".terror").forEach((pelicula) => {
        pelicula.style.display='block';
    })
})

// TODAS
    document.querySelector('#boton-todas').addEventListener("click", () =>{
        let peliculas = document.querySelectorAll(".pelicula");
        peliculas.forEach(pelicula => {
            pelicula.style.display = 'block';
        });
    })

// SELECTOR
document.querySelector('#selectGenero').addEventListener("click", () => {
    ocultarPeliculas();
    let selectGenero = document.querySelector('#selectGenero').value;
        switch(selectGenero) {
            case 'todas':
                let todas = document.querySelectorAll(".pelicula");
                            todas.forEach(pelicula => {
                                pelicula.style.display = 'block';
                            });
                break;
                case 'drama':
                    let drama = document.querySelectorAll(".drama");
                            drama.forEach(pelicula => {
                                pelicula.style.display = 'block';
                            });
                    break;
                    case 'comedia':
                        let comedia = document.querySelectorAll(".comedia");
                            comedia.forEach(pelicula => {
                                pelicula.style.display = 'block';
                            });
                        break;
                        case 'terror':
                            let terror = document.querySelectorAll(".terror");
                            terror.forEach(pelicula => {
                                pelicula.style.display = 'block';
                            });
                            break;
                
        }
})