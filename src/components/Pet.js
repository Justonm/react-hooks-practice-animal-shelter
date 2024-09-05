// Pet.js
import React from "react";

function Pet({ id, name, type, gender, age, weight, adopted, onAdoptPet }) {
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === 'male' ? '♂' : '♀'} {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight} lbs</p>
        </div>
      </div>
      <div className="extra content">
        {adopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button className="ui primary button" onClick={() => onAdoptPet(id)}>
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}

export default Pet;
