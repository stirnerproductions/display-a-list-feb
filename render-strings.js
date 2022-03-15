export function renderSayingsList(sayings) {

    const listEl = document.createElement('div');

    for (let saying of sayings) {
        const aSaying = document.createElement('p');

        aSaying.textContent = saying;

        listEl.append(aSaying);
    }

    return listEl;

}















