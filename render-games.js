export function renderMarioGames(games) {

    const gameEl = document.createElement('section');

    gameEl.classList.add('games-list');

    for (let game of games) {
        const gameContainer = document.createElement('div');
        gameContainer.classList.add('game-card');
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

        gameContainer.append(gameTitle);
        gameContainer.append(gameImage);
        gameContainer.append(gameDirector);
        gameContainer.append(gameComposer);
        gameContainer.append(gameYear);

        gameEl.append(gameContainer);
    }

    return gameEl;

}
