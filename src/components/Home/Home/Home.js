import React from 'react';
import Skills from '../../Skills/Skills';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Skills></Skills>
            <Footer></Footer>
            

        </div>
    );
};

export default Home;