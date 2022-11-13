import React from 'react';
import Button from './Button';

const AppontmentOption = ({ option }) => {
    const { name, slots } = option;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title justify-center text-primary">
                    {name}
                </h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>
                    {slots.length} {slots.length > 1 ? 'spaces' : 'space'}{' '}
                    available
                </p>
                <div className="card-actions justify-center mt-5">
                    <Button text={`Book Appointment`} />
                </div>
            </div>
        </div>
    );
};

export default AppontmentOption;
