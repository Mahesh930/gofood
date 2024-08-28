import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import "../App.css"
import Footer from '../Components/Footer'
import { AuthContext } from '../context/Auth'
import LodingSpinner from '../Components/LodingSpinner'

const Main = () => {

  const { user, loading } = useContext(AuthContext);

  return (
    <div>
      {
        loading ? <LodingSpinner/> : <div>
          <Navbar />
          <div className='min-h-screen'>
            <Outlet />
          </div>
          <Footer />
        </div>
      }

    </div>
  )
}

export default Main
