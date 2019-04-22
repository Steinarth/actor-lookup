let charAPI = "https://api.themoviedb.org/3/search/person";
// let moviesCharPlayedIn = "https://api.themoviedb.org/3/person/";
let API_KEY = "?api_key=5a3bf778a84cd3ee3cbdef3910fc1cfc";
let imageUrl = "https://image.tmdb.org/t/p/w500/";

const getActor = (text) => {
    let API = charAPI + API_KEY + "&query=" + text.replace(' ','+')
    console.log(API);;
    return fetch(API)
        .then(response => response.json())
        .then(data => {
            if(!data) { return []; }
            // return first character
            return data.results[0];
        });
};

const getActorDetails = (id) => {
    console.log(id);
    let API = `https://api.themoviedb.org/3/person/${id}?api_key=5a3bf778a84cd3ee3cbdef3910fc1cfc&language=en-US`

    console.log(API);
    return fetch(API)
        .then(response => response.json())
        .then(data => {
            if(!data) { return []; }

            data.profile_path = imageUrl + data.profile_path;
            return data;
        });
};

const getMoviesByActor = (id) => {
    let API = `http://api.themoviedb.org/3/person/${id}/combined_credits?api_key=5a3bf778a84cd3ee3cbdef3910fc1cfc`;

    return fetch(API)
        .then(response => response.json())
        .then(data => {
            if(! data) { return []; }

            data.cast.map((movie) => {
                if(movie.poster_path != null) {
                    movie.poster_path = imageUrl + movie.poster_path
                }
            });

            return data.cast;
            // console.log('movieDATAA',data);
        });

};


module.exports = {
    getActor,
    getActorDetails,
    getMoviesByActor
};
