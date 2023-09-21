import { useRouteMatch } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Params() {
    const match = useRouteMatch();

    const location = useLocation();

    console.log("useRouteMatch", match);
    console.log("useLocation", location);

    return <div></div>;
}
