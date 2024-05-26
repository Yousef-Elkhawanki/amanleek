"use client";
import React, { useState, useEffect } from "react";

const Autocomplete = () => {
  const [options, setOptions] = useState(["Suggestion 1", "Suggestion 2", "Suggestion 3"]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const filtered = options.filter((option) => option.toLowerCase().includes(searchTerm));
    setFilteredOptions(filtered);
  }, [searchTerm, options]);

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
  };

  return (
    <div>
      <input value={searchTerm} onChange={handleInputChange} placeholder="Enter Suggestions" style={{ color: "#1d1d1d" }} />
      <ul>
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleSuggestionClick(option)}>
              {option}
            </li>
          ))
        ) : (
          <li>No suggestions found.</li>
        )}
      </ul>
    </div>
  );
};

export default Autocomplete;
