import { useContext, useState } from "react";
import { MiniContext } from "../../context/MiniContext";

export default function Five() {
    const { secretMessage } = useContext(MiniContext);
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow((prev) => !prev)}>
                Show a context secret!
            </button>
            <div>{show && secretMessage}</div>
        </>
    );
}
