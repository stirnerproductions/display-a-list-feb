export function renderAlbums(album) {
    const albumEl = document.createElement('section');

    albumEl.classList.add('albums-list');

    const albumArtist = document.createElement('h3');
    const albumImage = document.createElement('img');
    const albumAlbum = document.createElement('p');
    const albumTracks = document.createElement('ol');

    albumArtist.textContent = `Artist: ${album.artist}`;
    albumImage.src = `./assets/${album.artist}.JPG`;
    albumAlbum.textContent = `Album: ${album.album}`;

    for (let track of album.tracks) {
        const trackEl = document.createElement('li');
        trackEl.textContent = track;

        albumTracks.append(trackEl);
    }
    
    albumEl.append(albumArtist, albumImage, albumAlbum, albumTracks);

    return albumEl;

}