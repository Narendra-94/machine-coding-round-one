import React, { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import { books } from "../data";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async () => {
      dispatch({
        type: "FETCH_SUCCESSFULL_BOOK_DATA",
        payload: books,
      });
    };
    getData();
  }, []);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};
