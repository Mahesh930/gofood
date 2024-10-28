import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { AuthContext } from '../context/Auth';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser } = useContext(AuthContext);
    const {loginWithGmail}= useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                // alert("Account creation successful");
                document.getElementById('my_modal_5').close()
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }

    return (
        <div className='max-w-md bg-white shadow w-full mx-auto text-center justify-center my-20 rounded-2xl'>
            <div className="modal-action flex flex-col justify-center">
                <form className="card-body" method="dialog" onSubmit={handleSubmit(onSubmit)} >
                    <h1 className='text-black font-bold text-lg text-center'>Create an account</h1>
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost">✕</Link>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered text-black bg-white"
                            required
                            {...register("email")}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">New Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input bg-white text-black input-bordered"
                            required
                            {...register("password")}
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    <div className="form-control mt-6">
                        <input type='submit' value='Signup' className="btn btn-primary" />
                    </div>
                    <p className='text-center my-2'>
                        Already have an account?
                        <button className='underline text-red' onClick={() => {
                            document.getElementById("my_modal_5").showModal()
                            navigate('/')
                        }

                        }>Login!</button>
                    </p>
                </form>

                {/* Login using Social Media */}
                <div className='text-center'>
                    <button className="btn btn-circle btn-outline m-2 " onClick={loginWithGmail} >
                        <IoLogoGoogle  />
                    </button>
                    <button className="btn btn-circle btn-outline m-2">
                        <IoLogoGithub />
                    </button>
                    <button className="btn btn-circle btn-outline m-2">
                        <FaInstagram />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup
