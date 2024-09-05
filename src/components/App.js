// App.js
import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import data from "../db.json"; // Adjust the path based on the actual location

function App() {
  const [pets, setPets] = useState(data.pets);
  const [filters, setFilters] = useState({ type: "all" });

  const handleFilterChange = (newType) => {
    setFilters({ type: newType });
  };

  const handleFindPetsClick = () => {
    const filteredPets = filters.type === "all"
      ? data.pets
      : data.pets.filter(pet => pet.type === filters.type);
    setPets(filteredPets);
  };

  const handleAdoptPet = (id) => {
    setPets(pets.map(pet =>
      pet.id === id ? { ...pet, adopted: true } : pet
    ));
  };

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleFilterChange} onFindPetsClick={handleFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
