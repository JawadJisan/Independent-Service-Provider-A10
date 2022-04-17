import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'


const Service = ({ service }) => {
    const { name, img, price, description, id } = service;
    const navigate = useNavigate();
    
    const goCheckout = name => {
        navigate(`/checkout/${name}`);
    }

    return (
        <div className='service'>
            

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name} </h2>
                    <h1 className="text-center text-4xl">$-{price} </h1>
                    <p>{description} </p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={() => goCheckout(name)}> <Link to='/checkout'></Link> Chekout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;