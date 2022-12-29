import React from 'react'
import { Container } from 'react-bootstrap'
// import data from '../../Body/data'

const About = (props) => {
    const { data } = props;
  return (
    <Container>
        <div className='container-cust mt-50'>
            <h1 className='judul'>About The Event</h1>
            <h2 className='mt-20 h2'>{data.details[0].about}</h2>
            <p className='mt-10 more'>Read more</p>
        </div>
    </Container>
  )
}

export default About