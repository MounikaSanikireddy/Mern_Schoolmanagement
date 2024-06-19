import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

// function Authcontext() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Authcontext
export const Authcontext=createContext()
const AuthcontextAPI=(props)=>{
 let{children}=props
 const[auth,setAuth]=useState(false)
 useEffect(()=>{
    let token=localStorage.getItem("token")
    // console.log(token)
    if(token)
    {
        setAuth(true)
    }
    
 },[])
 return(
    <Authcontext.Provider value={{auth,setAuth}}>
        {children}
    </Authcontext.Provider>
 )
}
export default AuthcontextAPI;