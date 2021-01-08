import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import {NavLink} from "react-router-dom";
import {Divider} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        color: "#fff",
        textDecoration: "none",
        marginRight: theme.spacing(5)
    },
    link: {
        color: '#fff',
        fontSize: 18,
        textDecoration: "none",
        padding: 10
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const [auth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <EmojiSymbolsIcon/>
                    </IconButton>
                    <NavLink className={classes.title} to="/">
                        <Typography variant="h6">Strapi Blog</Typography>
                    </NavLink>
                    <NavLink className={classes.title} to="/posts">
                        <Typography variant="h6">Posts</Typography>
                    </NavLink>
                    <Typography className={classes.root}/>
                    <NavLink className={classes.link} to="/signup">Signup</NavLink>
                    <NavLink className={classes.link} to="/login">Login</NavLink>
                    {auth && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>My Profile</MenuItem>
                                <Divider/>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;