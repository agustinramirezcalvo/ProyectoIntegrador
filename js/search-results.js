// Las variables viven dentro de un bloque de codigo. La funcione, el array y el objeto literal son un bloque de codigo reutilizable
// Los arrays son un tipo de dato que nos permite guardar colecciones de datos. Un array te permite guardar dentro de una variable mas de un valor. |Se declaran con []
// Signo = asigna (guarda) los datos en una variable. 

let busqueda = new URLSearchParams(location.search) /* CAPTURO New URLSearchParams me trae los datos de mejor manera - con location.search mando a buscar lo que typeo el usuario - Aca tengo lo que el usuario typeo */
let buscar = busqueda.get('buscar') /* OBTENGO EL DATO Extraigo lo que el usuario typeo*/
let resultados = document.querySelector('.resultadosBusqueda') // Queryselector atrapa un elemento del DOM (atrape la section class="resultadoBusqueda")
let info = '' // Declaro una variable de tipo string vacia, para luego ingresar datos en ella en la linea 24
let tituloBusqueda = document.querySelector('.tituloBusqueda') // Declaramos la variable, atrapamos el elemento, para luego usar la variable con innerHTML y hacer que lo que el usuario buscó aparezca en la pantalla.

tituloBusqueda.innerHTML += buscar // Llamo a la variable tituloBusqueda // innerHTML retorna la estructura HTML de un elemento y permite modificarla. Me trajo tituloBusqueda que es mi h1 y le agregue lo que el buscador tipeo. 
tituloBusqueda.classList.add('tituloBusqueda') // Con el classList.add agrego la clase al elemento h1. // No entiendo bien su funcionalidad


// Formulario
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`) // Endpoint // ${} Interpolando variables
.then(function(respuesta){ // Esto es una funcion declarada (funtion(response){        })
   return respuesta.json()
})
.then(function(dataBusqueda){ // Esto es una función, dataBusqueda es el parametro y en ella estan los datos. // Todo lo que esta adentro de esta función dataBusqueda tiene scope local, porque esta escrita dentro de la funcion, es decir, que la determinación de valor de esta función solo va a funcionar dentro de esta función
   // let info tiene scope global porque fue declarada fuera de la funcion y luego utilizada dentro
   //console.log(dataBusqueda);

   
   for(i=0; i<dataBusqueda.data.length; i++){ // Bucles (for): Inicio: i=0 le digo que inicie de la posición 0. Concidión: i<dataBusqueda.data.length (.lenght que me muestre toda la longitud del array dataBusqueda)(corte: hasta donde quiero que vaya) el bucle me va a contar todo lo que tenga dataBusqueda.data. .lenght para que se cuente todo lo que muestra el array cuando el usuario busca. Modificador: i++ le digo que cuente de 1 en 1.
   // Dentro de este bucle le indique el codigo que quiero que se ejecute en cada repetición.
   // Uso el bucle for para recorrer el array de la API
       info += `<article class="info"> 
                        <p class="titulosCanciones"><a href="detail-track.html?id=${dataBusqueda.data[i].id}"> ${dataBusqueda.data[i].title}</a></p>
               </article>`
   } // El += se pone para que los objetos no se pisen, es decir, para que haga la impresion de la primera imagen, luego la segunda, luego la tercera, y asi sucesivamente
   // [] Llamo al array y le pido que me traiga todo lo que contiene i. Al ponerle i hago que muestre lo que trae el array dependiendo de lo que busque el usuario (i es el iterador).
   resultados.innerHTML += info
   if(dataBusqueda.data.length == 0){ // if/else son condicionales (permiten al codigo tomar decisiones). Entre los () ponemos una condición a evaluar // == igualdad abstracta
      alert('La busqueda no trajo resultados') // Si la info (dataBusqueda) no trajo resultados, es decir, es igual a 0, salta una alerta 'La busqueda no trajo resultados'.
   }
   
})
.catch(function(error){
   console.log(error);
})


