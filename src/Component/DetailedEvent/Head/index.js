import React from 'react'
import { Button, Container } from 'react-bootstrap';
import './head.css'
import Share from '../../../Image/share.png'
import Love from '../../../Image/love.png'

const Head = (props) => {
    const { data } = props;
  return (
    <Container>
        <div className='row mt-70 wrap-head'>
            <div className='p-0 col-md-8'>
                <img className='img-head' src={data.img}></img>
            </div>
            <div className='cont-head-left col-md p-4 justify-content-center'>
                <h1 className='judul'>{data.details[0].head}</h1>
                <h3 className='h3'>{data.details[0].subhead}</h3>
                <div className='d-flex gap-4 mt-30'>
                    <img src={Share} width='24'></img>
                    <img src={Love} width='24'></img>
                </div>
                <Button className='btn-tic'> Book Ticket</Button>
            </div>
        </div>

    </Container>
  )
}

export default Head