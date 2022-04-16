import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {name} = useParams();
    return (
        <div>
            CheCheckout Details: {name}
        </div>
    );
};

export default Checkout;