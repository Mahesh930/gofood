import React from 'react'
import Banner from '../../Components/Banner'
import Categories from './Categories.js'
import SpecialDishes from './SpecialDishes.js'
import Testimonials from './Testimonials.js'
import OurServices from './OurServices.js'

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-violet-200 to-blue-700 ">
      <Banner/>
      <Categories/>
      <SpecialDishes/>
      <Testimonials/>
      <OurServices/>
    </div> 
  )
}

export default Home
