import React from 'react'
import './body.css'
import Data from './data'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Body = () => {
  return (
    <Container>
    {/* // <div className='container-cust'> */}
        <div className='wrap-body mt-50'>
            <h1 className='judul'>Upcoming Event</h1>
            <div className='outer-wrap-card'>
            {Data.map((data, index) => ( 
                <Link to={`Detailed-Event/${data.title.replaceAll(" ", "-")}/${index}`}>
                <div className='wrap-card rounded-3'>
                    <img src={data.img}></img>
                    <img className='img-lv' src={data.imgLov}></img>
                    <div className='cont-card'>
                        <h1 className='h1'>{data.title}</h1>
                        <h2 className='h2'>{data.date}</h2>
                        <h3 className='h3'>{data.place}</h3>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        </div>
    {/* // </div> */}
    </Container>
  )
}

export default Body