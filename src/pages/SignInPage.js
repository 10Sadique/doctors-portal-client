import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useToken from '../hooks/useToken';

const SignInPage = () => {
    const [error, setError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const { setLoading, signIn, googleSignIn } = useContext(AuthContext);
    const [token] = useToken(loginUserEmail);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // navigation variables
    const navigate = useNavigate();
    const location = useLocation();
    const to = location.state?.from?.pathname || '/';

    if (token) {
        navigate(to, { replace: true });
    }

    const handleSignIn = (data) => {
        console.log(data);

        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                setError('');
                console.log(user);
                setLoginUserEmail(user.email);
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

    return (
        <div className="flex items-center justify-center">
            <div className="shadow-xl rounded-2xl p-7 md:w-96">
                <h1 className="mb-8 text-xl text-center">Sign In</h1>
                <form onSubmit={handleSubmit(handleSignIn)}>
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
                                required: 'Email Address is required',
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
                        className="w-full btn"
                        value={`Sign In`}
                    />
                </form>
                <p className="my-3 text-xs text-center">
                    New to Doctors Portal?{' '}
                    <Link className="text-primary" to={`/signup`}>
                        Create new account
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

export default SignInPage;
