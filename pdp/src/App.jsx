import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
    <Router>
        <div className="text-3xl mx-auto max-w-6xl">
            <Header/>
            <Switch>
                <Route path="/product/:id" component={PDPContent} />
            </Switch>
            <Footer/>
        </div>
    </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
