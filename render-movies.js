export function renderMovies(movie) {

    const movieEl = document.createElement('section');

   
    movieEl.classList.add('movies-list');

    const movieTitle = document.createElement('h3');
    const movieImage = document.createElement('img');
    const movieDirector = document.createElement('p');
    const movieCast = document.createElement('p');
        

    movieTitle.textContent = movie.movie;
    movieImage.src = `./assets/${movie.movie}.JPG`;
    movieDirector.textContent = `Director: ${movie.director}`;
    movieCast.textContent = `Cast: ${movie.cast.actor1}, ${movie.cast.actor2}, ${movie.cast.actor3} `;
    

    movieEl.append(movieTitle);
    movieEl.append(movieImage);
    movieEl.append(movieDirector);
    movieEl.append(movieCast);

    return movieEl;

}
