import express, { Request, Response } from "express";
import * as bodyParser from "body-parser"

// import bookController from "./controllers/bookController";
import  {getAuthor} from "./controllers/authorController";

// Our Express APP config
const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());

// API Endpoints
app.get("/", (req: Request, res: Response) => res.send("hi"))

// API Endpoints

// ----- Books ----- //

// app.get("/books", bookController.allBooks);
// app.get("/book/:id", bookController.getBook);
// app.post("/book", bookController.addBook);
// app.put("/book/:id", bookController.updateBook);
// app.delete("/book/:id", bookController.deleteBook);

// ----- Authors ----- //

// app.get("/authors", authorController.allAuthors);
app.get("/author/:id", getAuthor);
// app.post("/author", authorController.addAuthor);
// app.put("/author/:id", authorController.updateAuthor);
// app.delete("/author/:id", authorController.deleteAuthor);

const server = app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"));
});