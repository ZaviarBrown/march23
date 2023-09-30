import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];

function FruitForm({ fruits }) {
    const [name, setName] = useState("");
    const [sweetness, setSweetness] = useState(1);
    const [color, setColor] = useState(COLORS[1]);
    const [seeds, setSeeds] = useState("yes");
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const fruitNames = fruits.map(({ name }) => name);

    /**
     * Create error state
     * In useEffect:
     *  Create error object
     *  Check each value
     *  Set error state
     */
    useEffect(() => {
        const errors = {};

        if (name.length < 3) errors.name = "Name must be 3 or more characters";
        if (name.length > 20)
            errors.name = "Name must be 20 characters or less";
        if (fruitNames.includes(name)) errors.name = "Name already exists";
        if (sweetness < 1 || sweetness > 10)
            errors.sweetness = "Sweetness must be between 1 and 10";

        setErrors(errors);
    }, [name, sweetness]);

    const submitForm = (e) => {
        e.preventDefault();

        console.log({ name, sweetness, color, seeds });

        setName("");
        setSweetness(1);
        setColor(COLORS[1]);
        setSeeds("yes");

        history.push("/");
    };

    return (
        <form className="fruit-form" onSubmit={submitForm}>
            <h2>Enter a Fruit</h2>
            <label>
                Name
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                />
            </label>
            {errors.name && <p className="errors">{errors.name}</p>}
            <label>
                Select a Color
                <select
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                >
                    {COLORS.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Sweetness
                <input
                    value={sweetness}
                    onChange={(e) => setSweetness(e.target.value)}
                    type="number"
                    name="sweetness"
                />
            </label>
            {errors.sweetness && <p className="errors">{errors.sweetness}</p>}

            <label>
                <input
                    onChange={(e) => setSeeds(e.target.value)}
                    type="radio"
                    value="no"
                    name="seeds"
                    checked={seeds === "no"}
                />
                No Seeds
            </label>
            <label>
                <input
                    onChange={(e) => setSeeds(e.target.value)}
                    type="radio"
                    value="yes"
                    name="seeds"
                    checked={seeds === "yes"}
                />
                Seeds
            </label>
            <button type="submit" disabled={errors.name || errors.sweetness}>
                Submit Fruit
            </button>
        </form>
    );
}

export default FruitForm;
