import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function StudentprofileUpdate()
{
    let navigate = useNavigate()
    const [studentDetails, setStudentDetails] = useState({})
    

    const HandleSubmit = async (e) =>
    {
        e.preventDefault()
        let result = await axios.put("http://127.0.0.5:3000/student/update", studentDetails)
        console.log(result)
        if (result.status == 200)
        {
            navigate("/StudentHome")
        }
        else
        {
            console.log("something Went Wrong...")
        }

    }
    
    return (
        <div>
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <i className="fa-solid fa-graduation-cap text-5xl"></i>
                        StudentLogin

                    </a>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#" onSubmit={HandleSubmit}>
                                <div>
                               
                                    <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your FirstName</label>
                                    <input type="text" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={studentDetails.fname} required=""

                                        onChange={(e) =>
                                        {
                                            setStudentDetails({ ...studentDetails, fname: e.target.value })
                                            
                                        }} />
                                </div>
                                <div>
                                    <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your LastName</label>
                                    <input type="text" name="lname" id="lname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={studentDetails.lname} onChange={(e)=>{
                                        setStudentDetails({...studentDetails,lname:e.target.value})
                                    }}/> 
                                </div>
                                <div>
                                    <label for="sId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your StudentId</label>
                                    <input type="text" name="sId" id="sId" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={studentDetails.sId} onChange={(e)=>{
                                        setStudentDetails({...studentDetails,sId:e.target.value})
                                    }}/> 
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly value={studentDetails.email} required="" />

                                </div>

                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={studentDetails.password} onChange={(e)=>{
                                        setStudentDetails({...studentDetails,password:e.target.value})
                                    }}/> 
                                </div>
                                <div>
                                    <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your MobileNumber</label>
                                    <input type="text" name="mobile" id="mobile" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required="" value={studentDetails.mobile} onChange={(e)=>{
                                        setStudentDetails({...studentDetails,mobile:e.target.value})
                                    }}/> 
                                </div>
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" class="w-full text-blue-400 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">update the details</button>
                                {/* <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?
                                    <Link to="/SudentLogin"><a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a></Link>
                                </p> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default StudentprofileUpdate

