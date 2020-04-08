import { connect, model, Schema } from "mongoose";

// const uri: string = "mongodb://localhost:27017/books";

const mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017';
const database = process.env.MONGODB_DATABASE_BOOKS || 'books';

const uri: string = [mongoUrl, database].join("/")


export const BookSchema = new Schema({
    name: {
        type: Array
    },
    authorId: Number
});


export const Book = async () => {
    await connect(uri, (err: any) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("Successfully Connected!");
        }
    });
    const Book = model("Book", BookSchema, "Book");
    return Book
}

