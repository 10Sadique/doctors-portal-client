import React from 'react';
import chair from '../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="relative">
            <div className="hero">
                <div className="flex-col gap-6 hero-content lg:flex-row-reverse">
                    <img
                        src={chair}
                        className="rounded-lg shadow-2xl lg:w-1/2"
                        alt=""
                    />
                    <div className="w-full">
                        <h1 className="text-5xl font-bold">
                            Your New Smile Starts Here
                        </h1>
                        <p className="py-6 lg:pr-4">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                        </p>
                        <button className="text-white btn btn-primary bg-gradient-to-r from-secondary to-primary">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="lg:mt-[200px]" /> */}
            <div className="absolute left-0 hidden w-full overflow-hidden lg:block top-4 -z-10">
                <img className="opacity-5" src={chair} alt="" />
            </div>
        </div>
    );
};

export default Banner;
