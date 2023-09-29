import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Col from 'react-bootstrap/Col';

const Slide = ({ title }) => (
  <div className="info_check text-center ">
       {/* <Col className='info_check' sm={12} md={2}> */}

       <p><i className="fa-solid fa-circle-check color__scfo"></i>&nbsp; {title}</p>
       {/* <p><i className="fa-solid fa-circle-check color__scfo"></i>&nbsp; {title}</p> */}


{/* </Col> */}
  </div>
);

const RegulatoryPurposesText = () => {
  
  
  const settings = {
    dots: false,
    arrows: false, // Use 'arrows' instead of 'arrow'
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
      title: "IBBI Registered Valuer Valuation",
    },
    {
      title: "Merchant Banker Valuation",
    },
    {
      title: "CA Valuation",
    },
    {
      title: "ESOP Valuation",
    },
    {
        title: "Accounting Standard Valuation",
    },
   
    // Add more slides as needed
  ];

  return (
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <Slide  key={index} {...slide} />
      ))}
    </Slider>
  );
};

export default RegulatoryPurposesText;