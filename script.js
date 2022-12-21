const apiKey = 'api_key=6db5209bfef4a0f6f1ef940f1db989f2'
const imgMovies = `https://image.tmdb.org/t/p/w500/`
const apiLink = `https://api.themoviedb.org/3/movie/popular?${apiKey}&language=pt-br&page=1`
const searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=6db5209bfef4a0f6f1ef940f1db989f2&query='
const movieContainer = document.getElementById('movie__container')
const form = document.getElementById('form')
const search = document.getElementById('search')



getMovies(apiLink)

async function getMovies(url) {
  const resp = await fetch(url)
  const data = await resp.json()

  createMoviesCard(data.results)

}

const createMoviesCard = (movie) => {
  movieContainer.innerHTML = ''

  movie.map(el => {
    const movieEl = document.createElement('div')
    movieEl.classList.add('cards__container')

    const title = el.title
    const vote = el.vote_average
    const poster = el.poster_path
    const details = el.overview
    const release = el.release_date


    const movieInnerHTML = `
      <img src="${imgMovies}${poster}" alt="">
        <div class="cards__info">
          <h2>${title}</h2>
          <img src="./images/star.svg" alt="">
          <p>${vote}</p>
          <h2>Saiba Mais</h2>
          <div class='cards_overview'>
          <h3>Overview</h3>
          <p>${details}</p>
          <h3>Data de lançamento<h3>
          <p>${release}</p>

        </div>
    `
    movieEl.innerHTML = movieInnerHTML

    movieContainer.appendChild(movieEl)
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchEl = search.value

  if (searchEl && searchEl != '') {
    getMovies(searchURL + searchEl)

    search.value = ''

  } else {
    window.location.reload()
  }

})




