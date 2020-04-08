import { Request, Response } from "express";
import { Author } from "./../author";
import { NextFunction } from "connect";

// We'll start with allAuthors which will return
// every we have from our database

export let allAuthors = async (req: Request, res: Response) => {
    const model = await Author();
    let authors = await model.find((err: any, Authors: any) => {
        if (err) {
            res.send("Error!");
        } else {
            res.send(authors);
        }
    });
};

export let getAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const model = await Author();
        const author = await model.findOne({
            id:req.params.id
        })
        res.json(author) 
    } catch (error) {
        next(error)
    }
};

// export let deleteAuthor = (req: Request, res: Response) => {
//     let author = Author().deleteOne({ _id: req.params.id }, (err: any) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send("Succesfully Deleted Author");
//         }
//     });
// };

// export let updateAuthor = (req: Request, res: Response) => {
//     console.log(req.body);
//     let author = Author.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         (err: any, author: any) => {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.send("Succesfully updated author!");
//             }
//         }
//     );
// };

// export let addAuthor = (req: Request, res: Response) => {
//     var author = new Author(req.body);
//     console.log(req.body);
//     console.log(author);
//     author.save((err: any) => {
//         if (err) {
//             console.log(err)
//             res.send(err);
//         } else {
//             console.log(author);
//             res.send(author);
//         }
//     });
// };