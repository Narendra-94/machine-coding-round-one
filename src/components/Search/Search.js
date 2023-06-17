import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BookContext } from "../../context/BookContext";
import "./Search.css";

export const Search = () => {
  const { state, dispatch } = useContext(BookContext);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = searchQuery
    ? state.product.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

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
    <div className="search-container">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Search books..."
      />
      <ul className=" book-container ">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li key={book.id} className="book-card">
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
            </li>
          ))
        ) : (
          <li>No books found</li>
        )}
      </ul>
      <Link to="/" className="home-switch">
        <AiOutlineArrowLeft />
      </Link>
    </div>
  );
};
