# Wk-3-code-challenge

Project Overview: Movie Website
This is a JavaScript project that fetches movie data from a backend server (running on http://localhost:3000/films) and displays it on a webpage. Users can browse movies, view descriptions, and potentially initiate a process to purchase movie tickets.

Functionality
-Fetches movie data from a backend server.
-Displays a list of movies with titles.
-Clicking a movie title displays a detailed description of that movie, including title, description, showtime, tickets sold, and a poster image.
Clicking the "Buy Ticket" button (implementation not shown) likely initiates a payment process.

Dependencies
This project depends on an HTML file with the necessary elements referenced by the JavaScript code (IDs and classes). It also depends on a backend server that provides the movie data at the specified URL (http://localhost:3000/films).

Running the Project
Ensure you have a backend server running at http://localhost:3000 that provides the movie data in the expected format (JSON with properties like title, description, showtime, tickets_sold, and poster).
Open the HTML file associated with this JavaScript code in a web browser.

Future Considerations
Implement the functionality for purchasing a ticket (likely would involve sending data to the backend server).
Style the webpage for a better user experience.
Add error handling for cases where the movie data cannot be fetched or the "Buy Ticket" button click is not handled.







