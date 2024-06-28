import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./GallerySlider.css";
import FullView from '../../Component/Projects/Eligent/ElegantImages/full-change.png';
import Entrance from '../../Component/Projects/Eligent/ElegantImages/entrance.png';
import Park from '../../Component/Projects/Eligent/ElegantImages/club.png';
import Rock from '../../Component/Projects/Eligent/ElegantImages/park-change.png';
import swimming from '../../Component/Projects/Eligent/ElegantImages/swimm.png';
import Gate from '../../Component/Projects/Eligent/ElegantImages/swimming.png';
import Swim from '../../Component/Projects/Eligent/ElegantImages/rock-change.png';
import ori from "../../images/ori1.png"
import ori1 from "../../images/ori.png"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 892 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 892, min: 768 },
    items: 2 ,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 164 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const sliderImageUrl = [
  { url: ori1, alt: 'Image 1', width: 600, height: 400 },
  { url: ori, alt: 'Image 2', width: 600, height: 400 },
  { url: FullView, alt: 'Full View', width: 600, height: 400 },
  { url: Entrance, alt: 'Entrance', width: 600, height: 400 },
  { url: Park, alt: 'Park', width: 600, height: 400 },
  { url: Rock, alt: 'Rock', width: 600, height: 400 },
  { url: swimming, alt: 'Swimming', width: 600, height: 400 },
  { url: Gate, alt: 'Gate', width: 600, height: 400 },
  { url: Swim, alt: 'Swim', width: 600, height: 400 },
];

const Slider = () => {
  return (
    <div>
      <h2 className="font1 text-center mt-2 mb-4" style={{color:'#3A6958'}}>Project Gallery</h2>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((image, index) => (
          <div className="slider" key={index}>
            <img 
              className="w-100 rounded-0" 
              src={image.url} 
              alt={image.alt} 
              loading="lazy" 
              width={image.width} 
              height={image.height} 
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
