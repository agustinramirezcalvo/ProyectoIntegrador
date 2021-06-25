let queryString = location.search
let datos = new URLSearchParams(queryString)
let idGenre = datos.get('id')
let titulo = document.querySelector('.titulo')
let tituloG = document.querySelector('.tituloG')


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idGenre}`)
.then(respuesta =>{
return respuesta.json()
})
.then(dataG =>{
console.log(dataG)
 titulo.innerHTML += dataG.name 
})

.catch(error =>{
    console.log(error);
})

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idGenre}/artists`)
.then(respuesta =>{
    return respuesta.json()
})
.then(dataA => {
    console.log(dataA)
    let artista = dataA.dataA
    let artistas = document.querySelector('.artistas')
    for (let i = 0; i < 10; i++) {
        artistas.innerHTML += `<a href="detail-artist.html?id=${artista[i].id}"><li class="artista1"><img class>`
        
    }
})