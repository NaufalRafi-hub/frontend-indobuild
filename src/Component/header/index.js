import React from 'react'
import { Container } from 'react-bootstrap'
import './header.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Calendar from '../../Image/calendar.png'
import Slider from "react-slick";
import DataSlide from '../Body/data';
import { Link } from 'react-router-dom'

const Header = () => {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <>
         <a
          href=""
          ref={ref}
          onClick={e => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {/* Render custom icon here */}
          {children}
            &#x25bc;
        </a>
        </>
       
        
      ));
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 2,
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
    // <Container>
        <div className=' container-cust px-50 wrap-header'>
            <div className='row'>
                <div className='card px-50 container-cust col-md-4'>
                    <h1 className='judul'>
                        Hey! Looking for an Interesting event? Let us help you find it
                    </h1>
                    <div className='dropdown'>
                        <p className='p'>
                        First, choose a category that you want.
                        </p>
                        <div className='child-dd'>
                            <DropdownButton id="dropdown-basic-button" title="Category Event">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <p className='p'>
                        Where do you want to go?
                        </p>
                    </div>
                    <div className='dropdown'>
                        <p className='p'>
                        Fill up your free time!
                        </p>
                        <div className='child-dd'>
                            <img src={Calendar}></img>
                            <DropdownButton id="dropdown-basic-button" title="Pick a Date!">
                                
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                </div>
                <div className=' wrap-slid-header col-md'>
                    <h1 className='judul high'>Our Highlighted Event</h1>
                    <Slider className='slid-head' {...settings}>
                        {/* <div>
                            <h3>1</h3>
                        </div> */}
                        {DataSlide.map((data, index) => (
                            <Link to={`..Detailed-Event/${data.title.replaceAll(" ", "-")}/${index}`}>
                            <div className='wrap-card rounded-3'>
                                <img src={data.img}></img>
                                <div className='cont-card'>
                                    <h1 className='h1'>{data.title}</h1>
                                    <h2 className='h2'>{data.date}</h2>
                                    <h3 className='h3'>{data.place}</h3>
                                </div>
                            </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>

    // </Container>
  )
}

export default Header