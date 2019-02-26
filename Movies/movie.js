class Movie{
    constructor(title, genre, year){
        this._title = title;
        this._genre = genre;
        this._year = year;
    }
    get title(){
        return this._title;
    }

    set title(newTitle){

        if (typeof newTitle === "string") {
            this._title = newTitle;
        }
    }

    get genre(){
        return this._genre;
    }

    set genre(newGenre){
        this._genre = newGenre;
    }

    get year(){
        return this._year;
    }

    set year(newYear){
        this._year = newYear;
    }

    static createActionMovie(title, year){
        return new Movie(title, Movie.genre.ACTION, year);
    }
}

Movie.genre = {
    ACTION: "action",
    ACTION_COMEDY: "action comedy",
    COMEDY: "comedy",
    CRIME: "crime",
    DRAMA: "drama"
};


module.exports = Movie;