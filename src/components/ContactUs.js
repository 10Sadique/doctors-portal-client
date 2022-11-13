import React from 'react';
import appointment from '../assets/images/appointment.png';
import Button from './Button';

const ContactUs = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-center gap-10 mt-32 py-14"
            style={{ background: `url(${appointment})` }}
        >
            <div>
                <h1 className="text-xl font-bold text-center text-primary">
                    Contact Us
                </h1>
                <p className="mt-2 text-4xl text-center text-white">
                    Stay connected with us{' '}
                </p>
            </div>
            <div className="flex flex-col items-center w-full gap-5 ">
                <input
                    type="text"
                    placeholder="Your Email"
                    className="w-full max-w-[300px] lg:max-w-md input"
                />
                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full max-w-[300px] lg:max-w-md input"
                />
                <textarea
                    className="w-full max-w-[300px] lg:max-w-md textarea"
                    placeholder="Your Message"
                ></textarea>
                <Button text={`Submit`} />
            </div>
        </div>
    );
};

export default ContactUs;
