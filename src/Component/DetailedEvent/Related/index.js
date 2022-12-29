import React from 'react'
import { Container } from 'react-bootstrap';

const Related = (props) => {
    const { data } = props;
  return (
    <Container>
        <div className='container-cust mt-50'>
            <h1 className='judul'>Related Events</h1>
        </div>
    </Container>
  )
}

export default Related