let albumes = document.querySelector('.chart');
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`)
.then(response => {
    return response.json();
})
.then(chart => {
    console.log(chart);
})
.catch(error =>{
    console.log('El error fue: ' + error);
})