import React, { useContext } from "react";
import { OfferContext } from "../contexts/OfferContext";

const AcceptedOffers = () => {
    const { acceptedOffers, formatter } = useContext(OfferContext);

    return (
        <>
            <div className="wrapper">
                <p className="subtitle">Accepted Offers</p>
                {acceptedOffers.map(offer => (
                    <div className="box" key={offer.customer_id}>
                        <div>
                            <p>{offer.customer_company}</p>
                            <p className="muted-text">{offer.customer_name}</p>
                        </div>
                        <div>
                            <p>
                                <strong>
                                    {formatter.format(offer.contract_price)}
                                </strong>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AcceptedOffers;
