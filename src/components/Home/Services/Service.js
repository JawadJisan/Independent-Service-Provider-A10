import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'


const Service = ({service}) => {
    const {name , img , price, description} = service;
    const navigate = useNavigate();
    const goCheckout = name => {
        navigate(`/checkout/${name}`);
    }

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name} </h2>
            <h1>{price} </h1>
            <p>{description} </p>
            <button onClick={()=>goCheckout(name)} className='btn btn-primary'>Checkout </button>
            
        </div>
    );
};

export default Service;