import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import CartContent from "./CartContent";
import Header from "home/Header";
import Footer from "home/Footer";
import "remixicon/fonts/remixicon.css";
import Login from "./Login";
import MiniCart from "./MiniCart";

const App = () => (
  <div className="mx-auto max-w-6xl">
      <Header/>
      <div className="my-10">
          <CartContent/>
      </div>
      <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
