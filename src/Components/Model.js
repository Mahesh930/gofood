import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { AuthContext } from '../context/Auth';

const Model = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const [signupWithGmail] = useContext(AuthContext);
    console.log(signupWithGmail);
    

    const onSubmit = (data) => console.log(data)

    const handleLogin = () => {
        signupWithGmail().then((result) => {
            const user = result.user;
            alert("Login Successfull!!");
        }).catch((error) => {
            console.error("Error");
        });
    }

    return (
        <div>
            <dialog id="my_modal_5" className="modal text-white modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <div className=" modal-action flex flex-col justify-center -mt-4">
                        <form className="card-body " method='dialog' onSubmit={handleSubmit(onSubmit)}>
                            <h1 className='text-white font-bold text-lg text-center'>Please Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered text-white" required  {...register("Email")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input text-white input-bordered" required  {...register("Password")} />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value='Login' className="btn btn-primary" />
                                <div className='text-center'> <br />Or <br /></div>
                            </div>

                            <p className='text-center my-2'>
                                Don't have an account? <Link className='underline text-red'
                                    onClick={() => document.getElementById('my_modal_5').close()}
                                    to={'/signup'}>SignUp!</Link>
                            </p>
                            <button htmlFor="my_modal_5"
                                onClick={() => document.getElementById('my_modal_5').close()}
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        {/* Login using Social Media */}
                        <div className='text-center'>
                            <button className="btn btn-circle btn-outline m-4" onClick={handleLogin}>
                                <IoLogoGoogle />
                            </button>
                            <button className="btn btn-circle btn-outline m-4">
                                <IoLogoGithub />
                            </button>
                            <button className="btn btn-circle btn-outline m-4">
                                <FaInstagram />
                            </button>
                        </div>

                    </div>
                </div >
            </dialog >
        </div >
    )
}

export default Model
