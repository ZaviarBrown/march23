import React from "react";
import {
    useParams,
    Redirect,
    Link,
    useRouteMatch,
    Route,
} from "react-router-dom";

const Profile = () => {
    const params = useParams();
    const { userId } = params;

    if (userId === "0") return <Redirect to="/" />;

    return (
        <React.Fragment>
            <h1>Hello from User number {userId}</h1>

            <Link to={`/users/${userId}/photos`}>Photos</Link>
            <Link to={`/users/${userId}/about-me`}>About Me</Link>

            <Route path={`/users/${userId}/photos`}>
                <h2>Photos for {userId}</h2>
            </Route>
            <Route path={`/users/${userId}/about-me`}>
                <h2>About Me for {userId}</h2>
            </Route>
        </React.Fragment>
    );
};

export default Profile;
