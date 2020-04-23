import { Request, Response } from 'express';
import { Author } from '../models';
import { reduce, map } from 'lodash';
import { NextFunction } from 'connect';
import axios from 'axios';

// const axios = require('axios');


// We'll start with allAuthors which will return
// every we have from our database

export const allAuthors = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const model = await Author();
        const authors = await model.find();
        const books = await axios.get('http://localhost:3000/books');

        const bookData = books.data;

        // const results = [];
        const results = reduce(authors, (acc, el) => {
            map(bookData, (book) => {
                if (book.id === el.id) {
                    acc.push({...el, bookName: book.bookName});
                    return acc;
                }
            });
            return acc;
         }, []);

        // authors.map((author) => {
        //     bookData.map((book) => {
        //         if (author.id === book.id) {
        //             author = {
        //                 id : author.id,
        //                 authorName : author.authorName ,
        //                 bookName: book.bookName
        //             };
        //             results.push(author);
        //         }
        //     });
        // });
        res.json(results);
    } catch (error) {
        next(error);

    }

};

export const getAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const model = await Author();
        const author = await model.findOne({
            id,
        });
        res.json(author);
    } catch (error) {
        next(error);
    }
};

export const addAuthor = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    // console.log(req.body)
    try {
        const model = await Author();
        const author = await model.create(
            {
                name: req.body.name,
                id: req.body.id
            });
        console.log('lava');
        res.json(author);
    } catch (error) {
        next(error);
        console.log('vata');

    }
};






    // };
    // export const addAuthor = await Author.create(ste kgres inch es uzum create anes)
    // res.send(userData)

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
    //     let author = new Author();
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
    // }
