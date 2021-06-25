let cancionesFavoritas = localStorage.getItem('favoritos')
let cancionesPlaylist = JSON.parse(cancionesFavoritas)

let infoplaylist = document.querySelector('.infoplaylist')
let tituloplaylist = document.querySelector('.titulo')


if(cancionesPlaylist.lenght === 0){
    tituloplaylist.innerHTML += `<h2>Su playlist no contiene canciones</h2>`
} else{
    for(let i=0 ; i < cancionesPlaylist.length; i++){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancionesPlaylist[i]}`)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(cancionFavorita =>{
         //console.log(track);
         infoplaylist.innerHTML += `<h2 class="tituloCancion"><a href="detail-track.html?id=${cancionFavorita.id}" alt="Cancion">${cancionFavorita.title}</a></h2><img class="img2" src="${cancionFavorita.album.cover_xl}">`
        })

        .catch(error =>{
            console.log(error);
        })}}