//@ts-ignore
import * as express from "express";
import * as bodyParser from "body-parser"

import  {getAuthor, allAuthors, addAuthor } from "./authorController";

// Our Express APP config
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
// app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());

// API Endpoints
// app.get("/", (req: Request, res: Response) => res.send("hi"))

// API Endpoints

// ----- Authors ----- //

app.get("/authors", allAuthors);
app.get("/author/:id", getAuthor);
app.post("/author", addAuthor);
// app.put("/author/:id", authorController.updateAuthor);
// app.delete("/author/:id", authorController.deleteAuthor);

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`) );

