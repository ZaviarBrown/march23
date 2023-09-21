import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import App from "./App";
import Users from "./components/Users";
import Profile from "./components/Profile";
import History from "./components/History";
import Params from "./components/Params";

const handleClick = () => {
    console.log("Thanks for clicking!");
};

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <div>
                <NavLink
                    to="/"
                    exact
                    activeStyle={{ border: "solid black 2px" }}
                >
                    App
                </NavLink>
                <NavLink exact activeClassName="red" to="/users">
                    Users
                </NavLink>
                <NavLink activeClassName="blue" to="/hello">
                    Hello
                </NavLink>
                <NavLink activeClassName="green" to="/users/1">
                    Zaviar's Profile
                </NavLink>
                <NavLink to="/" exact onClick={handleClick}>
                    App with click handler
                </NavLink>
                <NavLink to="/history" exact>
                    History
                </NavLink>

                <Switch>
                    <Route path="/test">
                        <Params />
                    </Route>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route exact path="/users">
                        <Users />
                    </Route>
                    <Route path="/users/:userId">
                        <Profile />
                    </Route>
                    <Route path="/history">
                        <History />
                    </Route>
                    <Route>
                        <h1>404: Page not found</h1>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
