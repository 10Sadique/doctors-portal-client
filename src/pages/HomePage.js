import React from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import InfoCards from '../components/InfoCards';
import MakeAppointment from '../components/MakeAppointment';
import ServicesCards from '../components/ServicesCards';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <InfoCards />
            <ServicesCards />
            <AboutUs />
            <MakeAppointment />
        </div>
    );
};

export default HomePage;
