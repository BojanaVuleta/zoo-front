import { useState } from "react";
import { addAnimal } from "../service/AnimalService";
import AnimalContext from "./AnimalContext";

const AnimalProvider = ({ children }) => {
  const [animalState, setAnimalState] = useState([]);

  const postNewAnimal = (animal) => {
    addAnimal(animal).then(({ data }) => {
      setAnimalState((prevState) => [...prevState, data]);
    });
  };

  const animalContext = {
    animals: animalState,
    updateAnimals: setAnimalState,
    addAnimal: postNewAnimal,
  };
  return (
    <AnimalContext.Provider value={animalContext}>
      {children}
    </AnimalContext.Provider>
  );
};

export default AnimalProvider;
