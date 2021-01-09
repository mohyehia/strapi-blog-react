import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PostsPage from "./pages/PostsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container mt-4">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/signup" component={SignupPage} exact/>
                    <Route path="/login" component={LoginPage} exact/>
                    <Route path="/posts" component={PostsPage} exact/>
                    <Route path="/*" component={NotFoundPage} exact/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
