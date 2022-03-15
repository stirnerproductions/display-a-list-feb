export function renderMarioGames(games) {

    const listEl = document.createElement('div');

    for (let games of games) {
        const aGame = document.createElement('p');

        //aGame.textContent = saying;

        listEl.append(aGame);
    }

    return listEl;

}
