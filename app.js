// import functions and grab DOM elements
import { renderSayingsList } from './render-strings.js';
import { sayingsList } from './array-sayings.js';
import { renderMarioGames } from './render-games.js';
import { gamesList } from './array-games.js';
import { renderMovies } from './render-movies.js';
import { moviesList } from './array-movies.js';
import { renderAlbums } from './render-albums.js';
import { albumsList } from './array-albums.js';



const firstList = document.querySelector('.first-list');
// initialize global state


//const aList = renderSayingsList(sayingsList);

for (let saying of sayingsList) {
    const aSaying = renderSayingsList(saying);

    firstList.append(aSaying);
}


// initialize global state

const gameContainer = document.querySelector('.game-list');

for (let game of gamesList) {
    const aGame = renderMarioGames(game);

    gameContainer.append(aGame);
}

//firstList.append(games);

const movieContainer = document.querySelector('.movie-list');

for (let movie of moviesList) {
    const aMovie = renderMovies(movie);

    movieContainer.append(aMovie);
}

const albumContainer = document.querySelector('.album-list');

for (let album of albumsList) {
    const anAlbum = renderAlbums(album);

    albumContainer.append(anAlbum);
}

