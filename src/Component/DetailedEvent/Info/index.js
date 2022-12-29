import React from 'react'
import { Container } from 'react-bootstrap';
import Calend from '../../../Image/calendar.png'
import Ticket from '../../../Image/ticket.png'
import Location from '../../../Image/loc.png'

const Info = (props) => {
    const { data } = props;
  return (
    <Container>
        <div className='row mt-50'>
            <div className='col-md'>
                <div className='d-flex gap-3'>
                    <img src={Calend} width='24' height='27'></img>
                    <span>
                    <h2 className='h2' >{data.details[0].hari}</h2>
                    <h3 className='h3'>{data.details[0].time}</h3>
                    </span>
                    <div className='dotted ms-auto'></div>
                </div>
            </div>
            <div className='col-md'>
                <div className='d-flex gap-3'>
                    <img src={Location} width='19.5' height='27'></img>
                    <span>
                    <h2 className='h2'>{data.details[0].lokasi}</h2>
                    <h3 className='h3'>{data.details[0].detLoc}</h3>
                    <p className='map blue'>Show Map</p>
                    </span>
                    <div className='dotted'></div>
                </div>
            </div>
            <div className='col-md'>
            <div className='d-flex gap-3'>
                    <img src={Ticket} width='15' height='27'></img>
                    <span>
                    <h2 className='h2'>{data.details[0].ticket}</h2>
                    <h3 className='h3'>{data.details[0].detTic}</h3>
                    </span>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Info