const Example = () => {

  const val1 = 1;
  const val2 = 2;

  const add = (val1, val2) => {
    return val1 + val2;
  }

  return (
    <>
      <h3>純粋関数</h3>
      <p>fn(決まった引数) には 決まった戻り値 を返す</p>
      <div>{add(val1, val2)}</div>
    </>
  );
};

export default Example;
