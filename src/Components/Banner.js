import React from 'react'
import '../App.css'

const Banner = () => {
    return (
        <div className="section-container  min-h-screen  ">
            {/* text stuff */}
            <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="md:w-1/2 space-y-8 px-4 text-center md:text-left">
                    <h2 className='md:text-5xl  text-gray-800 font-bold leading-snug'>
                        Get the tastiest and freshest <span className='text-blue'>Food</span> ever
                    </h2>
                    <p className='text-xl text-gray-800'>
                        Where each bite gives the taste like a Home food
                    </p>
                    <button className='btn bg-blue-600 hover:bg-blue-700 px-8 py-4 font-semibold text-white rounded-full'>
                        Order Now
                    </button>
                </div>
                {/* Image stuff */}
                <div className="md:w-1/2 flex flex-col items-center mt-16">
                    <img src="/images/home/banner.gif" alt="Delicious Food" className='rounded-[100px] w-full md:w-4/4' />
                    <div className='flex flex-col md:flex-row items-center justify-center mt-6 md:-mt-14 gap-4 md:gap-8 '>
                        <div className='flex flex-col items-center bg-transparent py-2 px-3 rounded-2xl shadow-md w-32 -mt-6 w-1/4 md:2/4'>
                            <img src="/images/home/category/img3.png" alt="Meal" className='rounded-2xl' />
                            <div className='mt-4 space-y-1'>
                                <h5 className='font-medium bg-gray-300 text-black rounded py-1 px-2'>Meal</h5>
                                <div className="rating rating-sm flex justify-center">
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" readOnly />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" readOnly defaultChecked />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" readOnly />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" readOnly />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" readOnly />
                                </div>
                                <p className='text-white'>$50.50</p>
                            </div>
                        </div>

                        <div className='flex flex-col items-center bg-transparent py-2 px-3 rounded-2xl shadow-md w-32 w-1/4 md:2/4'>
                            <img src="/images/home/category/img2.png" alt="Meal" className='rounded-2xl ' />
                            <div className='mt-4 space-y-1'>
                                <h5 className='font-medium bg-gray-300 text-black rounded py-1 px-2'>Meal</h5>
                                <div className="rating rating-sm flex justify-center">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                                </div>
                                <p className='text-white'>$50.50</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
