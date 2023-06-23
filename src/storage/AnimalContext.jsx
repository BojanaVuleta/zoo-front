import { createContext } from "react";

const AnimalContext = createContext({
  animals: [],
  updateAnimals: () => {},
  addAnimal: () => {},
});

export default AnimalContext;
