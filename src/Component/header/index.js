import React from 'react'
import { Container } from 'react-bootstrap'
import './header.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Calendar from '../../Image/calendar.png'

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
  return (
    // <Container>
        <div className=' container-cust px-50'>
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
                <div className='col-md'>

                </div>
            </div>
        </div>

    // </Container>
  )
}

export default Header