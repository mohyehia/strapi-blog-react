import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {Container, CssBaseline} from "@material-ui/core";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PostsPage from "./pages/PostsPage";

function App() {
    return (
        <BrowserRouter>
            <CssBaseline/>
            <Navbar/>
            <Switch>
                <Container maxWidth="lg">
                    <Route path="/" component={Home} exact/>
                    <Route path="/signup" component={SignupPage} exact/>
                    <Route path="/login" component={LoginPage} exact/>
                    <Route path="/posts" component={PostsPage} exact/>
                </Container>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
