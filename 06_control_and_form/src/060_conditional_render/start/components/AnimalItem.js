const AnimalItem = ({animal}) => {
    return (
                    // if (animal === "Dog") {
                //   return <li key={animal}>{animal + "＊"}</li>
                // }else{
                //   return <li key={animal}>{animal}</li>
                // }
                // 三項演算子
                // return <li key={animal}>{
                //   animal === "Dog"
                //     ? animal + "◉"
                //     : animal}
                // </li>
            <li>{animal}{animal === "Dog" && "△"}</li>
    )
}

export default AnimalItem;
