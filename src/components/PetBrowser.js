import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  return (
    <div className="ui cards">
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          pet={pet} // Pass the entire pet object as a prop
          onAdoptPet={onAdoptPet} // Pass the onAdoptPet callback
        />
      ))}
    </div>
  );
}

export default PetBrowser;
