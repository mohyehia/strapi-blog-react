import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {Container, CssBaseline} from "@material-ui/core";

function App() {
    return (
        <BrowserRouter>
            <CssBaseline/>
            <Navbar/>
            <Switch>
                <Container maxWidth="lg">
                    <Route path="/" component={Home} exact/>
                </Container>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
