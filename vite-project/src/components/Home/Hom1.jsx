import React, { useContext } from 'react'
import Navbar from './Navbar'
import Aside from './Aside'
import Main from './Main'
import Footer from './Footer'
import { Authcontext } from '../../Context/Authcontext'
import { useNavigate } from 'react-router-dom'

function Hom1()
{
  const { auth } = useContext(Authcontext)
  // console.log(auth)
  const navigate = useNavigate()
  return (
    <>

      {auth ? navigate("/StudentHome") : <div>
        <Navbar />
        <div className='flex'>
          <Aside />
          <Main />

        </div>
        <Footer />
      </div>}



    </>
  )
}

export default Hom1
