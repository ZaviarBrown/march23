import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const History = () => {
    const history = useHistory();

    console.log(history);

    // visited array: [..., /hello, /history]
    // Last index is current page location

    // //! const handleClick = () => <Redirect to="/users" />;
    const handleClick = () => history.push("/users");
    // [..., /hello, /history, /users]
    // Clicking back takes us to /history

    const redirect = () => history.replace("/");
    // [..., /hello, /]
    // Clicking back takes us to /

    return (
        <div>
            <button onClick={handleClick}>We're in History class!</button>
            <button onClick={redirect}>Go back home!</button>
        </div>
    );
};

export default History;
