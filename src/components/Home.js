import React from 'react'
import "../styles/Home.css"
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
    <Carousel className='m-5 position-relative'>
      <Carousel.Item className="block" interval={3000}>
        <img
          className="desk-img col-lg-12 col-sm-12 col-12"
          src="https://cdn.discordapp.com/attachments/783499342010777631/1030668480862748672/banner1.jpg"
          alt="Welcome Sign"
        />
        <img
          className="mobile-img col-lg-12 col-sm-12 col-12"
          src="https://cdn.discordapp.com/attachments/783499342010777631/1032012354906492978/template1.png"
          alt="Welcome Sign"
        />    
      </Carousel.Item>
      <Carousel.Item className="block" interval={3000}>
        <img
          className="desk-img col-lg-12 col-sm-12 col-12"
          src="https://cdn.discordapp.com/attachments/783499342010777631/1030636690580193370/banner2.jpg"
          alt="How to Use Our App"
        />
        <img
          className="mobile-img col-lg-12 col-sm-12 col-12"
          src="https://cdn.discordapp.com/attachments/783499342010777631/1032012355317551114/template2.png"
          alt="How to Use Our App"
        />   
      </Carousel.Item>
      <Carousel.Item className="block " interval={3000}>
        <img
          className="desk-img col-lg-12 col-sm-12 col-12"
          src="https://cdn.discordapp.com/attachments/783499342010777631/1030666186888851476/meetourteam.jpg"
          alt="Our Team"
        />
        <img
          className="mobile-img col-lg-12 col-sm-12 col-12"
          src="https://cdn.discordapp.com/attachments/783499342010777631/1032012355619520612/template3c.png"
          alt="Our Team"
        />        
      </Carousel.Item>
    </Carousel>
    <div className='btns-home'>
    <Link to="/createbook"><button className="btnHome" ><span className="text">Add Book </span><span>Click Me!</span></button></Link>
    <Link to="/booklist"><button className="btnHome" ><span className="text">Book List </span><span>Our Books!</span></button></Link>
    <button className="btnHome"><span className="text">Login</span><span>Get In !</span></button>
    </div>
    </>
  );
}


    


 

export default Home;
