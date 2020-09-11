import { Book, BookInterface } from '../models';

const getAllBooks = async (): Promise<BookInterface[]> => {
    const model = await Book();
    return await model.find();
};
const getOneBook = async (id: string): Promise<BookInterface> => {

    const model = await Book();
    return await model.findOne({
        id,
     });
};

const addTheBook = async (authorId: string, name: string, ): Promise<BookInterface> => { 
    const model = await Book();
    return await model.create(
        {
            name,
            authorId,
       });
};

export {
    getAllBooks,
    getOneBook,
    addTheBook
};