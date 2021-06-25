let busqueda = new URLSearchParams(location.search)
let buscar = busqueda.get('buscar') // Lo tipeado por el usuario
let resultados = document.querySelector('.resultadosBusqueda')
let tituloBusqueda = document.querySelector('.tituloBusqueda')

tituloBusqueda.innerHTML += buscar 
tituloBusqueda.classList.add('tituloBusqueda')


// Formulario
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
.then(function(respuesta){ 
   return respuesta.json()
})
.then(function(dataBusqueda){
   for(i=0; i<dataBusqueda.data.length; i++){
      resultados.innerHTML+= `<article class="info"> 
                        <p class="titulosCanciones"><a href="detail-track.html?id=${dataBusqueda.data[i].id}"> ${dataBusqueda.data[i].title}</a></p>
               </article>`
   } 
   if(dataBusqueda.data.length == 0){ 
      alert('La busqueda no trajo resultados') 
   }
   
})
.catch(function(error){
   console.log(error);
})


