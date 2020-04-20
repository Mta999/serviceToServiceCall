//@ts-ignore

import * as express from "express";
import * as bodyParser from "body-parser"
import bookRouter  from "./routes/bookApp"

// Our Express APP config
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use("/",bookRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`) );

