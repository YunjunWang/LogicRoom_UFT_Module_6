import booksRepository from "./BooksRepository.js";

export default class AddBooksPresenter {
  addBook = async (name, author) => {
    await booksRepository.addBook({ name: name, author: author });
  };
}
