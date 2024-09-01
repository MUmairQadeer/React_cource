import React from 'react'
import { useParams } from 'react-router-dom'

function User(){
    const {userid} =useParams()
return (

    <div className='bg-green-600 text-white p-3 m-2 text-center bold text-3xl' 
       
    >
        User: {userid}
    </div>
)
}
export default User