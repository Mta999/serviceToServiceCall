import { connect, model, Schema, Document } from 'mongoose';


const mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017';
const database = process.env.MONGODB_DATABASE_BOOKS || 'books';

const uri: string = [mongoUrl, database].join('/');


const BookSchema: Schema = new Schema({
    bookName: [{
        type: String
    }],
    authorId: String
});

interface BookInterface extends Document  {
    bookName: string;
    authorId: string;
}

const Book = async () => {
    await connect(uri, (err: any) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Successfully Connected!');
        }
    });
    return model<BookInterface>('books', BookSchema, 'books');
};


export {
    BookSchema, BookInterface, Book
};