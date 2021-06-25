let miPlaylist = document.querySelector(".miPlaylist")
let info = document.querySelector('.info') 

let objetoId = new URLSearchParams (location.search); // URLSearchParams: pasa la info de cadena de texto a un objeto // location.search: trae la info del query string
let id = objetoId.get('id');


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`) 
.then(respuesta => {
    return respuesta.json() // Devuelve como objeto literal
})
.then(track => { // Manipulación de la API
    info.innerHTML +=  `<nav><img src="${track.album.cover_xl}"></nav> <h2><a href="detail-track.html">${track.title}</a></h2> <h2><a href="detail-artist.html">${track.artist.name}</a></h2> <p class="album"><a href="detail-album.html">${track.album.title}</a></p> <nav class="play"><iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${track.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe></nav>` 
}) 
.catch(function(error){ 
    console.log(error)
})




// localStorage para almacenar la info en el navegador del usuario

//1. Capturar el elemento
let agregarEliminar = document.getElementById('agregarEliminar');

//2. Crear un array para poder guardar varios elementos dentro de la variable
let favoritos = [];

//3. Traer los datos del localStorage
let traerFavoritos = localStorage.getItem('favoritos'); 

if(traerFavoritos != null){
    favoritos = JSON.parse(traerFavoritos);  // Cambio los datos a array para poder recorrerlo
}

//4. Verificar si el id esta o no en el array
if(favoritos.includes(id)){ // .includes: true o un false
    agregarEliminar.innerHTML = 'Eliminar de mi playlist'; 
}

//5.- Controlar el evento sobre el elemento capturado
agregarEliminar.addEventListener('click', function(e){
    e.preventDefault();
    if(favoritos.includes(id)){ // Click: se agrega el id
        let posicionFavoritos = favoritos.indexOf(id); 
        favoritos.splice(posicionFavoritos,1); 
        agregarEliminar.innerHTML = 'Agregar a mi playlist'; // Opción de agregar devuelta
    }else{
        favoritos.push(id);  // Push: agregar
        agregarEliminar.innerHTML = 'Eliminar de mi playlist' 
    }

//6.  Tenemos que guardar una cadena de texto en localStorage
    let cadenaTextofavoritos = JSON.stringify(favoritos); 
    localStorage.setItem('favoritos',cadenaTextofavoritos)
})