import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTweetThunk } from "./store/tweet";

const CreateTweet = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e, stepNumber) => {
        e.preventDefault();

        console.log(
            "--------------------------------------------------------------------"
        );
        console.log(
            `Step #${stepNumber}: Handle submit is running! \nAbout to dispatch a new tweet...`
        );

        if (text === "") return;
        const message = {
            message: text,
        };
        dispatch(createTweetThunk(message, stepNumber + 1));
        setText("");
    };

    return (
        <form
            onSubmit={(e) => {
                const stepNumber = 1;
                console.log(
                    "--------------------------------------------------------------------"
                );
                console.log(`Step #${stepNumber}: On submit action has fired!`);
                handleSubmit(e, stepNumber + 1);
            }}
        >
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button>Create Tweet</button>
        </form>
    );
};

export default CreateTweet;
