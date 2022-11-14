import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SingUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSignIn = (data) => {
        console.log(data);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="rounded-2xl shadow-xl p-7 md:w-96">
                <h1 className="text-xl mb-8 text-center">Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Name
                            </span>
                        </label>
                        <input
                            className="input input-bordered w-full"
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
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Email
                            </span>
                        </label>
                        <input
                            className="input input-bordered w-full"
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
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Password
                            </span>
                        </label>
                        <input
                            className="input input-bordered w-full"
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be 6 characters',
                                },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                    message: 'Enter a strong password',
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="mt-2 text-error" role="alert">
                                {errors.password?.message}
                            </p>
                        )}
                    </div>
                    <input
                        type="submit"
                        className="btn w-full mt-5"
                        value={`Sign Up`}
                    />
                </form>
                <p className="text-center text-xs my-3">
                    Already have an account?{' '}
                    <Link className="text-primary" to={`/signin`}>
                        Sign In
                    </Link>
                </p>
                <div className="divider">OR</div>
                <button className="btn w-full btn-outline btn-primary">
                    Contnue with Google
                </button>
            </div>
        </div>
    );
};

export default SingUpPage;
