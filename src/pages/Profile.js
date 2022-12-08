import React from 'react'

function Profile({user}) {
  return (
    <div>
        {user ? 
        <h1>Logged in user</h1>

        : 

        <h1>user Not Logged In</h1>
        
    }
    </div>
  )
}

export default Profile