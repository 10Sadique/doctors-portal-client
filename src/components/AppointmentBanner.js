import React from 'react';
import { DayPicker } from 'react-day-picker';
import bg from '../assets/images/bg.png';
import chair from '../assets/images/chair.png';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    const css = `
  .my-selected:not([disabled]) { 
    background-color: #0FCFEC;
    color: #fff;
  }
`;

    return (
        <div className="relative mb-24">
            <div className="hero">
                <div className="flex-col gap-6 hero-content lg:flex-row-reverse">
                    <img
                        src={chair}
                        className="rounded-lg shadow-2xl lg:w-1/2"
                        alt=""
                    />
                    <div className="w-full flex items-center justify-center">
                        <style>{css}</style>
                        <DayPicker
                            className="bg-white p-5 rounded-2xl shadow-2xl"
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            modifiersClassNames={{ selected: 'my-selected' }}
                            // footer={footer}
                        />
                    </div>
                </div>
            </div>
            {/* <div className="lg:mt-[200px]" /> */}
            <div className="absolute left-0 hidden w-full overflow-hidden lg:block top-4 -z-50">
                <img className="w-3/5 opacity-30" src={bg} alt="" />
            </div>
        </div>
    );
};

export default AppointmentBanner;
