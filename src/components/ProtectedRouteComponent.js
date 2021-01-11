import React from 'react';
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";

const ProtectedRouteComponent = ({isLoggedIn, component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => isLoggedIn ? (<Component {...props}/>) : (<Redirect to='/login'/>)}
        />
    );
}

const mapStateToProps = ({user}) => {
    return {
        isLoggedIn: user.isLoggedIn
    }
}

const ProtectedRoute = connect(mapStateToProps)(ProtectedRouteComponent);
export {ProtectedRoute};