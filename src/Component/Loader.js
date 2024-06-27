import React from 'react'
import lazy from '../images/about-us1.png'

const Loader = () => {
  return (
    <div>
       <div  className='position-absolute top-50 start-50 translate-middle'>
        
         {/* <h2 id='head' className='animationda'>Groavy</h2> */}
         <img src={lazy} alt='LazyImage' className='w-100'/>
        
       </div>
    </div>
  )
}

export default Loader
