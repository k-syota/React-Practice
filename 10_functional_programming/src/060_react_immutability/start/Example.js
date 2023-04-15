import { useState } from "react";

const Child = ({ state, setState }) => {
  
  const add = () => {
    setState(prev=> ({value: prev.value+1}));
  }
  return (
    <>
      <span>{state.value}</span>
      <button onClick={add}>+</button>
    </>
  );
};

const Example = () => {
  const [ state, setState ] = useState({ value: 0 });

  return (
    <>
      <div>
        <Child state={state} setState={ setState} />
      </div>
    </>
  );
};

export default Example;
