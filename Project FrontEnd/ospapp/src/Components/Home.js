import React from 'react';
import { Carousel } from 'react-bootstrap';
import NavBar from './NavBar';
import NavLink from 'react-bootstrap';
const CarouselContainer = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div><img src="/image/edu.jpg" style={{width:"100vw"}}></img></div>
    </div>
  )
}

export default CarouselContainer;