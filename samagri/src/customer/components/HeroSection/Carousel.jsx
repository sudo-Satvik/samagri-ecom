import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarouselData } from './CarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';

const Carousel = () => {
    const items = CarouselData.map((item) => <img className='cursor-pointer z-10 w-full' src={item.image} alt={item.alt}/>)

return (
    <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
    />
)
}

export default Carousel;