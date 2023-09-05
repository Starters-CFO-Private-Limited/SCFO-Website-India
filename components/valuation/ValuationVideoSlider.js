import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = ({ title, videoUrl  }) => (
  <div className="slide">
    <h6>{title}</h6>
    <iframe
    width="320"
    height="560" 
    src={videoUrl}  
    title={title} 
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>

    </iframe>


    {/* <button className='card_btn_sli'>{buttonLabel}</button> */}
  </div>
);

const ValuationVideoSlider = () => {
  const settings = {
    arrows: true, // Use 'arrows' instead of 'arrow'
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
        breakpoint: 992, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const slidesData = [
    {
      title: 'Financial Modelling',
     // buttonLabel: 'Read',
    //  videoUrl: '/static/video/Financial-Modelling.mp4',
      videoUrl: 'https://www.youtube.com/embed/sbRX4Ilb4bE',

    },

    {
        title: 'What is a Financial Model',
       // buttonLabel: 'Read',
      //  videoUrl: '/static/video/Financial-Modelling.mp4',
        videoUrl: 'https://www.youtube.com/embed/oKJFmJCqWZ8',
  
    },
    
    {
        title: 'Funding Process',
        videoUrl: 'https://www.youtube.com/embed/-z5AfrJdVhE',
    },

    {
        title: 'Types of Valuation Reports',
        videoUrl: 'https://www.youtube.com/embed/4CYHfUgnwKQ',
    },
    
    {
        title: 'Valuation of Start-Ups',
        videoUrl: 'https://www.youtube.com/embed/KGTnYCuXCzY',
    },
    

    // {
    //   title: 'What is the valuation of startup', // Change the titles to avoid duplicates
    //  // buttonLabel: 'Read',
    //   videoUrl: 'https://www.youtube.com/embed/jFgV9zcDYFc',
    // },
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

export default ValuationVideoSlider;