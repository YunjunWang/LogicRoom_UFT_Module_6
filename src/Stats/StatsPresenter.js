import booksRepository from "../Books/BooksRepository";

export default class StatsPresenter {
  load = async callback => {
    await booksRepository.getLastAddedBook(callback);
  };
}
