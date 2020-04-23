import { connect, model, Schema, Document } from 'mongoose';

const mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017';
const database = process.env.MONGODB_DATABASE_AUTHORS || 'authors';

const uri: string = [mongoUrl, database].join('/');

const AuthorSchema = new Schema({
    authorName: {
        type: String,
        required: true
    },
    id: String,
});

interface AuthorInterface extends Document  {
    authorName: string;
    authorId: string;
}

const Author = async () : Promise<any> => {
    await connect(uri, (err: any) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Successfully Connected!');
        }
    });
    return model<AuthorInterface>('authors', AuthorSchema, 'authors');
};
export {
    AuthorSchema, AuthorInterface, Author
};
