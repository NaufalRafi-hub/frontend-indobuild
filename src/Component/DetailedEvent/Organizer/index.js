import React from 'react'
import {  Button, Container } from 'react-bootstrap'
import './org.css'
// import Bai from '../../../Image/bai.png'

const Organizer = (props) => {
    const { data } = props;
  return (
    <Container>
        <div className='mt-50'>
            <h1 className='judul'>Organizer Profile</h1>
            <div className='mt-20 row'>
                <div className='col-md-2'>
                    <img src={data.details[0].organizerImg}></img>
                </div>
                <div className='ml-50 col-md'>
                    <h1 className='judul'>
                        {data.details[0].organizerName}
                    </h1>
                    <h2 className='h2'>{data.details[0].organizerDet}
                    <span className='more'>See more</span>
                    </h2>
                    <Button className='mt-30 btn-fol'>
                        Follow
                    </Button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Organizer