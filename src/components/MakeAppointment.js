import React from 'react';
import doctor from '../assets/images/doctor.png';
import appointment from '../assets/images/appointment.png';
import Button from './Button';

const MakeAppointment = () => {
    return (
        <div
            className="relative mt-32"
            style={{ background: `url(${appointment})` }}
        >
            <div className="hero">
                <div className="flex-col text-white lg:py-0 hero-content lg:flex-row">
                    <img
                        src={doctor}
                        className="hidden -mt-32 rounded-lg lg:w-1/2 lg:block"
                        alt=""
                    />
                    <div>
                        <h3 className="mb-5 text-xl font-bold text-secondary">
                            Appointment
                        </h3>
                        <h1 className="text-5xl font-bold">
                            Make an appointment Today
                        </h1>
                        <p className="py-6">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsumis that it has a more-or-less normal
                            distribution of letters,as opposed to using 'Content
                            here, content here', making it look like readable
                            English. Many desktop publishing packages and web
                            page
                        </p>
                        <Button text="Appointment" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;
