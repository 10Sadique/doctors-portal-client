import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const imgHostingKey = process.env.REACT_APP_imgbb_apiKey;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();

        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specilty: data.specilty,
                        imageURL: imgData.data.url,
                    };

                    fetch(
                        `https://doctors-portal-server-ten.vercel.app/doctors`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                authorization: `Bearer ${localStorage.getItem(
                                    'accessToken'
                                )}`,
                            },
                            body: JSON.stringify(doctor),
                        }
                    )
                        .then((res) => res.json())
                        .then((resData) => {
                            console.log(resData);
                            if (resData.acknowledged) {
                                toast.success('Doctor added to database');
                                navigate('/dashboard/manageDoctors');
                            }
                        });
                }
            });
    };

    const url =
        'https://doctors-portal-server-ten.vercel.app/appointmentSpecialty';
    const { data: specialities, isLoading } = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();

            return data;
        },
    });

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-96">
                <progress className="progress progress-primary w-56"></progress>
            </div>
        );
    }

    return (
        <div className="px-10 py-10 lg:py-14">
            <h1 className="mb-10 text-2xl text-neutral">Add Doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="w-full form-control">
                    <label className="label">
                        <span className="font-semibold label-text">Name</span>
                    </label>
                    <input
                        className="w-full input input-bordered"
                        type="text"
                        {...register('name', {
                            required: 'Please enter you name',
                        })}
                    />
                    {errors.name && (
                        <p className="mt-2 text-error" role="alert">
                            {errors.name?.message}
                        </p>
                    )}
                </div>
                <div className="w-full form-control">
                    <label className="label">
                        <span className="font-semibold label-text">Email</span>
                    </label>
                    <input
                        className="w-full input input-bordered"
                        type="email"
                        {...register('email', {
                            required: 'Please enter your email',
                        })}
                    />
                    {errors.email && (
                        <p className="mt-2 text-error" role="alert">
                            {errors.email?.message}
                        </p>
                    )}
                </div>
                <div className="w-full form-control">
                    <label className="label">
                        <span className="font-semibold label-text">
                            Speciality
                        </span>
                    </label>
                    <select
                        {...register('specilty')}
                        className="select select-bordered w-full"
                        defaultValue={'default'}
                    >
                        <option disabled value={'default'}>
                            Pick a speciality
                        </option>
                        {specialities.map((specilty) => (
                            <option key={specilty._id}>{specilty.name}</option>
                        ))}
                    </select>
                </div>
                <div className="w-full form-control">
                    <label className="label">
                        <span className="font-semibold label-text">Image</span>
                    </label>
                    <input
                        className="w-full file-input file-input-bordered"
                        type="file"
                        {...register('image', {
                            required: 'Please enter you name',
                        })}
                    />
                    {errors.name && (
                        <p className="mt-2 text-error" role="alert">
                            {errors.name?.message}
                        </p>
                    )}
                </div>
                <input
                    type="submit"
                    className="w-full mt-5 btn"
                    value={`Add Doctor`}
                />
            </form>
        </div>
    );
};

export default AddDoctor;
