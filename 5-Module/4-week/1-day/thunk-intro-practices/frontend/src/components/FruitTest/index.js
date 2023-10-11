import { useSelector } from "react-redux";

export default function FruitTest() {
    const fruits = useSelector((state) => {
        console.log("useSelector ran!!!");
        return state.fruitState;
    });

    console.log("I RERENDERED!!!!");

    return (
        <div>
            {fruits && Object.values(fruits[0]).map((el) => <h1>{el}</h1>)}
        </div>
    );
}
