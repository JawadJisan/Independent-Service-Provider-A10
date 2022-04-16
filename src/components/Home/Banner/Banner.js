import React from 'react';
import { Carousel } from 'react-bootstrap';
import b2 from '../../images/b2.jpg'
import b3 from '../../images/b3.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src={b2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h1>Hello, I'm Sebastin Craig</h1>
            <h3>I design 3D visuals and user interfaces for apps and websites</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={b3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h1>Scrool Down To see My Services</h1>
            <h3>FILMBASED</h3>
            <p>An iPhone app that makes it really easy to track and share movies.
</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;