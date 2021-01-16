import React, {Fragment} from 'react';
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../redux/action/user_action";

const NavbarComponent = (props) => {
    const renderLoginLinkOrProfileDropDown = () =>{
        const {isLoggedIn, profile, logout} = props;
        if(isLoggedIn){
            return (
                <Fragment>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/posts">Posts</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Welcome, {profile.firstName}
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item" to="/profile">My Profile</NavLink>
                            <div className="dropdown-divider"/>
                            <Link className="dropdown-item" to="#" onClick={() => logout()}>Logout</Link>
                        </div>
                    </li>
                </Fragment>
            );
        }else{
            return (
                <Fragment>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                    </li>
                </Fragment>
            );
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Strapi Blog</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {renderLoginLinkOrProfileDropDown()}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = ({user}) =>{
    return {
        isLoggedIn: user.isLoggedIn,
        profile: user.profile
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        logout : () => dispatch(logout())
    }
}

const Navbar = connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
export {Navbar};