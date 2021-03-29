import React, { useState } from "react";
import "../../styles/SearchBox.css";

function SearchBox() {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="searchBox">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">click</button>
      </form>
    </div>
  );
}

export default SearchBox;
