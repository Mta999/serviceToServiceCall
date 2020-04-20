//@ts-ignore
import { Router } from "express";

import  {getAuthor, allAuthors, addAuthor } from "../controllers/authorController";


// const app = express();
const router = Router();

router.get("/authors", allAuthors);
router.get("/author/:id", getAuthor);
router.post("/author", addAuthor);
// app.put("/author/:id", authorController.updateAuthor);
// app.delete("/author/:id", authorController.deleteAuthor);

export default router;