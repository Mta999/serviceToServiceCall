import { connect, model, Schema } from "mongoose";

// const uri: string = "mongodb://localhost:27017/authors";

const mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017';
const database = process.env.MONGODB_DATABASE_AUTHORS || 'authors';

const uri: string = [mongoUrl, database].join("/")

const AuthorSchema = new Schema({
    authorName: {
        type: String,
        required: true
    },
    id: String,
});

export const Author = async () : Promise<any> => {
    await connect(uri, (err: any) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("Successfully Connected!");
        }
    });
    const Author = model("authors", AuthorSchema, "authors");
    return Author
}


