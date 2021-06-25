fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/") // Endpoint
.then(function(response){
    return response.json(); 
})
.then(function(data){ // Scope local
    
    let cancionesSemanales = data.tracks.data
    let albumsSemanales = data.albums.data
    let artistasSemanales = data.artists.data

    let cancion = document.querySelector(".tracks") // DOM representa al HTML cargado en el navegador
    let album = document.querySelector(".albums")
    let artista = document.querySelector(".artists")

    for(let i=0; i < 10; i++){ // Bucles (for)
        cancion.innerHTML += `<nav class="todosCancion"><h3><a href="detail-track.html?id=${cancionesSemanales[i].id}">${cancionesSemanales[i].title}</a></h3><nav><a href="detail-track.html?id=${cancionesSemanales[i].id}"><img src="${cancionesSemanales[i].album.cover_big}"alt ="${cancionesSemanales[i].title}"></a></nav> <p>Cancion del album <a href ="detail-album.html?id=${cancionesSemanales[i].album.id}"> ${cancionesSemanales[i].album.title} </a> de <a href="detail-artist.html?id=${cancionesSemanales[i].artist.id}"> ${cancionesSemanales[i].artist.name}</a> </p> </nav>`
        // InnerHTML para retornar la estructura de .tracks
    }

    for(let i=0; i < 10; i++){
        album.innerHTML += `<nav class="todosAlbum"><h3><a href="detail-album.html?id=${albumsSemanales[i].id}">${albumsSemanales[i].title} </a> </h3><nav><a href="detail-album.html?id=${albumsSemanales[i].id}"><img src="${ albumsSemanales[i].cover_big}"alt ="${albumsSemanales[i].title} de ${albumsSemanales[i].artist.name}"> </a> </nav> <p> Album de <a href="detail-artist.html?id=${albumsSemanales[i].artist.id}"> ${albumsSemanales[i].artist.name} </a> </p>`
    }
   

    for(let i=0; i < 10; i++){
        artista.innerHTML += `<nav class="todosArtista"> <h3> <a href="detail-artist.html?id=${artistasSemanales[i].id}">${artistasSemanales[i].name}</a> </h3><nav class="carta"><a href="detail-artist.html?id=${artistasSemanales[i].id}"><img class="img" src="${artistasSemanales[i].picture_big}"alt ="${artistasSemanales[i].name}"> </a> </nav> </nav> </nav>`
    }
})
.catch(function(error){
    console.log(error);
})






let form = document.querySelector('form') 
let buscar = document.querySelector('[name=buscar]') 

form.addEventListener('submit', function(e){ // Detecto el evento
    e.preventDefault() 
    if(buscar.value === ''){ 
        alert('El buscador no puede estar vacio')
    }else if (buscar.value.length < 3){
        alert('El termino buscado debe tener al menos 3 caracteres')
    }else {
        form.submit()
    }
})