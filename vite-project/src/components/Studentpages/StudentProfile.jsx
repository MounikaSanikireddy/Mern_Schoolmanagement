import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link,useNavigate} from 'react-router-dom'


function StudentProfile()
{
  let navigate = useNavigate()
  const [studentDetails, setStudentDetails] = useState({fname:"",lname:"",email:"",mobile:"",password:"",sId:""})
  useEffect(() =>
  {
    let token = localStorage.getItem("token")
    async function getData()
    {
      let response = await axios.get(`http://127.0.0.5:3000/student/${token}`)
      let data = await response.data
      
      setStudentDetails(data)

    }
    getData()
  }, [])
  const handleDelete = async () =>
  {
    let response = await axios.post("http://127.0.0.5:3000/student/delete",
      { email: studentDetails.email })
    if (response.status == 200)
    {
      console.log(studentDetails.email)
      localStorage.removeItem("token")
      navigate("/")
    }
  }
  return (
    <div className='bg-slate-300 min-h-screen pt-16'>
      <div className='text-4xl text-red-400 text-center font-bold hover:text-yellow-500 '>
        STUDENTS PROFILE PAGE
      </div>
      <form className='flex flex-col justify-center items-center gap-7 bg-slate-600 w-[50%] m-auto mt-10'>
        <div className='mt-10'>
          <label htmlFor='' className='text-2xl text-white'>FirstName:</label>
          <input type="text" value={studentDetails.fname} className='w-[200px] h-10 text=lg focus:outline-none' readOnly />
        </div>
        <div>
          <label htmlFor='' className='text-2xl text-white' >LastName:</label>
          <input type="text" value={studentDetails.lname} className='w-[200px] h-10 text=lg focus:outline-none' readOnly />
        </div>
        <div>
          <label htmlFor='' className='text-2xl text-white'>Email:</label>
          <input type="text" value={studentDetails.email} className='w-[200px] h-10 text=lg focus:outline-none' readOnly />
        </div>
        <div>
          <label htmlFor='' className='text-2xl text-white'>Mobile:</label>
          <input type="text" value={studentDetails.mobile} className='w-[200px] h-10 text=lg focus:outline-none' readOnly />
        </div>
        {/* <div className='flex gap-10'>
          <label htmlFor='' className='text-2l' >Gender</label>
          <input type="radio" name='gender' className='w-5' checked={studentDetails.gender=="male"} readOnly></input>Male
          <input type="radio" name='gender' className='w-5' checked={studentDetails.gender=='female'} readonly/>female

        </div> */}
        <div className='flex gap-4 items-end'>
          <Link to="/StudentprofileUpdate"><button>Update</button></Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </form>

    </div>
  )
}

export default StudentProfile
