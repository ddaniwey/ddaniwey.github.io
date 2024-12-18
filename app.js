const URL = 'https://ddaniwey.github.io/movies-250.json';
let peliculas;

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

    // 5. Crear actor
    const nuevoActor = document.createElement('p');
    nuevoActor.setAttribute('class', 'actores');
    nuevoActor.innerHTML = `Actores: ${pelicula.Actors}`;

    nuevaCard.appendChild(nuevoActor);
    // Unir todo al MAIN
    const main = document.querySelector('#mainPeliculas');
    main.appendChild(nuevaCard);
}

function processMovie(data){
    peliculas = data.movies;

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

function clearCards(){
  let cartas =  document.querySelectorAll(".card").forEach(carta=>carta.remove());//Elegante
    console.log(cartas);
}



doGetRequest(URL, processMovie);