import React from 'react'
import res from './res.jpeg'
import back from './back.jpeg'
import back2 from './back2.jpeg'

export default function info() {
  return (
    
     <div className='row-menu row justify-content-center'>
       <div className='col-md-4 text-center'>
            <img src={res} width='100%'/>
        </div>
       <div className='col-md-4 text-center'>
         <img src={back} width='100%'/>
        </div>
        <div className='col-md-4 text-center'>
         <img src={back2} width='100%'/>
         </div>

    </div>
  )
}

