import React from 'react'
import './body.css'
import Data from './data'

const Body = () => {
  return (
    <div className='container-cust'>
        <div className='wrap-body'>
            {Data.map((data, index) => (
                <div className='wrap-card rounded-5'>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Body