//@ts-ignore
import { Router } from "express";

import  {allBooks,getBook,addBook} from "../controllers/bookController";


// const app = express();
const router = Router();

// ----- Books ----- //

router.get("/books", allBooks);
router.get("/book/:id", getBook);
router.post("/book", addBook);
// router.put("/book/:id", bookController.updateBook);
// router.delete("/book/:id", bookController.deleteBook);


export default router;