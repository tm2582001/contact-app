import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeHolder, handleChange }) => (
  <input type="search" placeholder={placeHolder} onChange={handleChange} />
);

export default SearchBox;
