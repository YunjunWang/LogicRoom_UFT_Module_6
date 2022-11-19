import React, { useState } from "react";
import AddBooksPresenter from "../Books/AddBooksPresenter";

export default function AddBooksComponent() {
  let addBooksPresenter = new AddBooksPresenter();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div>
      <h5>Add Book (api)</h5>
      name : <br /> <input onKeyUp={e => setName(e.target.value)} />
      <br /> author : <br /> <input onKeyUp={e => setAuthor(e.target.value)} />
      <br />
      <button
        onClick={() => {
          addBooksPresenter.addBook(name, author);
        }}
      >
        add book
      </button>
    </div>
  );
}
