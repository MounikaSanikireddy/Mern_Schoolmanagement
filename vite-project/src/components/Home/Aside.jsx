import React from 'react'

function Aside()
{
  return (
  
      <div>

        <img src='https://1.bp.blogspot.com/-gGqUe7QonQk/X4_UBTRxr0I/AAAAAAAAGZo/nAhlV2makSMImkUcmLnZuFKIiwNmT02vQCLcBGAsYHQ/s0/images.jpg' className='h-20 w-22 m-5 rounded-full ' />
        <div className='m-5 p-2 list-none flex flex-col gap-10 '>
          <li className='hover:text-red-300 p-2'>Academics</li>
          <li className='hover:text-red-300 p-2'>Administration</li>
          <li className='hover:text-red-300 p-2'>Careers</li>
          <li className='hover:text-red-300 p-2'>Students</li>
          <li className='hover:text-red-300 p-2'>Contact Us</li>
        </div>
      </div>

    
  )
}

export default Aside
