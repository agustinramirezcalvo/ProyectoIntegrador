var listaGeneros;  
 
var listaArtistas;
CargarListaGeneros();
 
function CargarListaGeneros()
{
 
    let url ='https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre';
    fetch(url)
    .then(response => response.json())
    .then(function(lista) 
            {
                listaGeneros=lista;
             for(let i=0;i<lista.data.length;i++)

                {
                    agregarElemento(lista.data[i]);

                }

                
            } 
    );
}
  
function CargarListaArtista(idGenero)
{
    document.getElementById("ListaArtistas").innerHTML="";

    listaArtistas=null;
    let url ='https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/'+idGenero+'/artists';
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(function(lista) 
            {                   
                listaArtistas=lista;
                for(let i=0;i<lista.data.length;i++)

                {
                    agregarElementoArtista(lista.data[i]);


                }
            } 
    );
}

 
function agregarElemento(nuevoLi)
{

            var li=document.createElement('li');
            li.id=nuevoLi.id;
            li.innerHTML="<a  onclick=DetalleAlbum("+nuevoLi.id+") id='"+nuevoLi.id+"'>"+nuevoLi.name;
            document.getElementById("Lista").appendChild(li);
            return  true;
}

function agregarElementoArtista(nuevoLi)
{

            var li=document.createElement('li');
            li.id=nuevoLi.id;
            li.innerHTML="<a id='"+nuevoLi.id+"'>"+nuevoLi.name+"</a><img  width='300' height='300' src='"+nuevoLi.picture_small+"'/>";
            debugger;
            document.getElementById("ListaArtistas").appendChild(li);
            return  true;
}
 
function DetalleAlbum(id)
{
    let paginaGenero=document.getElementById("Genero");
    paginaGenero.style.display = "none";
    let paginaDetalleGenero=document.getElementById("DetalleGenero");
    paginaDetalleGenero.style.display = "block";
    
    CargarListaArtista(id)
    
 
      
    
 }
 function Regresar()
 {
    let paginaGenero=document.getElementById("Genero");
    paginaGenero.style.display = "block";
    let paginaDetalleGenero=document.getElementById("DetalleGenero");
    paginaDetalleGenero.style.display = "none";


    

 }