let generos = document.querySelector (".generos")
 
fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
.then(respuesta =>{
return respuesta.json()

})
.then(dataGenero =>{
console.log(dataGenero)
for (let i = 0 ; i < dataGenero.data.lengtht; i++) {
    generos.innerHTML +=`<div class="generoIndividual"><div><a href"detail-genres.html?id= ${dataGenero.data}`
    
}
})
.catch(error =>{
    console.log(error)
})