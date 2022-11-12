import React from 'react';

const ServiceCard = ({ data }) => {
    return (
        <div className="shadow-xl card bg-base-100">
            <figure className="px-10 pt-10">
                <img src={data.icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="items-center text-center card-body">
                <h2 className="card-title">{data.name}</h2>
                <p>{data.desc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
