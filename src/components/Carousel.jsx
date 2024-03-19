import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from './Image';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (

    <div className='flex py-6'>

  
    <Carousel activeIndex={index} onSelect={handleSelect} variant='dark'>
      <Carousel.Item>
        <Image url={"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/440bf37588e0418e.png?q=20"}/>
        
      </Carousel.Item>
      <Carousel.Item>
        <Image url={"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/67bdb22c1fd23512.jpg?q=20"}/>
        
      </Carousel.Item>
      <Carousel.Item>
        <Image url={"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b2132b52f8b2c7dd.jpg?q=20"}/>
        
      </Carousel.Item>
    </Carousel>

    </div>
  );
}

export default ControlledCarousel;