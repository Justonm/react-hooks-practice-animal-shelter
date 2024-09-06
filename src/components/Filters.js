import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  return (
    <div>
      {/* Add an accessible label to match the test case */}
      <label htmlFor="type">Filter by pet type:</label>
      <select id="type" aria-label="type" onChange={(e) => onChangeType(e.target.value)}>
        <option value="all">All</option>
        <option value="cat">Cats</option>
        <option value="dog">Dogs</option>
        <option value="micropig">Micropigs</option>
      </select>
      <button className="ui secondary button" onClick={onFindPetsClick}>
        Find pets
      </button>
    </div>
  );
}

export default Filters;
