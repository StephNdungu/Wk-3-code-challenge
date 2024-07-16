const list = document.getElementById("films")
const image = document.getElementById('movieDesc')
const buyTicketButton = document.querySelector('.buyTicketButton')
buyTicketButton.addEventListener('click', () => {
  //initiates payment process
movieDesc (film.id)

})
  
const url = 'http://localhost:3000/films'

function fetchData() { 
  fetch (url)
.then(response => response.json())
.then(films => 
  films.map(film => {
    const movieTitles = document.createElement('li')
    movieTitles.addEventListener('click' , ()=> filmDesc(film.id))
    movieTitles.innerText = film.title
    list.appendChild(movieTitles)
   
  }))
}
fetchData()
function filmDesc(filmId) {
 const movieUrl = `${url}/${filmId}` 
 fetch (movieUrl)

.then((res) => res.json())
			.then((movie) => {
        console.log(5);

				const description = document.querySelector("#movieDesc");
				description.innerHTML = `
            <h1>${movie.title}</h1>
			<div>
            <p>${movie.description}</p>
			</div>
			<h1> Movie Starts at : ${movie.showtime}</h1>
			<h2>Tickets Sold: ${movie.tickets_sold}</h2>
            <img src="${movie.poster}" alt="${movie.title}">
`;
			});
	}

// function fetchFirstMovie() {
//   fetch ("http://localhost:3000/films/1")
// .then(response => response.json())
// .then(film => {

//  const title2 = document.createElement('h2')
//     title2.innerText = film.title
//     image.appendChild(title2)
//     const images = document.createElement('img')
//     images.src = film.poster
//     image.appendChild(images)

//     const runTime = document.createElement('p')
//     runTime.textContent = film.runtime
//     image.appendChild(runTime)

//     const capacity = document.createElement('p')
//     capacity.textContent = film.capacity
//     image.appendChild(capacity)

//     const showTime = document.createElement('p')
//     showTime.textContent = film.showtime 
//     image.appendChild(showTime)

//     const ticketsSold = document.getElement('p')
//     ticketsSold.textContent = film.ticketsSold
//     image.appendChild(ticketsSold)

//     const description = document.createElement
   
// }
// )
// }
// fetchFirstMovie()
