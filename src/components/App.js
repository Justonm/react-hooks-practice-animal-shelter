import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import data from "../db.json";

function App() {
  const [pets, setPets] = useState(data.pets); // State to track pets
  const [filters, setFilters] = useState({ type: "all" }); // State to track filter

  // Handle filter change
  const handleFilterChange = (newType) => {
    setFilters({ type: newType });
  };

  // Handle the "Find pets" button click
  const handleFindPetsClick = () => {
    const filteredPets =
      filters.type === "all"
        ? data.pets
        : data.pets.filter((pet) => pet.type === filters.type);
    setPets(filteredPets);
  };

  // Handle pet adoption by updating the isAdopted status
  const handleAdoptPet = (id) => {
    setPets((prevPets) =>
      prevPets.map((pet) =>
        pet.id === id ? { ...pet, isAdopted: true } : pet
      )
    );
  };

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              onChangeType={handleFilterChange}
              onFindPetsClick={handleFindPetsClick}
            />
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
