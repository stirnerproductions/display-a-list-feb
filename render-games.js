export function renderMarioGames(game) {

    const gameEl = document.createElement('section');

    gameEl.classList.add('games-list');

    
    const gameTitle = document.createElement('h3');
    const gameImage = document.createElement('img');
    const gameDirector = document.createElement('p');
    const gameComposer = document.createElement('p');
    const gameYear = document.createElement('p');
        

    gameTitle.textContent = game.name;
    gameImage.src = `./assets/${game.name}.JPG`;
    gameDirector.innerHTML = `Director(s): ${game.director}`;
    gameComposer.textContent = `Composer: ${game.composer}`;
    gameYear.textContent = `Published in NA: ${game.year}`;

    gameEl.append(gameTitle);
    gameEl.append(gameImage);
    gameEl.append(gameDirector);
    gameEl.append(gameComposer);
    gameEl.append(gameYear);

    return gameEl;

}
