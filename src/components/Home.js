import React from 'react'
import "../styles/Home.css"
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <>
    <Carousel className='m-5'>
      <Carousel.Item className="block" interval={2000}>
        <img
          className="d-flex w-20 mx-auto "
          src="https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/fairy-tales.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="block" interval={2000}>
        <img
          className="d-flex w-20 mx-auto"
          src="https://github.com/benoitvallon/100-best-books/blob/master/static/images/the-book-of-job.jpg?raw=true"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="block " interval={2000}>
        <img
          className="d-flex w-20 mx-auto"
          src="https://github.com/benoitvallon/100-best-books/blob/master/static/images/the-divine-comedy.jpg?raw=true"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='btns-home'>
    <button class="btnHome" role="button"><span class="text">Add Book </span><span>Click Me!</span></button>
    <button class="btnHome" role="button"><span class="text">Book List </span><span>Our Books!</span></button>
    <button class="btnHome" role="button"><span class="text">Login</span><span>Get In !</span></button>
    </div>
    </>
  );
}


    


 

export default Home;
