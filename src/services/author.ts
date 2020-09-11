import { Author, AuthorInterface } from '../models';

const getAllAuthors = async (): Promise<AuthorInterface[]> => {
    const model = await Author();
    return await model.find();
};

const getOneAuthor = async (id: string): Promise<AuthorInterface> => {

    const model = await Author();
    return await model.findOne({
        id,
     });
};

const addTheAuthor = async (authorId: string, name: string, ): Promise<AuthorInterface> => { 
    const model = await Author();
    return await model.create(
        {
            name,
            authorId,
       });
};

export {
    getAllAuthors,
    getOneAuthor,
    addTheAuthor
};
