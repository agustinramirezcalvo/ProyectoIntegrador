let cancionesFavoritas = localStorage.getItem('favoritos') 
let cancionesPlaylist = JSON.parse(cancionesFavoritas) 

let infoplaylist = document.querySelector('.infoplaylist')
let tituloplaylist = document.querySelector('.titulo') 


if(cancionesPlaylist.lenght === 0){
    alert('Su playlist no contiene canciones')
} else{
    for(let i=0 ; i<cancionesPlaylist.length; i++){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancionesPlaylist[i]}`)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(cancionFavorita =>{ 
         infoplaylist.innerHTML += `<h2 class="tituloCancion"><a href="detail-track.html?id=${cancionFavorita.id}" alt="Cancion">${cancionFavorita.title}</a></h2><img class="img2" src="${cancionFavorita.album.cover_xl}">`
        })

        .catch(error =>{
            console.log(error);
        })}}