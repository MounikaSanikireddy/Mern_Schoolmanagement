import React from 'react'
import Hom1 from './components/Home/Hom1'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import SudentLogin from './components/Studentpages/SudentLogin'
import StudentSign from './components/Studentpages/StudentSign'
import StudentHome from './components/Studentpages/StudentHome'
import StudentProfile from './components/Studentpages/StudentProfile'
import StudentprofileUpdate from './components/Studentpages/StudentprofileUpdate'

// import Practice from './components/Home/Practice'
// import Home from './components/Home/Hom1'

// import Navbar from './components/Home/Navbar'
// // import Hom1 from './components/Home/Hom1'
// import Aside from './components/Home/Aside'
// import Main from './components/Home/Main'

// import SudentLogin from './components/Studentpages/SudentLogin'
// import About from './components/About'
// import Product from './components/Product'
// import Contact from './components/Contact'
// import Navbar from './components/Navbar'

function App()
{
  return (
    // <div className='max h-full max-w-full flex justify-center  bg-red-300'>
    //  {/* <div className='bg-orange-400 text-blue-100 '>welcome</div> */}
    //  <div className='h-44 flex w-44 bg-slate-500  items-center justify-center '>
    //       helloworld
    //  </div>
    // </div>
    <>
      {/* <BrowserRouter/>
      <Routes>
        <Route path="/" element={<Hom1/>}></Route>
        // {/* <Route path="/SudentLogin" element={<SudentLogin/>}></Route> */}
       {/* </Routes>
      <BrowserRouter/> */} 
      {/* <Navbar/> */}
  
    <Routes>
      <Route path="/" element={<Hom1/>}></Route>
      <Route path="/SudentLogin" element={<SudentLogin/>}></Route>
      <Route path="/StudentSign" element={<StudentSign/>}></Route>
      <Route path="/SudentLogin" element={<StudentSign/>}></Route>
      <Route path="/StudentHome" element={<StudentHome/>}></Route>
      <Route path="/StudentProfile" element={<StudentProfile/>}></Route>
      <Route path="/StudentprofileUpdate" element={<StudentprofileUpdate/>}></Route>
    </Routes>
  
     {/* <Hom1/>  */}
     

    </>
  )
}

export default App
