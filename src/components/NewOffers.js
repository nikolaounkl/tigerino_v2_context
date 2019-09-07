import React, { useContext } from "react";
import { OfferContext } from "../contexts/OfferContext";

const NewOffers = () => {
    const { newOffers, acceptOffer, formatter } = useContext(OfferContext);
    return (
        <>
            <div className="wrapper">
                <p className="subtitle">New Offers</p>
                {newOffers.map(offer => (
                    <div className="box" key={offer.customer_id}>
                        <div className="customer-wrapper">
                            <span
                                className={
                                    offer.schedule_matches
                                        ? "dot-green"
                                        : "dot-red"
                                }
                            ></span>
                            <div>
                                <p>{offer.customer_company}</p>
                                <p className="muted-text">
                                    {offer.customer_name}
                                </p>
                            </div>
                        </div>
                        <div>
                            <span>
                                <strong>
                                    {formatter.format(offer.contract_price)}
                                </strong>
                            </span>
                            <span
                                className="button"
                                onClick={acceptOffer}
                                id={offer.customer_id}
                            >
                                Accept
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default NewOffers;
