class UI {
    constructor(){
        this.filmList = document.getElementById("film");
        this.peopleList = document.getElementById("people");
    }

    showPeople(people) {
        const peoples = people;
        for (const i in peoples) {
            this.peopleList.innerHTML += `
                <li>
                    Name: ${peoples[i].name}<br>
                    Gender: ${peoples[i].gender}<br>
                    Birthday: ${peoples[i].birth_year}<br>
                    Eye Color: ${peoples[i].eye_color}<br>
                    Hair Color: ${peoples[i].hair_color}<br>
                    Height: ${peoples[i].height}<br>
                    Skin Color: ${peoples[i].skin_color}<br>
                </li>
            `;
        }
    }


    showFilm(film) {
        const films = film;
        for (const i in films) {
            this.filmList.innerHTML += `
                <li>
                    Name: ${films[i].title}<br>
                    Director: ${films[i].director}<br>
                    Producer: ${films[i].producer}<br>
                    Release Date: ${films[i].release_date}
                </li>
            `;
        }
    }


}