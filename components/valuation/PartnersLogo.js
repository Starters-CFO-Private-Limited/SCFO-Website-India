import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = ({ partnerlogo }) => (
  <div className="part_logo">
      <img src={partnerlogo} alt="partner logo" />
  </div>
);

const PartnersLogo = () => {
  
  
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
         
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true
        }
   
      }, 
      // {
   
      //   breakpoint: 1500,
      //   settings: "unslick" // destroys slick
   
      // },

    //   {
    //     breakpoint: 768, // Mobile breakpoint
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
    // responsive: [
    //   {
    //     breakpoint: 992, // Mobile breakpoint
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    ],
  };


  const slidesData = [
    {
      partnerlogo: '/static/images/logos/zoho.png',
    },
    {
      partnerlogo: '/static/images/logos/tally.png',
    },
    {
      partnerlogo: '/static/images/logos/logo_1.png',
    },
    {
      partnerlogo: '/static/images/logos/logo_2.png',
    },
    {
      partnerlogo: '/static/images/logos/logo_3.png',
    },
    {
      partnerlogo: '/static/images/logos/logo_9.png',
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

export default PartnersLogo;