import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {id} = useParams();
    return (
        <div>
            <p>ID: {id} </p>
            <p className='text-red-700 underline'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ex, ipsa illo, sapiente accusantium quisquam perferendis dolores deserunt inventore, quasi autem unde enim iusto mollitia cumque quas quibusdam qui nihil.</p>
        
        
        </div>
    );
};

export default Checkout;