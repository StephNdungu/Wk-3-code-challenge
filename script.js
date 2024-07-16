const list = document.getElementById("films")
const image = document.getElementById('movieDesc')
const buyTicketButton = document.querySelector('.buyTicketButton')
buyTicketButton.addEventListener('click', () => {
  //initiates payment process


})

function fetchData() {
  fetch ("http://localhost:3000/films")
.then(response => response.json())
.then(films => 
  films.map(film => {
    const movieTitles = document.createElement('li')
    movieTitles.innerText = film.title
    list.appendChild(movieTitles)
   
  }))
}
fetchData()

function fetchFirstMovie() {
  fetch ("http://localhost:3000/films/1")
.then(response => response.json())
.then(film => {

 const title2 = document.createElement('h1')
    title2.innerText = film.title
    image.appendChild(title2)
    const images = document.createElement('img')
    images.src = film.poster
    image.appendChild(images)
    const runTime = document.createElement('p')
    runTime.innerText = film.runtime
    image.appendChild(runTime)
    const showTime = document.createElement('p')
    showTime.innerHTML = film.showtime 
    image.appendChild(showTime)
}
)
}
fetchFirstMovie()
