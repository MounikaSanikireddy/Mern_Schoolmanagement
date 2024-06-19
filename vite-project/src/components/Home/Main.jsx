import React from 'react'
import { Link } from 'react-router-dom'
//import {Link} from 'react'
function Main() {
  return (
    <div className="bg-slate-300 flex-grow justify-center items-center">
     <Link to="/SudentLogin">
     <div className='bg-white h-28 w-56 text-3xl font-bold text-blue-400 flex  flex-col m-auto mt-5 md:items-center hover:bg-blue-400 hover:text-white'>
        <h1>Students</h1>
        <i className="fa-solid fa-graduation-cap text-5xl"></i>
        </div>
     </Link>
      
   
      
      
      
    </div>
  )
}

export default Main
