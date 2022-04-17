import React from 'react';
import './About.css'

const About = () => {
    return (
        <section className='px-4 py-32 mx-auto max-w-7xl'>
            <h2 className="title">About me</h2>
            <p className='text-center text-2xl font-bold pb-2 text-orange-400'> who i am</p>
      <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto  lg:grid-cols-2 xl:gap-32'>

        <div>
          <div className='personal-photo  bg-gray-200 rounded-lg'>
            <img
              src='pro.jpg'
              alt=''
            />
          </div>
        </div>

        <div>
          <p className='mb-2 text-lg font-semibold tracking-wide text-gray-500 uppercase'>
            I am Jawad and I'm a
          </p>
          <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>
            Web Developer.
          </h1>
          <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
          <p>Self-motivated and confident Web Developer. Able to do any web and programming related task by handling difficulties smoothly in any given time. Have a reasonable skill on Front-End and Back-End development.</p>
          </p>
          
        </div>
      </div>
    </section>
    );
};

export default About;