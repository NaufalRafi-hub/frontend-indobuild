import React,{useEffect} from 'react'
import { Container } from 'react-bootstrap';
import About from '../Component/DetailedEvent/About';
import Head from '../Component/DetailedEvent/Head';
import Info from '../Component/DetailedEvent/Info';
import Organizer from '../Component/DetailedEvent/Organizer';
import Related from '../Component/DetailedEvent/Related';
import Data from '../Component/Body/data'
import { useParams } from "react-router-dom";

const Event = () => {
  const { title, id } = new useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <div className='bg-blur'>
          <Container>
            <Head data={Data[id]}/>
            <Info data={Data[id]}/>
            <div className=' mt-50 dashed'></div>
            <About data={Data[id]}/>
            <div className=' mt-50 dashed'></div>
            <Organizer data={Data[id]}/>
            <div className=' mt-50 dashed'></div>
            <Related data={Data[id]}/>
          </Container>
        </div>
      </section>
        
    </>
  )
}

export default Event