import React from "react";
import ReactDOM from "react-dom";
import StatsComponent from "./Stats/StatsComponent";
import AddBooksComponent from "./Books/AddBooksComponent";
import BookListComponent from "./Books/BookListComponent";

import "./styles.css";

function App() {
  return (
    <>
      <div className="flex-row-container">
        <div className="flex-row-item">
          <AddBooksComponent />
        </div>
        <div className="flex-row-item">
          <StatsComponent />
        </div>
        <div className="flex-row-item">
          <BookListComponent />
        </div>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
