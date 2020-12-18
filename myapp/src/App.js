import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import AboutUs from "./pages/about";
import Home from "./pages/home";
import "./App.css";
const Contact = ({}) => {
  return <h1>Contact</h1>;
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Footer />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
