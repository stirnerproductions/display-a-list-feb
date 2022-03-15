export function renderMovies(movies) {

    const movieEl = document.createElement('section');

    movieEl.classList.add('movie-list');

    for (let movie of movies) {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-card');

        const movieTitle = document.createElement('h3');
        const movieImage = document.createElement('img');
        const movieDirector = document.createElement('p');
        const movieCast = document.createElement('p');
        const gameYear = document.createElement('p');
        

        movieTitle.textContent = movie.movie;
        movieImage.src = `./assets/${movie.movie}.JPG`;
        movieDirector.textContent = `Director: ${movie.director}`;
        movieCast.textContent = `Cast: ${movie.cast.actor1}, ${movie.cast.actor2}, ${movie.cast.actor3} `;
    

        movieContainer.append(movieTitle);
        movieContainer.append(movieImage);
        movieContainer.append(movieDirector);
        movieContainer.append(movieCast);
        

        movieEl.append(movieContainer);
    }

    return movieEl;

}
