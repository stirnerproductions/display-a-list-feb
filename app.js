// import functions and grab DOM elements
import { renderSayingsList } from './render-strings.js';
import { sayingsList } from './array-sayings.js';


const firstList = document.querySelector(['.first-list']);
// initialize global state


const aList = renderSayingsList(sayingsList);

firstList.append(aList);


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
