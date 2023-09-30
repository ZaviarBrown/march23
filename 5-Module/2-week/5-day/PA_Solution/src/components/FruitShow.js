import { useParams } from "react-router-dom";

function FruitShow({ fruits }) {
    const { fruitId } = useParams();
    const { name, color, sweetness, seeds } = fruits.find(
        ({ id }) => id === fruitId
    );
    return (
        <div className="fruit-show">
            <h2>{name}</h2>
            <div>{color}</div>
            <div>Sweetness: {sweetness}</div>
            <div>Seeds: {seeds}</div>
            <div></div>
        </div>
    );
}

export default FruitShow;
