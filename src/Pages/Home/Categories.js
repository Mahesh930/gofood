import React from 'react'

const categoriesItems = [
    { id: 1, title: "Break Fast", desc: "{23 dishes}", image: "images/home/category/vadapao.jpg" },
    { id: 2, title: "Snacks", desc: "{35 dishes}", image: "images/home/category/snack.webp" },
    { id: 3, title: "Lunch", desc: "{25 dishes}", image: "images/home/category/lunch.jpg" },
    { id: 4, title: "Deaner", desc: "{53 dishes}", image: "images/home/category/Deaner.webp" },
    { id: 5, title: "Check all", desc: "{533 dishes}", image: "images/home/category/image4.png" }
]


const Categories = () => {


    return (
        <div className='section-container py-8'>
            <div className='text-center'>
                <p className='subtitle'>Customer Favourites</p>
                <h2 className='title text-gray-800'>Populer Categories</h2>
            </div>

            {/* Categories cards */}
            <div className='flex flex-col sm:flex-row flex-wrap gap-5 justify-around items-center mt-12'>
                {
                    categoriesItems.map((item,i) => (
                        <div className='card text-center cursor-pointer hover:-translate-y-6 duration-300 transition-all' key={i}>
                            <div className='shadow-full-dark rounded-md bg-white py-6 p-x-5 w-70 mx-auto card-image flex w-full mx-auto items-center justify-center'>
                                <img src={item.image} alt={item.title} className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28' />
                            </div>
                            <div className='mt-2'>
                                <h5 className='card-title text-gray-800'>{item.title}</h5>
                                <p className='card-desc text-stone-800'>{item.desc}</p>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default Categories
