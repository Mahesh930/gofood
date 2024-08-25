import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <div className='section-container '>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="./images/home/Testimonials/testimonials.avif" alt="" className='rounded-[100px]' />
        </div>
        <div className="md:w-1/2">
          <div className="text-left">
            <p className='subtitle'>Testimonials</p>
            <h3 className='title text-gray-800'>Know What Our Customers Say About Us</h3>
            <blockquote className="my-5 text-slate-900 text-secondary leading-[30px]">"I Had The Great Exprience In Ordering The Food From This App. The Customers Service Is Best Provided Here!"</blockquote>

            {/* Avtar */}
            <div className="flex item-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse ">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
                  </div>
                </div>
              </div>

              <div className='space-y-1'>
                <h5 className='text-large text-slate-900 font-semibold'>Customer FeedBack</h5>
                <div className='flex items-center gap-2' >
                  <FaStar className="text-yellow-400"/>
                  
                  <span className='font-medium text-slate-900'>4.9</span> {" "}
                  <span className='text-slate-900'>(9.3k reviews)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Testimonials
