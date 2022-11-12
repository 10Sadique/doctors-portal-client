import React from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import InfoCards from '../components/InfoCards';
import ServicesCards from '../components/ServicesCards';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <InfoCards />
            <ServicesCards />
            <AboutUs />
        </div>
    );
};

export default HomePage;
