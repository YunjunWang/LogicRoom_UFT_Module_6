import booksRepository from "./BooksRepository.js";

export default class BookListPresenter {
  load = async callback => {
    await booksRepository.getBooks(booksPm => {
      const booksVm = booksPm.map(bookPm => {
        return { name: bookPm.name, author: bookPm.author };
      });
      callback(booksVm);
    });
  };
}
