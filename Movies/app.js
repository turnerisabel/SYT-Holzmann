const Movie = require("./movie");

let forrestGump = new Movie("Forrest Gump", Movie.genre.DRAMA, 1994);
console.log(forrestGump);

console.log(`The ${forrestGump.genre} movie ${forrestGump.movie} was released in ${forrestGump.year}`);