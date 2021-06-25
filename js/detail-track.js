let miPlaylist = document.querySelector(".miPlaylist")
let info = document.querySelector('.info')

let objetoId = new URLSearchParams (location.search); 
let id = objetoId.get('id'); 


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)
.then(respuesta => {
    return respuesta.json()
})
.then(track => {
    //console.log(track)
    info.innerHTML +=  `<nav><img src="${track.album.cover_xl}"></nav> <h2><a href="detail-track.html">${track.title}</a></h2> <h2><a href="detail-artist.html">${track.artist.name}</a></h2> <p class="album"><a href="detail-album.html">${track.album.title}</a></p> <nav class="play"><iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${track.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe></nav>`
})
.catch(function(error){
    console.log(error)
})




//Trabjando con el localStorage
//1.- Capturar el elemento
let agregarEliminar = document.getElementById('agregarEliminar');

//2.- Crear un array
let favoritos = [];

//3.- Traer los datos del localStorage
let traerFavoritos = localStorage.getItem('favoritos');

//console.log(traerFotos);
if(traerFavoritos != null){
    favoritos = JSON.parse(traerFavoritos);   
}

//4.- Verificar si el ( id ) esta o no en el array - Condición
if(favoritos.includes(id)){
    agregarEliminar.innerHTML = 'Eliminar de favoritos';      
}

//5.- Controlar el evento sobre el elemento capturado
agregarEliminar.addEventListener('click', function(e){
    e.preventDefault();
    //Debo programar agregar el id al array de favortitos para finalmente colocarlo dentro del localStorage
    if(favoritos.includes(id)){
        let posicionFavoritos = favoritos.indexOf(id);
        favoritos.splice(posicionFavoritos,1);
        agregarEliminar.innerHTML = 'Agregar a Favoritos';
    }else{
        favoritos.push(id);
        agregarEliminar.innerHTML = 'Eliminar de Favoritos'
    }
    //cargar los datos al localStorage
    let cadenaTextofavoritos = JSON.stringify(favoritos);
    localStorage.setItem('favoritos',cadenaTextofavoritos)
    console.log(localStorage);
})