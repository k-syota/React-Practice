import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello ${arg}`;
return (
    <>
        {/* <Child color="" />
        <Child color="red" />
        <Child num="123" hello={hello}/>
        <Child hello={hello} /> */}
        <Child hello={hello} obj={{ name:'taro',age:'22' }} />
    </>
)}


export default Example;
