import React, { useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="searchBox">
      <form className="search-form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBox;
