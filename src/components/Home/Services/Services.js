import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css'


const Services = () => {
    const [serrvices, setServices] = useState();

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='title mt-5'>What am I offering?</h2>
                
                <div className='services-containe'>
                    {
                       serrvices?.map(service => <Service key={service.div} service={service}></Service>) 
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;