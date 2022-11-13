import React from 'react';
import quote from '../assets/icons/quote.svg';
import people1 from '../assets/images/people1.png';
import people2 from '../assets/images/people2.png';
import people3 from '../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const testimonialData = [
        {
            id: 1,
            name: 'Winson Herry',
            address: 'California',
            image: people1,
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            id: 2,
            name: 'Winson Herry',
            address: 'California',
            image: people2,
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            id: 3,
            name: 'Winson Herry',
            address: 'California',
            image: people3,
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
    ];

    return (
        <div className="mt-20">
            <div className="relative">
                <div className="text-center lg:text-left">
                    <h1 className="text-xl font-bold text-primary">
                        Testimonial
                    </h1>
                    <p className="lg:text-4xl text-3xl text-neutral mt-2.5 ">
                        What Our Patients Says
                    </p>
                </div>

                <img
                    className="absolute right-0 z-10 hidden w-48 lg:block top-10 lg:top-0"
                    src={quote}
                    alt=""
                />
            </div>
            <div className="grid grid-cols-1 gap-6 mt-10 lg:mt-24 lg:grid-cols-3">
                {testimonialData.map((data) => (
                    <TestimonialCard key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
