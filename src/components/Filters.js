import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  return (
    <div>
      <select onChange={(e) => onChangeType(e.target.value)}>
        <option value="all">All</option>
        <option value="cat">Cats</option>
        <option value="dog">Dogs</option>
        <option value="micropig">Micropigs</option>
      </select>
      <button onClick={onFindPetsClick}>Find pets</button>
    </div>
  );
}

export default Filters;
