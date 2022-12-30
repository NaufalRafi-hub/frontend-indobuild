import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import DataSlid from '../../Body/data';
import { Link } from 'react-router-dom'
import './related.css'


const Related = (props) => {
    const { data } = props;
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Container>
        <div className='container-cust mt-50 mb-50'>
            <h1 className='judul'>Related Events</h1>
            <div>
            <Slider {...settings}>
            {/* <div>
                <h3>1</h3>
            </div> */}
            {DataSlid.map((data, index) => (
                <Link to={`..Detailed-Event/${data.title.replaceAll(" ", "-")}/${index}`}>
                <div className='wrap-card rounded-3'>
                    <img src={data.img}></img>
                    <div className='row cont-card2'>
                        <div className='col-10 cont-left-card'>
                            <h1 className='h1'>{data.title}</h1>
                            <h2 className='h2'>{data.date}</h2>
                            <h3 className='h3'>{data.place}</h3>
                           
                        </div>
                        <div className='col'>
                            <img className='img-lv2' src={data.imgLov}></img>
                        </div>
                    </div>
                </div>
                </Link>
            ))}
            </Slider>
      </div>
        </div>
    </Container>
  )
}

export default Related