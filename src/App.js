import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AddPost, Home, Login, NotFoundPage, Posts, Profile, Signup} from "./pages/index";
import {Provider} from "react-redux";
import store from "./redux/store";
import {Navbar, ProtectedRoute, PublicRoute} from "./components";
import {checkAuthentication} from "./redux/action/user_action";

store.dispatch(checkAuthentication());

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar/>
                <div className="container mt-4">
                    <Switch>
                        <ProtectedRoute path="/" component={Home} exact/>
                        <ProtectedRoute path="/posts" component={Posts} exact/>
                        <ProtectedRoute path="/posts/add" component={AddPost} exact/>
                        <ProtectedRoute path="/profile" component={Profile} exact/>
                        <PublicRoute path="/signup" component={Signup} exact/>
                        <PublicRoute path="/login" component={Login} exact/>
                        <Route path="/*" component={NotFoundPage} exact/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
