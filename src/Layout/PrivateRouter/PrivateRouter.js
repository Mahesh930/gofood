import React, { Children, useContext } from 'react'
import { AuthContext } from '../../context/Auth'
import { Navigate, useLocation } from 'react-router-dom';
import LodingSpinner from '../../Components/LodingSpinner';


const PrivateRouter = ({ children }) => {
  const { user, createUser, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LodingSpinner />
  }
  if (user) {
    return children
  }
  return (
    <Navigate to='/signup' state={{ from: location }} replace ></Navigate>
  )
}

export default PrivateRouter
