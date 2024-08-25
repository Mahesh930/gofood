import React from 'react'

const servicesList = [
    {
        id: 1,
        title: "catering",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, soluta!",
        image: "./images/home/category/image1.webp"
    },
    {
        id: 2,
        title: "Fas Deliveryt",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, soluta!",
        image: "./images/home/category/image2.jpg"
    },
    {
        id: 3,
        title: "Online Ordering",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, soluta!",
        image: "./images/home/category/image3.webp"
    },
    {
        id: 4,
        title: "Coupons",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, soluta!",
        image: "./images/home/category/image4.png"
    },
    {
        id: 5,
        title: "Offline",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, soluta!",
        image: "./images/home/category/image5.jpg"
    },
    {
        id: 6,
        title: "All",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, soluta!",
        image: "./images/home/category/lunch.jpg"
    }
];

const OurServices = () => {
    return (
        <div className='section-container my-16  '>
            <div className='section-container'>
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="md:w-1/2">
                        <div className="text-left">
                            <p className='subtitle'>Our Services</p>
                            <h3 className='title text-gray-800'>Check Out Our Services</h3>
                            <p className="my-5 text-[#fef3c7] text-secondary leading-[30px]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                                accusamus numquam molestias doloribus, vel corrupti odio voluptatem voluptatum blanditiis quam recusandae asperiores
                                temporibus, error ipsa. Dolorum at nihil itaque dolores? "I Had The Great Exprience In Ordering The Food From This App.
                                The Customers Service Is Best Provided Here!"
                            </p>

                            <button className='btn bg-blue text-white px-8 py-3 rounded-full '>Explore</button>

                        </div>
                    </div>
                    <div className="md:w-1/2">
                        {/* <img src="./images/home/Testimonials/testimonials.avif" alt="" className='rounded-full' /> */}

                        <div className='grid sm:grid-cols-2 grid-cols1 gap-8 items-center'>
                            {
                                servicesList.map((services) => (
                                    <div key={services.id} className='shadow-md rounded-sm py-5 px-5 text-center space-y-2 text-blue cursor-pointer 
      hover:border-indigo-600 transition duration-200 hover:border'>
                                        <img src={services.image} alt="" className='mx-auto rounded-full w-72 h-56' />
                                        <h5 className='pt-3 font-semibold'>{services.title}</h5>
                                        <p className='text-[#1e1b4b]'>{services.des}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurServices
