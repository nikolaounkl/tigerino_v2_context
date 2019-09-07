import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import logo from "./images/logo.svg";
import "./styles/main.css";
import NewOffers from "./components/NewOffers";
import AcceptedOffers from "./components/AcceptedOffers";
import OfferContextProvider from "./contexts/OfferContext";

const App = () => {
    return (
        <div className="container">
            <OfferContextProvider>
                <img src={logo} alt="" />
                <h1>Offers</h1>
                <NewOffers />
                <AcceptedOffers />
            </OfferContextProvider>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
