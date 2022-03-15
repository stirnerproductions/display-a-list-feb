export function renderMarioGames(games) {

    const gameEl = document.createElement('section');

    gameEl.classList.add('games-list');

    for (let game of games) {
        const gameTitle = document.createElement('h2');
        const gameImage = document.createElement('img');
        const gameDirector = document.createElement('p');
        const gameComposer = document.createElement('p');
        const gameYear = document.createElement('p');
        

        gameTitle.textContent = game.name;
        gameImage.src = `./assets/${game.name}.JPG`;
        gameDirector.innerHTML = `<strong>Director(s):</strong> ${game.director}`;
        gameComposer.textContent = `Composer: ${game.composer}`;
        gameYear.textContent = `Published in NA: ${game.year}`;

        gameEl.append(gameTitle);
        gameEl.append(gameImage);
        gameEl.append(gameDirector);
        gameEl.append(gameComposer);
        gameEl.append(gameYear);
    }

    return gameEl;

}
