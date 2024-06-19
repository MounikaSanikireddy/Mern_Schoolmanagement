import React from 'react'
import Navbar from '../Home/Navbar'
import Aside from '../Home/Aside'
import { Authcontext } from '../../Context/Authcontext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function StudentHome() {
  const{setAuth}=useContext(Authcontext)
  const navigate=useNavigate()
  const LogoutHandler=()=>{
    localStorage.removeItem("token")
    setAuth(false)
    navigate("/")



  }
  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <Aside/>
        <section className="flex-1 bg-slate-300">
            <buttton className="bg-blue-500 px-5 py-4 rounded-lg float-right text-white font-bold hover:bg-red-400" onClick={(e)=>{
              LogoutHandler(e)
            }} >
              LOGOUT
              <i className='fa solid fa-right-to-bracket ml-2'></i>
              
            </buttton>
            <Link to="/StudentProfile">
            <div className=' text-red-500 mt-20 h-20 w-42  bg-red-50 text-xl font-bold m-auto flex flex-col justify-center items-center gap-2 md:w-96 md:text-2xl md:h-28 cursor-pointer '>
                Profile
                <i className='fa-solid fa-user'></i>
              </div>
              </Link>
        </section>
      </div>
      
    </div>
  )
}

export default StudentHome
