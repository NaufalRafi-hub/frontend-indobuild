import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './header.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Calendar from '../../Image/cal.png'
import Slider from "react-slick";
import DataSlide from '../Body/data';
import { Link } from 'react-router-dom'
import Arr from '../../Image/Path.png'
import Search from '../../Image/Shape.png'

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
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
            //   initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
          }
        ]
      };
  return (
    <Container  fluid>
        <div className='px-50 wrap-header'>
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
                        <button class="dropbtn footz">
                            {/* <span className='footz sp-dd'> */}
                                Category Event
                                <img className='img-ar 'src={Arr} width='10' height='6'></img>
                            {/* </span> */}
                        </button>
                            <div class="dropdown-content">
                            <a href="#">Event 1</a>
                            <a href="#">Event 2</a>
                            <a href="#">Event 3</a>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <p className='p'>
                        Where do you want to go?
                        </p>
                        <div className=' wrap-search-head d-flex align-items-center'>
                            <img className='imgSearch'src={Search}></img>
                            <input className='search-bar-head'type="text" placeholder="Search Location"></input>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <p className='p'>
                        Fill up your free time!
                        </p>
                        <div className='child-dd'>
                        <button class="dropbtn footz">
                            {/* <span className='footz sp-dd'> */}
                                <img className='img-cal 'src={Calendar} width='13.77' height='14'></img>
                                Pick a Date!
                                <img className='img-ar 'src={Arr} width='10' height='6'></img>
                            {/* </span> */}
                        </button>
                            <div class="dropdown-content">
                            <a href="#">Event 1</a>
                            <a href="#">Event 2</a>
                            <a href="#">Event 3</a>
                            </div>
                        </div>
                    </div>
                    <div className='dashed mt-30'></div>
                    <Button className='mt-30 btn-lets'>Let's Go!</Button>
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
                                <img className='img-lv' src={data.imgLov}></img>
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

    </Container>
  )
}

export default Header