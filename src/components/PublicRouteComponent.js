import React from 'react';
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";

const PublicRouteComponent = ({isLoggedIn, component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => isLoggedIn ? (<Redirect to='/posts'/>) : (<Component {...props}/>)}
        />
    );
}

const mapStateToProps = ({user}) => {
    return {
        isLoggedIn: user.isLoggedIn
    }
}

const PublicRoute = connect(mapStateToProps)(PublicRouteComponent);
export {PublicRoute};