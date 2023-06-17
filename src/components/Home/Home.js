import React from "react";

import { CurrentlyReading } from "./CurrentlyReading";
import { WantToRead } from "./WantToRead";
import { Read } from "./Read";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="search-shift">
        <Link to="/search">Search Here</Link>
      </div>

      <CurrentlyReading />
      <WantToRead />
      <Read />
    </>
  );
};
