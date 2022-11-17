import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const SingUpPage = () => {
    const [error, setError] = useState('');
    const { signUp, updateUser, setLoading, googleSignIn } =
        useContext(AuthContext);
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
                        saveUser(data.name, data.email);
                    })
                    .catch((err) => {
                        setError(err.message);
                        console.error(err.message);
                        toast.error(
                            error.slice(9, -1) || 'Something went wrong!'
                        );
                    });

                console.log(user);
            })
            .catch((err) => {
                setError(err.message);
                console.error(err.message);
                toast.error(error.slice(9, -1));
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setError('');
                console.log(user);
                navigate(to, { replace: true });
            })
            .catch((err) => {
                setError(err.message);
                console.error(err.message);
                toast.error(error.slice(9, -1) || 'Something went wrong!');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // save user info to db
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                getUserToken(email);
            });
    };

    // get user token
    const getUserToken = (email) => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate(to, { replace: true });
                }
            });
    };

    return (
        <div className="flex items-center justify-center">
            <div className="shadow-xl rounded-2xl p-7 md:w-96">
                <h1 className="mb-8 text-xl text-center">Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <div className="w-full form-control">
                        <label className="label">
                            <span className="font-semibold label-text">
                                Name
                            </span>
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
                            <span className="font-semibold label-text">
                                Email
                            </span>
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
                                Password
                            </span>
                        </label>
                        <input
                            className="w-full input input-bordered"
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
                            <p className="w-full mt-2 text-error" role="alert">
                                {errors.password?.message}
                            </p>
                        )}
                    </div>
                    <input
                        type="submit"
                        className="w-full mt-5 btn"
                        value={`Sign Up`}
                    />
                </form>
                <p className="my-3 text-xs text-center">
                    Already have an account?{' '}
                    <Link className="text-primary" to={`/signin`}>
                        Sign In
                    </Link>
                </p>
                <div className="divider">OR</div>
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full btn btn-outline btn-primary"
                >
                    Contnue with Google
                </button>
            </div>
        </div>
    );
};

export default SingUpPage;
