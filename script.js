const list = document.getElementById("films")
const image = document.getElementById('movieDesc')
fetch ("http://localhost:3000/films")
.then(response => response.json())
.then(films => 
  films.map(film => {
    const movieTitles = document.createElement('li')
    movieTitles.innerText = film.title
    list.appendChild(movieTitles)
    const title2 = document.createElement('h1')
    title2.innerText = film.title
    image.appendChild(title2)
    const images = document.createElement('img')
    images.src = film.poster
    image.appendChild(images)
  
  }))
