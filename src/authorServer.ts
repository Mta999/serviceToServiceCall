//@ts-ignore

import * as express from "express";
import * as bodyParser from "body-parser"
import authorRouter  from "./routes/authorApp"

// Our Express APP config
const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use("/",authorRouter)

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`) );

