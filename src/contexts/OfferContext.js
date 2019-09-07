import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const OfferContext = createContext();

const OfferContextProvider = props => {
    const [offers, setOffers] = useState([]);
    const [newOffers, setNewOffers] = useState([]);
    const [acceptedOffers, setAcceptedOffers] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch all offers from local mock.json file
    const fetchOffers = async () => {
        setLoading(true);
        const res = await axios.get("http://localhost:3000/offers");
        setOffers(res.data);
        setNewOffers(res.data.filter(offer => offer.status === "new"));
        setAcceptedOffers(
            res.data.filter(offer => offer.status === "accepted")
        );
        setLoading(false);
    };

    // Fetch offers when component is mounted or updated
    useEffect(() => {
        fetchOffers();
    }, []);

    // Accept offer status onClick event
    const acceptOffer = e => {
        offers.map(offer => {
            if (offer.id === e.target.id) {
                offer.status = "accepted";
                axios
                    .put("http://localhost:3000/offers/" + e.target.id, offer)
                    .then(() => fetchOffers())
                    .catch(err => console.log(err));
            }
        });
    };

    // Format price in EUR with ECMAScript Internationalization API
    const formatter = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2
    });

    return (
        <OfferContext.Provider
            value={{
                offers,
                newOffers,
                acceptedOffers,
                acceptOffer,
                loading,
                formatter
            }}
        >
            {props.children}
        </OfferContext.Provider>
    );
};

export default OfferContextProvider;
