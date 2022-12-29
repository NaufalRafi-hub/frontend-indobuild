import React from 'react'
import Body from '../Component/Body'
import Footer from '../Component/Footer'
import Header from '../Component/header'
import Nav from '../Component/Nav'

const Home = () => {
  return (
    <>
        <Nav />
        <section className='bg-header'>
            <Header />
        </section>
        <section>
            <Body />
        </section>
        <Footer />
    </>

  )
}

export default Home