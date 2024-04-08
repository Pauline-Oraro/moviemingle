/*api is an application programming interface that allows two or more computer programs to
    communicate with each other to exchange data, features and functionality.*/



const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6dc9769dfb27228538224889799d94dd&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=6dc9769dfb27228538224889799d94dd&query=";


const main = document.getElementById("main");
const form = document.getElementById("form");
const searchButton = document.getElementById("searchButton");

//getting the movies from the the movies database

const getMovies = async() => {
    const response = await fetch (APIURL);
    const responseData = response.json;
}

//displaying the movies on the webpage
const showMovies = (movies) => {
    main.innerHTML = "";
    movies.forEach((movie) => {
        const {poster_path, title, vote_average, overview} = movie;
        //creating a div element
        const movieElement = document.createElement("div");
        //creating a class for the div element
        movieElement.classList.add("movie");
        movieElement.innerHTML =`
            <img 
                src="${IMGPATH + poster_path}"
                alt="${title}"
                />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>        
            `
    })
}