import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { useForm } from "react-hook-form"
import Model from './Model';
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    const navigate = useNavigate();
    return (
        <div className='max-w-md bg-white shadow w-full mx-auto text-center justify-center my-20 rounded-2xl'>
            <div className=" modal-action flex flex-col justify-center">
                <form className="card-body " method='dialog' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-black font-bold text-lg text-center'>Create a account</h1>
                    <Link to="/"
                        className="btn btn-sm btn-circle btn-ghost ">

                        ✕
                    </Link>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="texi" placeholder="Full Name" className="input input-bordered text-black bg-white" required  {...register("Name")} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered text-black bg-white" required  {...register("Email")} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">New Password</span>
                        </label>
                        <input type="password" placeholder="New Password" className="input bg-white text-black input-bordered" required  {...register("Password")} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Cunform Password</span>
                        </label>
                        <input type="password" placeholder="Cunform Password" className="input text-black bg-white input-bordered" required  {...register("Password")} />
                    </div>
                    <div className="form-control mt-6">
                        <input type='submit' value='Signup' className="btn btn-primary" />
                    </div>
                    <p className='text-center my-2'>Already have an account?
                        <button className='underline text-red' onClick={() => {
                            document.getElementById('my_modal_5').showModal()
                            navigate('/');
                        } } >Login!</button>
                    </p>

                    
                </form>

                {/* Login using Social Media */}
                <div className='text-center'>
                        <button className="btn btn-circle btn-outline m-2 ">
                            <IoLogoGoogle />
                        </button>
                        <button className="btn btn-circle btn-outline m-2">
                            <IoLogoGithub />
                        </button>
                        <button className="btn btn-circle btn-outline m-2">
                            <FaInstagram />
                        </button> 
                </div>



            </div>
            {/* <Model/> */}
        </div>

    )
}

export default Signup


