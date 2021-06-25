fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/") // Endpoint
.then(function(response){
    return response.json();
})
.then(function(data){ // Dentro de esta funcion todas las variables declaradas son de scope local
    console.log(data);

    let cancionesSemanales = data.tracks.data // Declaro la variable llamada cancionesSemanales y le asigne el valor data.tracks.data, que es en donde esta la información de las canciones. Lo mismo para las otras variables
    let albumsSemanales = data.albums.data
    let artistasSemanales = data.artists.data

    let cancion = document.querySelector(".tracks") // Atrapar el elemento .tracks para que luego la información que ponga en el bucle for se meta en el nav creado con la clase tracks
    let album = document.querySelector(".albums")
    let artista = document.querySelector(".artists")

    for(let i=0; i<10; i++){ // Bucles (for): i=0 le digo que inicie de la posición 0. i<10 le digo que corte en 10. i++ le digo que cuente de de 1 en 1.
        cancion.innerHTML += `<nav class="todosCancion"><h3><a href="detail-track.html?id=${cancionesSemanales[i].id}">${cancionesSemanales[i].title}</a></h3><nav><a href="detail-track.html?id=${cancionesSemanales[i].id}"><img src="${cancionesSemanales[i].album.cover_big}"alt ="${cancionesSemanales[i].title}"></a></nav> <p>Cancion del album <a href ="detail-album.html?id=${cancionesSemanales[i].album.id}"> ${cancionesSemanales[i].album.title} </a> de <a href="detail-artist.html?id=${cancionesSemanales[i].artist.id}"> ${cancionesSemanales[i].artist.name}</a> </p> </nav>`
        // Como la variable cancion contiene el elemento .tracks, entonces hago cancion.innerHTML para retornar la estructura de .tracks y += para que no remplace los elementos ya escritos en HTML. Luego hago un <nav> e ingreso los datos de la API. 
    }

    for(let i=0; i<10; i++){
        album.innerHTML += `<nav class="todosAlbum"><h3><a href="detail-album.html?id=${albumsSemanales[i].id}">${albumsSemanales[i].title} </a> </h3><nav><a href="detail-album.html?id=${albumsSemanales[i].id}"><img src="${ albumsSemanales[i].cover_big}"alt ="${albumsSemanales[i].title} de ${albumsSemanales[i].artist.name}"> </a> </nav> <p> Album de <a href="detail-artist.html?id=${albumsSemanales[i].artist.id}"> ${albumsSemanales[i].artist.name} </a> </p>`
    }
   

    for(let i=0; i<10; i++){
        artista.innerHTML += `<nav class="todosArtista"> <h3> <a href="detail-artist.html?id=${artistasSemanales[i].id}">${artistasSemanales[i].name}</a> </h3><nav class="carta"><a href="detail-artist.html?id=${artistasSemanales[i].id}"><img class="img" src="${artistasSemanales[i].picture_big}"alt ="${artistasSemanales[i].name}"> </a> </nav> </nav> </nav>`
    }
})
.catch(function(error){
    console.log(error);
})






let form = document.querySelector('form') // Declaro la variable y le asigno el nombre form. Con Queryselector atrape formulario.  
let buscar = document.querySelector('[name=buscar]')

form.addEventListener('submit', function(e){
    e.preventDefault()
    if(buscar.value === ''){
        alert('El buscador no puede estar vacio')
    }else if (buscar.value.length < 3){
        alert('El termino buscado debe tener al menos 3 caracteres')

    }else {
        form.submit()
    }
})