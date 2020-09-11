//@ts-ignore
import { Router } from 'express';

import  { getAuthor, allAuthors, addAuthor } from '../controllers';


// const app = express();
const authorRouter = Router();

authorRouter.get('/authors', allAuthors);
authorRouter.get('/author/:id', getAuthor);
authorRouter.post('/author', addAuthor);
// app.put("/author/:id", authorController.updateAuthor);
// app.delete("/author/:id", authorController.deleteAuthor);

export  {
    authorRouter
};