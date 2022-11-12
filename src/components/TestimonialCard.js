import React from 'react';

const TestimonialCard = ({ data }) => {
    return (
        <div className="shadow-xl card bg-base-100">
            <div className="card-body">
                <p>{data.desc}</p>
                <div className="items-center gap-5 mt-10 card-actions">
                    <img
                        className="w-[60px] lg:w-[60px] border-[3px] border-primary rounded-full"
                        src={data.image}
                        alt=""
                    />
                    <div>
                        <h2 className="card-title">{data.name}</h2>
                        <p>{data.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
