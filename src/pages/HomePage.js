import React from 'react';
import Banner from '../components/Banner';
import InfoCards from '../components/InfoCards';
import ServicesCards from '../components/ServicesCards';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <InfoCards />
            <ServicesCards />
        </div>
    );
};

export default HomePage;
