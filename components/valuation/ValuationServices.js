import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = ({ title, detail, profileimg, buttonLabel }) => (
  <div className="slide3">
     <img src={profileimg} alt="Profile" />
    <h2>{title}</h2>
    <p>{detail}</p>
    <button className='card_btn_sli'>{buttonLabel}</button>
  </div>
);

const ValuationServices = () => {
  const settings = {
    dots: false,
    arrows: true, // Use 'arrows' instead of 'arrow'
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    responsive: [
      {
        breakpoint: 992, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const slidesData = [
    {
      profileimg: '/static/images/icons/valutaion2.png',
      title: 'Lorem ipsum dolor sit.',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum eligendi rem sequi suscipit ad totam, minima animi inventore maxime iste dolores possimus laborum tempora?',
      
        buttonLabel: 'Find more ',
    },
    {
      profileimg: '/static/images/icons/valutaion2.png',
      title: 'Lorem ipsum dolor sit.',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum eligendi rem sequi suscipit ad totam, minima animi inventore maxime iste dolores possimus laborum tempora?',
      
        buttonLabel: 'Find more ',
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

export default ValuationServices;