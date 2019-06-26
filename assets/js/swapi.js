class Swapi {
    async getSwapiData() {
        const responsePeople = await fetch('https://swapi.co/api/people');
        const responseFilm = await fetch('https://swapi.co/api/films');

        const peopleData = await responsePeople.json();
        const filmData = await responseFilm.json();
        return {
            people: peopleData,
            film: filmData,
        }
    }
}
