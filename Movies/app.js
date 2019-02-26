const Movie = require("./movie");

let forrestGump = new Movie("Forrest Gump", Movie.genres.DRAMA, 1994);
console.log(forrestGump);

console.log("The ${forrestGump.genre} movie )