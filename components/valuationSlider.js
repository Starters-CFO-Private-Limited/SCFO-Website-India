import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = ({ title, buttonLabel }) => (
  <div className="slide">
    <h3>{title}</h3>
    <button className='card_btn_sli'>{buttonLabel}</button>
  </div>
);

const ValuationSlider = () => {
  const settings = {
    arrows: true, // Use 'arrows' instead of 'arrow'
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
        breakpoint: 992, // Mobile breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };


    

  
  const slidesData = [
    {
      title: 'Cost of Duplication',
      buttonLabel: 'Read',
    },
    {
      title: 'Cost of Duplication',
      buttonLabel: 'Read',
    },
    {
      title: 'Cost of Duplication', // Change the titles to avoid duplicates
      buttonLabel: 'Read',
    },
    {
      title: 'Cost of Duplication', // Change the titles to avoid duplicates
      buttonLabel: 'Read',
    },
    // Add more slides as needed
  ];

  return (
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <Slide key={index} {...slide} />
      ))}
    </Slider>
  );
};

export default ValuationSlider;