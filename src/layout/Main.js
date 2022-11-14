import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-[360px] md:max-w-3xl lg:max-w-6xl mx-auto my-14">
                <Outlet />
            </div>
            <Footer />
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default Main;
