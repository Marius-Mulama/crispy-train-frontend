import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

function Authentication({bool}) {
  return (
    <div className='grid h-screen place-items-center'>
        {

            // Show either login or signup depending on a condition flag passed as a prop
            //if the flag is true return the login page else the signup
            // TODO : Some refactoring needs to be done to this code

            bool ? <Login/> : <Signup/> 
    
        }
    </div>
    
  )
}

export default Authentication