import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = ({ title, price,detail,subtitle, buttonLabel }) => (
  <div className="plan_price_bo">
     
    <h4 className='weight__600'>{title}</h4>
    <h6>{price}</h6>
    <ul>
      <li>{detail}</li>
      <li>{detail}</li>
      <li>{detail}</li>
      <li>{detail}</li>
    </ul>
    <p className='text-justify'>{subtitle}</p>
    <button type="button" className="btn__primary  mb-3 btn btn-primary">{buttonLabel}</button>
  </div>
);

const ConsultantPlans = () => {
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
      title: 'Customized Plan',
      price: '',
      detail:'Get Startup Valuationb Certificate',
      detail:'Get Startup Valuationb Certificate',
      detail:'Get Startup Valuationb Certificate',
      detail:'Get Startup Valuationb Certificate',
      subtitle:'Advance Payment to get started with Starters CFO Consultant',
      buttonLabel: 'Get Started',
    },
    {
      title: 'Basic Plan',
      price: 'Rs. 30,000/-',
      detail:'Get Startup Valuationb Certificate',
      detail:'Get Startup Valuationb Certificate',
      detail:'Get Startup Valuationb Certificate',
      detail:'Get Startup Valuationb Certificate',
      subtitle:'Advance Payment to get started with Starters CFO Consultant',
      buttonLabel: 'Rs. 30,000/-',
    },
    {
      title: 'Advanced Plan ',
      price: 'Rs. 60,000/-',
      detail:'Get Startup Valuationb Certificate',
      detail:'Get Startup Valuationb Certificate',
      detail:'Get Startup Valuationb Certificate',
      detail:'Get Startup Valuationb Certificate',
      subtitle:'Advance Payment to get started with Starters CFO Consultant',
      buttonLabel: 'Rs. 6,000/-',
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

export default ConsultantPlans;