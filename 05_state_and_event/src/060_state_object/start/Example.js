import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);

  const changeName = (e) => {
    setPerson({ ...person, name: e.target.value});

  }
  const changeAge = (e) => {
    setPerson({ name: person.name, age: e.target.value });
  }

  const reset = () => {
    setPerson({name:"", age: ""})
  }
  return (
    <>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <input type="text" value={person.name} onChange={changeName}/>
      <input type="number" value={person.age} onChange={changeAge} />
      <button onClick={reset}>Reset</button>
    </>
  )
};

export default Example;
