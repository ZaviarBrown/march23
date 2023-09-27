import { MiniProvider } from "../../context/MiniContext";
import Five from "./5";

export default function Four() {
    return (
        <div>
            <MiniProvider>
                <Five />
            </MiniProvider>
        </div>
    );
}
