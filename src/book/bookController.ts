import { Request, Response } from "express";
import { Book } from "./book";
import { NextFunction } from "connect";

// We'll start with allBooks which will return
// every we have from our database

export const allBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const model = await Book();
        const books = await model.find();
        res.json(books)
    } catch (error) {
        next(error)
    }
   
};

export const getBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const model = await Book();
        const book = await model.findOne({
           id,
        })
 res.json(book)
    } catch (error) {
        next(error)
    }
};

export const addBook = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    try {
        const model = await Book();
        const book = await model.create(
            {
                name: req.body.name,
                authorId:req.body.authorId
           })
           console.log("lava")
        res.json(book)
    }catch (error) {
        next(error)
        console.log("vata")
    }
};



















// export const deleteBook = async (req: Request, res: Response) => {
//     const model = await Book();
//     const book = await model.deleteOne({ _id: req.params.id }, (err: any) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send("Succesfully Deleted Book");
//         }
//     });
// };

// export const updateBook = async (req: Request, res: Response) => {
//     const model = await Book();
//     console.log(req.body);
//     const book = await model.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         (err: any, book: any) => {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.send("Succesfully updated book!");
//             }
//         }
//     );
// };

// export let addBook = (req: Request, res: Response) => {
//     var book = new Book(req.body);
//     console.log(req.body);
//     console.log(book);
//     book.save((err: any) => {
//         if (err) {
//             console.log(err)
//             res.send(err);
//         } else {
//             console.log(book);
//             res.send(book);
//         }
//     });
// };