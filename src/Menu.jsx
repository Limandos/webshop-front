import { Fragment } from "react";
import { Link } from "react-router-dom";

export function Menu() {

    return(
        <Fragment>
            <Link to="/">Web Shop</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
        </Fragment>
    );
}