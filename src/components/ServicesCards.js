import React from 'react';
import fluoride from '../assets/images/fluoride.png';
import cavity from '../assets/images/cavity.png';
import whitening from '../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const ServicesCards = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
        },
    ];

    return (
        <div className="mt-24">
            <h1 className="text-xl font-bold text-center text-primary">
                Our services
            </h1>
            <p className="mt-2 mb-20 text-4xl text-center text-neutral">
                Services We Provide
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {serviceData.map((data) => (
                    <ServiceCard key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default ServicesCards;
