
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList = animals.map((animal) => <li key={animal}>{animal}</li>);
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* {animals.map((animal) => <li key={animal}>{animal}</li>)} */}
        {animalList}
      </ul>
    </>
  );
};

export default Example;
