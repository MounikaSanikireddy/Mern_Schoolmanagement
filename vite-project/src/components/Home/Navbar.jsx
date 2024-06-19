import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar()
{
    let [dropdown, setDropdown] = useState(false)
    return (
        <div className='h-20 flex bg-gray-500 justify-between text-xl text-white'>
            <img src='https://education.sakshi.com/sites/default/files/images/2023/08/05/admissions-images-rguktcet-1691224748.jpg' className='rounded-full border-2 h-20 w-20 border-slate-400' />
            <div className=' list-none gap-10 justify-center items-center hidden lg:flex'>
                <li className='hover:bg-stone-300 rounded-md cursor-pointer'>HOME</li>
                <li className='hover:bg-stone-300 rounded-md  cursor-pointer'>ABOUT</li>
                <li className='hover:bg-stone-300 rounded-md cursor-pointer'>PRODUCT</li>
                <li className='hover:bg-stone-300 rounded-md cursor-pointer'>CONTACT US</li>
            </div>
            <div className='py-6 px-10'>
                <Link to="/SudentLogin"><button className='hover:bg-blue-400 rounded-lg  hidden lg:flex'>LOGIN</button></Link>
                <div className='text-3xl p-2 border-gray-300 lg:hidden relative' onClick={() => setDropdown((prev) => !prev)}>
                    {dropdown ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                    {dropdown && <div className=' list-none gap-10 text-lg absolute-left bg-slate-200'>
                        <li className='hover:bg-stone-300 rounded-md cursor-pointer'>HOME</li>
                        <li className='hover:bg-stone-300 rounded-md  cursor-pointer'>ABOUT</li>
                        <li className='hover:bg-stone-300 rounded-md cursor-pointer'>PRODUCT</li>
                        <li className='hover:bg-stone-300 rounded-md cursor-pointer'>CONTACT US</li>
                    </div>
                    }
                </div>


            </div>

        </div>
    )
}

export default Navbar
