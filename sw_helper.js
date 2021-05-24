//API star wars
const apiEndpoints= {
  people: "http://swapi.dev/api/people/",
  planets: "http://swapi.dev/api/planets/",
  films: "http://swapi.dev/api/films/",
  species: "http://swapi.dev/api/species/",
  vehicles: "http://swapi.dev/api/vehicles/",
  starships: "http://swapi.dev/api/starships/",
};

//with picture, people -> characters
//if not picture - return placeholder
const visualApiEndpoints = {
  people: "https://starwars-visualguide.com/assets/img/characters/:id",
  planets: "https://starwars-visualguide.com/assets/img/planets/:id",
  films: "https://starwars-visualguide.com/assets/img/films/:id",
  species: "https://starwars-visualguide.com/img/species/:id",
  vehicles: "https://starwars-visualguide.com/assets/img/vehicles/:id",
  starships: "https://starwars-visualguide.com/assets/img/starships/:id",
  placeholder:
    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg",
};
