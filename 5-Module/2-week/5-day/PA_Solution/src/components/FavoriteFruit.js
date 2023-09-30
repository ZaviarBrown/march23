import { Link } from "react-router-dom";
import { useFruitContext } from "../context/FavFruitContext";

const FavoriteFruit = ({ fruits }) => {
    const { favFruitId } = useFruitContext();
    const chosenFruit = fruits.find((el) => el.id === favFruitId);

    return (
        <div className="fav-fruit">
            <h2>Favorite Fruit</h2>
            <Link to={`/fruits/${favFruitId}`}>{chosenFruit.name}</Link>
        </div>
    );
};

export default FavoriteFruit;
