import { useState } from "react";

console.log("line 3", "Heyooooo");

export const State = () => {
    const [counter, setCounter] = useState(0);

    console.log("line 8", counter);

    return (
        <div className="container">
            <span>{counter}</span>
            <div>
                <button
                    onClick={() => {
                        setCounter(counter - 1);
                        console.log(counter);
                    }}
                >
                    -
                </button>
                <button
                    onClick={() => {
                        setCounter(counter + 1);
                        console.log(counter);
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
};
