const filmList = document.getElementById("films");
const peopleList = document.getElementById("people");
const loadingMessage = document.querySelectorAll(".loading");
const swapi = new Swapi();
const ui = new UI();

eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded", getData);
}
function getData() {
    
    swapi.getSwapiData()
    .then(response => {
        if(response.people.detail === "Not found" || response.film.detail === "Not found") {
            console.warn('HTTP 404 NOT FOUND');
            loadingMessage[0].outerHTML = 'WARNING';
            loadingMessage[1].outerHTML = 'WARNING';
        } else {
            ui.showPeople(response.people.results);
            ui.showFilm(response.film.results);
            loadingMessage[0].remove();
            loadingMessage[1].remove();
        }
    })
    .catch(err => console.log(err));    
}
