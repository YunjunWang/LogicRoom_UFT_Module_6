import React, { useState, useEffect } from "react";
import BookListPresenter from "./BookListPresenter";

export default function BookListComponent() {
  let booksPresenter = new BookListPresenter();
  const [stateViewModel, copyViewModelToStateViewModel] = useState([]);

  useEffect(() => {
    booksPresenter.load(generatedViewModel => {
      copyViewModelToStateViewModel(generatedViewModel);
    });
  }, []);

  return (
    <div>
      <h5 className="book-list-title">Book List (api)</h5>
      <div>
        {stateViewModel.map((book, i) => {
          return <div key={i}>{book.name}</div>;
        })}
      </div>
    </div>
  );
}
