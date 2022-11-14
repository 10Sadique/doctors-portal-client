import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const SignInPage = () => {
    const [error, setError] = useState('');
    const { setLoading, signIn } = useContext(AuthContext);
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

        signIn(data.email, data.password)
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
