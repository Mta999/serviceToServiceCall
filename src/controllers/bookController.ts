import { Request, Response } from 'express';
import { NextFunction } from 'connect';
import { getAllBooks, getOneBook, addTheBook } from '../services';

// We'll start with allBooks which will return
// every we have from our database

export const allBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await getAllBooks();
        res.json(books);
    } catch (error) {
        next(error);
    }
};
export const getBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const book = await getOneBook(id);
        res.json(book);
    } catch (error) {
        next(error);
    }
};

export const addBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorId, name} = req.body;
        const book = await addTheBook(authorId, name);
        res.json(book);
    }catch (error) {
        next(error);
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