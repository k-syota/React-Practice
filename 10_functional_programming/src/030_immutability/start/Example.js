const Example = () => {

  const num = { val: 2 };
  const double = (num) => {
    const newNum = {};
    newNum.val = num.val * 2;
    return newNum;
    // 不変性が保持されない例
    // num.val = num.val * 2;
    // return num;
  }

  const newNum = double(num);
  console.log('newNum', newNum, 'num', num);
  return (
    <>
      <h3>不変性（Immutability）</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
    </>
  );
};

export default Example;
