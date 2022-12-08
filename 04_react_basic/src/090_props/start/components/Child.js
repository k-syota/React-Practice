/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const Child = ({color ="gray" ,num ,hello,obj}) => {
  return (
    <>
      <div className={`component ${color}`}>
        <h3>Hello Component</h3>
        <h3>{num}</h3>
        <h3>{hello('props')}</h3>
        <h3>{obj.name}</h3>
      </div>
    </>
  );
};

export default Child;
