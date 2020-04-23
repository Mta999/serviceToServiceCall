//@ts-ignore
import { Router } from 'express';

import  { allBooks, getBook, addBook } from '../controllers/bookController';


// const app = express();
const bookRouter = Router();

// ----- Books ----- //

bookRouter.get('/books', allBooks);
bookRouter.get('/book/:id', getBook);
bookRouter.post('/book', addBook);
// router.put("/book/:id", bookController.updateBook);
// router.delete("/book/:id", bookController.deleteBook);


export {
    bookRouter
};