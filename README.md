# Books I've Read - Book Reviews Project

## About the Project

Books I've Read is a personal book reviews website built with Node.js, Express.js, EJS, PostgreSQL, Bootstrap, and custom CSS.

The website displays books I have read, along with my personal rating, reading date, short notes, author information, book cover, and a link to more information about each book.

Users can sort the books by newest, best rating, or title. They can also search for books by title and open a full book information page to read a longer reflection.

## Project Type

This is a backend, database, and EJS practice project.

The goal of this project was to practice connecting an Express.js application to a PostgreSQL database, retrieving data with SQL queries, rendering dynamic pages with EJS, and building a multi-page website with reusable layout sections.

## Technologies and Tools Used

### Core Technologies

- Node.js
- Express.js
- EJS
- JavaScript
- HTML
- CSS
- PostgreSQL

### Styling

- Bootstrap
- Custom CSS

### Packages and Middleware

- pg
- body-parser
- express
- ejs

## Features

- Homepage displaying all books from the PostgreSQL database
- Book cover, title, author, rating, reading date, and short personal note
- Full book information page with a longer personal reflection
- External links for each book
- Sort books by newest date
- Sort books by best rating
- Sort books alphabetically by title
- Search books by title
- Search results page showing the number of matches
- About page
- FAQ page
- Contact page
- Reusable EJS header and footer partials
- Dynamic footer year


## What I Practiced

- Setting up an Express.js server
- Connecting a Node.js app to PostgreSQL
- Using the `pg` package to query a database
- Writing SQL `SELECT` queries
- Sorting database results with `ORDER BY`
- Searching text with `LOWER()` and `LIKE`
- Using parameterized SQL queries
- Rendering EJS templates with database data
- Passing data from Express routes to EJS views
- Looping through database results in EJS
- Using query parameters with `req.query`
- Using hidden form inputs to pass book IDs
- Creating reusable EJS partials
- Handling form submissions with body-parser
- Creating POST routes for sorting and searching
- Building a multi-page website
- Combining Bootstrap with custom CSS

## How It Works

The project connects to a local PostgreSQL database named `books`.

The homepage route retrieves all books from the `books_list` table and sends them to `index.ejs`.

Each book is rendered dynamically on the homepage using an EJS loop. The homepage displays the book cover, title, author, rating, reading date, and a short note.

Each book also has a `Read More` button. When clicked, the book ID is sent to the `/book-info` route. The server uses that ID to find the selected book in the database and renders a separate page with the longer book reflection.

The sort feature uses a form that sends the selected sorting option to the `/sort` route. Based on the selected option, the server runs a different SQL query:

- newest books first
- highest-rated books first
- titles in alphabetical order

The search feature sends the user's keyword to the `/search` route. The server searches for matching book titles in the database and renders the results on a separate search results page.

## Database

This project uses a PostgreSQL database.

The application expects a database named:

```text
books
```

And a table named:

```text
books_list
```

The table stores book information such as:

- id
- title
- author
- rating
- date read
- short note
- long note
- book cover link
- external book link

## Important Note

This project uses a local PostgreSQL database, so it cannot be hosted directly with GitHub Pages.

For now, the project can be run locally.

## Installation

Install the project dependencies:

```bash
npm install
```

## Running the Project

Make sure PostgreSQL is running and that the database and table are already created.

Then run the server with Node:

```bash
node index.js
```

Or run it with Nodemon:

```bash
nodemon index.js
```

The project runs locally on port `3000`.

Open it in your browser at:

```text
http://localhost:3000
```

## Project Structure

```text
project-folder/
├── index.js
├── package.json
├── package-lock.json
├── public/
│   ├── style.css
│   └── assets/
│       └── profile-image.PNG
└── views/
    ├── index.ejs
    ├── book-info.ejs
    ├── search-results.ejs
    ├── about.ejs
    ├── contact.ejs
    ├── faqs.ejs
    └── partials/
        ├── header.ejs
        └── footer.ejs
```

## Status

Completed as a backend, PostgreSQL, and EJS practice project.
