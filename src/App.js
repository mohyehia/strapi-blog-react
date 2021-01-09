import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Navbar} from "./components/index";
import {Home, Login, NotFoundPage, Posts, Signup} from "./pages/index";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar/>
                <div className="container mt-4">
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/signup" component={Signup} exact/>
                        <Route path="/login" component={Login} exact/>
                        <Route path="/posts" component={Posts} exact/>
                        <Route path="/*" component={NotFoundPage} exact/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
