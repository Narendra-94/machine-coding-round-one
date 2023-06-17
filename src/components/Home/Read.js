import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";

export const Read = () => {
  const { state, dispatch } = useContext(BookContext);
  console.log(state.product);
  const filterReadCategory = state.product.filter(
    ({ category }) => category === "Read"
  );

  const handleCategoryChange = (bookId, newCategory) => {
    dispatch({
      type: "UPDATE_BOOK_CATEGORY",
      payload: { bookId, newCategory },
    });
  };
  return (
    <>
      <h1> Read</h1>
      <hr />
      <div className="book-container">
        {filterReadCategory.map((book) => (
          <div className="book-card" key={book.id}>
            <img className="book-image" src={book.image} alt="" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <select
              value={book.category}
              onChange={(e) => handleCategoryChange(book.id, e.target.value)}
            >
              <option value="Currently Reading">Currently Reading</option>
              <option value="Read">Read</option>
              <option value="Want to Read">Want to Read</option>
            </select>
          </div>
        ))}
      </div>
    </>
  );
};
