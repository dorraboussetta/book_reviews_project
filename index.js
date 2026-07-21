import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "books",
  password: "pg6167959703",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let books_list = [];

async function checkBooks(){
  const result = await db.query("SELECT * FROM books_list;"); 

  return result.rows;
}
app.get("/", async(req, res) => {
    books_list = await checkBooks();
    res.render("index.ejs", {books: books_list});
});

app.get("/faqs", (req, res) => {
    res.render("faqs.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.post("/sort", async (req,res) =>{
  let result;
  if (req.body.sort == 'newest' ) {
    result = await db.query("SELECT * FROM books_list ORDER BY date DESC;"); 
  }else if (req.body.sort == 'best' ){
    result = await db.query("SELECT * FROM books_list ORDER BY rating DESC;"); 
  }else if (req.body.sort == 'title' ){
    result = await db.query("SELECT * FROM books_list ORDER BY title ASC;"); 
  }

  res.render("index.ejs", {books: result.rows});
});

app.get("/book-info", async (req,res) =>{
  const result = await db.query("SELECT * FROM books_list WHERE id=$1", [req.query.id]); 
  console.log(result.rows);
  res.render("book-info.ejs", {book: result.rows[0]});
})

app.post("/search", async (req,res) =>{
  const result = await db.query("SELECT * FROM books_list WHERE LOWER(title) LIKE '%' || $1 || '%';", [req.body.keyword.toLowerCase()]); 
  res.render("search-results.ejs", {books: result.rows});
})



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});