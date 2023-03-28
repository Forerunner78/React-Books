import { ADD_BOOKS } from "../constants";
import { DELETE_BOOK } from "../constants";

export const addBook = (data) => {
    return { type: ADD_BOOKS, payload: data };
};

export const deleteBook = (id) => {
    return { type: DELETE_BOOK, payload: id };
};
