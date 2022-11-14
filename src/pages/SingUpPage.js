import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const SingUpPage = () => {
    const [error, setError] = useState('');
    const { signUp, updateUser, setLoading } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // navigation variables
    const navigate = useNavigate();
    const location = useLocation();
    const to = location.state?.from?.pathname || '/';

    const handleSignIn = (data) => {
        console.log(data);
        signUp(data.email, data.password)
            .then((result) => {
                const user = result.user;
                setError('');

                // setting username
                updateUser(data.name)
                    .then(() => {
                        setError('');
                        console.log('Username added!');
                    })
                    .catch((err) => {
                        setError(err.message);
                        console.error(err.message);
                    });

                console.log(user);
                navigate(to, { replace: true });
            })
            .catch((err) => {
                setError(err.message);
                console.error(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
        toast.error(error.slice(9, -1));
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
                                    message:
                                        'Password must have a number, a uppercase letter and a special character',
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="mt-2 text-error w-full" role="alert">
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
