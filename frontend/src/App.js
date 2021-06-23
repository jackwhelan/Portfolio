import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./views/Home.view";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about-me" exact>
                    <Home />
                </Route>
                <Route path="/education" exact>
                    <Home />
                </Route>
                <Route path="/work-experience" exact>
                    <Home />
                </Route>
                <Route path="/technical-expertise" exact>
                    <Home />
                </Route>
                <Route path="/personal-projects" exact>
                    <Home />
                </Route>
                <Route path="/contact-me" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
