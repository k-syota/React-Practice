import {useState, useReducer} from 'react'

const Example = () => {
  
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev, {type}) => {

    switch (type) {
      case "+":
        return ++prev
      case "-":
        return --prev
      default:
        throw new Error('不明なactionです')
    }

    // if (action === '+') {
    //   return ++prev;
    // } else if(action === '-'){
    //   return --prev;
    // }
  }, 0)

  const add = () => {
    setState(prev => ++prev)
  }
  const addReducer = () => {
    dispatch({type:'+'})
  }
  const downReducer = () => {
    dispatch({type:'-'})
  }
  return (
    <>
      <div>
        <h3>useState</h3>
        <span>{state} : </span>
        <button onClick={add}>+</button>
      </div>
      <div>
        <h3>useReducer</h3>
        <span>{rstate} : </span>
        <button onClick={addReducer}>+</button>
        <button onClick={downReducer}>-</button>
      </div>
    </>
  );
};

export default Example;
