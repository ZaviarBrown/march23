import fruits from "./mockData/fruits.json";
import FruitIndex from "./components/FruitsIndex";
import FruitShow from "./components/FruitShow";
import FruitForm from "./components/FruitForm";
import FavoriteFruit from "./components/FavoriteFruit";
import SetFavoriteFruit from "./components/SetFavoriteFruit";
import Navigation from "./components/Navigation";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <h1>Welcome to Fruits App</h1>
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <FruitIndex fruits={fruits} />
                </Route>
                <Route path="/fruits/new">
                    <FruitForm fruits={fruits} />
                </Route>
                <Route path="/fruits/:fruitId">
                    <FruitShow fruits={fruits} />
                </Route>
                <Route path="/fav-fruit">
                    <FavoriteFruit fruits={fruits} />
                </Route>
                <Route path="/set-fav-fruit">
                    <SetFavoriteFruit fruits={fruits} />
                </Route>
                <Route>
                    <h2>Page Not Found</h2>
                </Route>
            </Switch>
        </>
    );
}

export default App;
