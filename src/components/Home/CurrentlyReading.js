import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";

export const CurrentlyReading = () => {
  const { state, dispatch } = useContext(BookContext);
  const [selectedCategory, setSelectedCategory] = useState("");

  const filterCurrentlyReadingCategory = state.product.filter(
    ({ category }) => category === "Currently Reading"
  );

  const handleCategoryChange = (bookId, newCategory) => {
    if (newCategory === "None") {
      return;
    }

    dispatch({
      type: "UPDATE_BOOK_CATEGORY",
      payload: { bookId, newCategory },
    });
  };

  return (
    <>
      <h1>Currently Reading</h1>
      <hr />
      <div className="book-container">
        {filterCurrentlyReadingCategory.map((book) => (
          <div className="book-card" key={book.id}>
            <img className="book-image" src={book.image} alt="" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <select
              value={book.category}
              onChange={(e) => handleCategoryChange(book.id, e.target.value)}
            >
              <option value="Currently Reading">Currently Reading</option>
              <option value="Want to Read">Want to Read</option>
              <option value="Read">Read</option>
              <option value="None">None</option>
            </select>
          </div>
        ))}
      </div>
    </>
  );
};
