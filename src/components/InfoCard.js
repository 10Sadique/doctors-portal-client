import React from 'react';

const InfoCard = ({ data }) => {
    return (
        <div
            className={`shadow-xl card card-side ${data.bgClass} px-5 h-full lg:h-auto  flex items-center`}
        >
            <figure>
                <img src={data.icon} alt="" />
            </figure>
            <div className="text-white card-body">
                <h2 className="card-title">{data.name}</h2>
                <p>{data.desc}</p>
            </div>
        </div>
    );
};

export default InfoCard;
