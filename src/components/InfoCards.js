import React from 'react';
import InfoCard from './InfoCard';
import clock from '../assets/icons/clock.svg';
import marker from '../assets/icons/marker.svg';
import phone from '../assets/icons/phone.svg';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            desc: 'Opens 9.00 am to 5.00 pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-secondary to-primary',
        },
        {
            id: 2,
            name: 'Visit our location',
            desc: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgClass: 'bg-neutral',
        },
        {
            id: 3,
            name: 'Contact us now',
            desc: '+000 123 456789',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-secondary to-primary',
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-6 mt-20 md:grid-cols-3">
            {cardData.map((data) => (
                <InfoCard key={data.id} data={data} />
            ))}
        </div>
    );
};

export default InfoCards;
