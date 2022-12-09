const Example = () => {
  const clickHandler = () => {
    alert('test');
  }
  return (
    <>
    <button onClick={clickHandler}>click</button>
    <button>click</button>
    </>
  );
};

export default Example;
