import React, { useState } from "react";
import PropTypes from "prop-types";

Search.propTypes = {};

function Search({ onSubmits }) {
  const [Seatch, setSeatch] = useState("");
  const handleChan = (e) => {
    setSeatch(e.target.value);
  };
  const handleSub = (e) => {
    e.preventDefault();
    onSubmits(Seatch);
    setSeatch("");
  };
  return (
    <form action="" onSubmit={handleSub}>
      <input
        value={Seatch}
        type="text"
        onChange={handleChan}
        placeholder="Bạn muốn tìm phim gì?"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
