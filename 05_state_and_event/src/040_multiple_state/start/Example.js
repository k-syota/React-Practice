import { useState } from "react";

const Example = () => {
    const [countA , setCountA] = useState(0);
    const [countB , setCountB] = useState(10);
    const [countC , setCountC] = useState(100);
    return(
        <>
        <p>Aボタンを{countA}回押しました</p>
        <button onClick={()=> {
            let val = countA + 1;
            setCountA(val);
        }}>Aクリック</button>
        <p>Bボタンを{countB}回押しました</p>
        <button onClick={()=> {
            let val = countB + 1;
            setCountB(val);
        }}>Bクリック</button>
        <p>Cボタンを{countC}回押しました</p>
        <button onClick={()=> {
            let val = countC + 1;
            setCountC(val);
        }}>Cクリック</button>
        </>
    );
};

export default Example;
