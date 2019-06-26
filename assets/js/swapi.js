class Swapi {
    async getSwapiData(films, people) {
        const responsePeople = await fetch('https://swapi.co/api/people/');
        const responseFilm = await fetch('https://swapi.co/api/films/');

        const peopleData = await responsePeople.json();
        const filmData = await responseFilm.json();

        console.log(filmData)

        return {
            people: peopleData,
            film: filmData,
        }
    }
}