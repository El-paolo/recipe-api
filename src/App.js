import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SearchFoodDishes from "./components/SearchFoodDishes";
import Footer from "./components/Footer";

const App = () => (
  <Fragment>
    <Header />
    <SearchFoodDishes />
    <Footer />
  </Fragment>
);

export default App;
