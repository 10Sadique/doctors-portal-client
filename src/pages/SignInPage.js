import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignInPage = () => {
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
                <h1 className="text-xl mb-8 text-center">Sign In</h1>
                <form onSubmit={handleSubmit(handleSignIn)}>
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
                                required: 'Email Address is required',
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
                            })}
                        />
                        {errors.password && (
                            <p className="mt-2 text-error" role="alert">
                                {errors.password?.message}
                            </p>
                        )}
                        <label className="label">
                            <span className="label-text-alt">
                                Forgot Password ?
                            </span>
                        </label>
                    </div>
                    <input
                        type="submit"
                        className="btn w-full"
                        value={`Sign In`}
                    />
                </form>
                <p className="text-center text-xs my-3">
                    New to Doctors Portal?{' '}
                    <Link className="text-primary" to={`/signup`}>
                        Create new account
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

export default SignInPage;
