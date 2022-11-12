import React from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import InfoCards from '../components/InfoCards';
import MakeAppointment from '../components/MakeAppointment';
import ServicesCards from '../components/ServicesCards';
import Testimonial from '../components/Testimonial';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <InfoCards />
            <ServicesCards />
            <AboutUs />
            <MakeAppointment />
            <Testimonial />
        </div>
    );
};

export default HomePage;
