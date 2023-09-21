import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import App from "./App";
import Users from "./components/Users";
import Profile from "./components/Profile";
import History from "./components/History";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <NavLink to="/">App</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/hello">Hello</NavLink>
            <NavLink to="/users/1">Zaviar's Profile</NavLink>
            <NavLink to="/">App with click handler</NavLink>
            <NavLink to="/history">History</NavLink>

            <Route path="/">
                <App />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/users/:userId">
                <Profile />
            </Route>
            <Route path="/history">
                <History />
            </Route>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
