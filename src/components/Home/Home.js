import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { CurrentlyReading } from "./CurrentlyReading";
import { WantToRead } from "./WantToRead";
import { Read } from "./Read";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { state, dispatch } = useContext(BookContext);
  console.log(state);
  return (
    <>
      <Link to="/search">Search Here</Link>
      <CurrentlyReading />
      <WantToRead />
      <Read />
    </>
  );
};
