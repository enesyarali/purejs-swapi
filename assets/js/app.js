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
        /* if() {
            // Hata mesajı
        } else {
            
        } */
        ui.showPeople(response.people.results);
        ui.showFilm(response.film.results);
        loadingMessage[0].remove();
        loadingMessage[1].remove();
    })
    .catch(err => console.log(err));    
}