// import functions and grab DOM elements
import { renderSayingsList } from './render-strings.js';
import { sayingsList } from './array-sayings.js';
import { renderMarioGames } from './render-games.js';
import { gamesList } from './array-games.js';


const firstList = document.querySelector('.first-list');
// initialize global state


const aList = renderSayingsList(sayingsList);

firstList.append(aList);


// initialize global state


const games = renderMarioGames(gamesList);

firstList.append(games);


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
