import express, { Request, Response } from "express";
import * as bodyParser from "body-parser"

import {allBooks,getBook,addBook} from "./bookController";


// Our Express APP config
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
// app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());

// API Endpoints
app.get("/", (req: Request, res: Response) => res.send("hi"))

// API Endpoints

// ----- Books ----- //

app.get("/books", allBooks);
app.get("/book/:id", getBook);
app.post("/book", addBook);
// app.put("/book/:id", bookController.updateBook);
// app.delete("/book/:id", bookController.deleteBook);



app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`) );

