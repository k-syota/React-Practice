import { useState } from "react";
import AnimalList from "./components/AnimalList";
import AnimaFilter from "./components/AnimalFilter";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];
  const [filterVal, setFilterVal] = useState("");
  const filterAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    console.log(animal.indexOf(filterVal));
    return isMatch;
  })

  return (
    <>
      <AnimaFilter filterState={[filterVal, setFilterVal]} />
      <AnimalList animals={filterAnimals} />
    </>
  );
};

export default Example;
