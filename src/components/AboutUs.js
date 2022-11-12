import React from 'react';
import treatment from '../assets/images/treatment.png';
import Button from './Button';

const AboutUs = () => {
    return (
        <div className="mt-24 lg:px-32 hero">
            <div className="flex-col gap-10 lg:gap-14 hero-content lg:flex-row">
                <img
                    src={treatment}
                    className="w-full rounded-lg shadow-2xl lg:w-1/2"
                    alt=""
                />
                <div>
                    <h1 className="text-5xl font-bold">
                        Exceptional Dental Care, on Your Terms
                    </h1>
                    <p className="py-6">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsumis
                        that it has a more-or-less normal distribution of
                        letters,as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page
                    </p>
                    <Button text="Get Started" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
