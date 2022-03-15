// import functions and grab DOM elements
import { renderSayingsList } from './render-strings.js';
import { sayingsList } from './array-sayings.js';
import { renderMarioGames } from './render-games.js';
import { gamesList } from './array-games.js';
import { renderMovies } from './render-movies.js';
import { moviesList } from './array-movies.js';



const firstList = document.querySelector('.first-list');
// initialize global state


//const aList = renderSayingsList(sayingsList);

for (let saying of sayingsList) {
    const aSaying = renderSayingsList(saying);

    firstList.append(aSaying);
}


// initialize global state

const gameList = document.querySelector('.game-list');

for (let game of gamesList) {
    const aGame = renderMarioGames(game);

    gameList.append(aGame);
}

//firstList.append(games);

const movies = renderMovies(moviesList);

firstList.append(movies);


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
