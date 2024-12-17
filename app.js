const URL = 'https://ddaniwey.github.io/movies-250.json';

function generarFicha(pelicula){
    // 1. Crear carta de película
    const nuevaCard = document.createElement('div');
    nuevaCard.setAttribute('class', 'card');
    
    // 2. Crear titulo de pelicula
    const nuevoTitulo = document.createElement("p");
    nuevoTitulo.setAttribute('class', 'nombrePelicula');
    nuevoTitulo.innerHTML = pelicula.Title;

    nuevaCard.appendChild(nuevoTitulo);

    // 3. Crear imagen
    const nuevaImg = document.createElement('img');
    nuevaImg.setAttribute('class', 'imagenPelicula');
    nuevaImg.setAttribute('src', pelicula.Poster);
    nuevaImg.setAttribute('alt', 'Poster de la película: ' + pelicula.Title);
    nuevaCard.appendChild(nuevaImg);

    // si la imagen no está disponible
    nuevaImg.onerror = () => {
        nuevaImg.setAttribute('src', 'https://bibliotecadigital.magisterio.co/sites/default/files/field/mbooks/Portada%20no%20disponible_12.png');
     
    };

    // 4. Crear genero
    const nuevoGenero = document.createElement('p');
    const nuevoSpan = document.createElement('span');
    nuevoGenero.setAttribute('class', 'genero');
    nuevoGenero.innerHTML = 'Género: ';
    nuevoSpan.innerHTML = pelicula.Genre;
    nuevoGenero.appendChild(nuevoSpan);

    nuevaCard.appendChild(nuevoGenero);

    const main = document.querySelector('#mainPeliculas');
    main.appendChild(nuevaCard);
}

function processMovie(data){
    console.log(data);
    const peliculas = data.movies;

    /*

    // Recorremos con bucle for tradicional
    for(let i = 0; i < peliculas.length; i++){
       // console.log(peliculas[i].Runtime);
    }
    // Recorremos con el método foreach
    peliculas.forEach(pelicula => {
        console.log(pelicula.Title);
    });
    // Recorremos cada película con un bucle for-of
    for(pelicula of peliculas){
        console.log('Director : ' + pelicula.Director);
    }
    
    for(atributo in peliculas[0]){
        console.log(atributo, peliculas[0][atributo]);
    }


    */
   peliculas.forEach(pelicula => {
    generarFicha(pelicula);
   });
}

doGetRequest(URL, processMovie);