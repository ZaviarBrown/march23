import React from "react";
import {
    useParams,
    Redirect,
    Link,
    useRouteMatch,
    Route,
} from "react-router-dom";

const Profile = () => {
    // //* Lvl 1 Thief
    // const params = useParams();
    // const { userId } = params;

    // //? Lvl 50 Gangster
    // const { userId } = useParams();
    // const match = useRouteMatch();

    //! Lvl 99 Boss
    const {
        url,
        params: { userId },
    } = useRouteMatch();

    if (userId === "0") return <Redirect to="/" />;

    return (
        <React.Fragment>
            <h1>Hello from User number {userId}</h1>
            {/* //* Lvl 1 */}
            
            {/* <Link to={`/users/${userId}/photos`}>Photos</Link>
            <Link to={`/users/${userId}/about-me`}>About Me</Link>

            <Route path={`/users/${userId}/photos`}>
                <h2>Photos for {userId}</h2>
            </Route>
            <Route path={`/users/${userId}/about-me`}>
                <h2>About Me for {userId}</h2>
            </Route>  */}
           

            {/* //?  Lvl 50 */}
            
            {/* <Link to={`${match.url}/photos`}>Photos</Link>
            <Link to={`${match.url}/about-me`}>About Me</Link>
            <Route path={`${match.url}/photos`}>
                <h2>Photos for {userId}</h2>
            </Route>
            <Route path={`${match.url}/about-me`}>
                <h2>About Me for {userId}</h2>
            </Route>  */}
           

            {/* //! Lvl 99 */}

            <Link to={`${url}/photos`}>Photos</Link>
            <Link to={`${url}/about-me`}>About Me</Link>

            <Route path={`${url}/photos`}>
                <h2>Photos for {userId}</h2>
            </Route>
            <Route path={`${url}/about-me`}>
                <h2>About Me for {userId}</h2>
            </Route>
        </React.Fragment>
    );
};

export default Profile;
