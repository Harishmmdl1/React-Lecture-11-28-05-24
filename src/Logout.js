import React, { useContext } from 'react'
import { AuthContext } from './App'
import { useNavigate } from "react-router-dom";

const Logout = () => {

  const {setIsAuth} = useContext(AuthContext)
  const navigate = useNavigate();
  return (
    <div>
      <button className='btn btn-danger' onClick={() => {
        setIsAuth(false)
        navigate("/")
      }}>Logout</button>
    </div>
  )
}

export default Logout