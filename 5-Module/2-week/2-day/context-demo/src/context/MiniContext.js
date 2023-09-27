import { createContext } from "react";

export const MiniContext = createContext();

export function MiniProvider(props) {
    return (
        <MiniContext.Provider value={{ secretMessage: "I am useless" }}>
            {props.children}
        </MiniContext.Provider>
    );
}
