import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = ({ time, detail, profileimg, profilename }) => (
  <div className="slide2">
    <p>{time}</p>
    <p>{detail}</p>
    <div className="slide2testi">
      <img src={profileimg} alt="Profile" />
      <span>{profilename}</span>
    </div>
  </div>
);

const ValuationSliderTwo = () => {
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
      time: '3 Weeks Ago',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum eligendi rem sequi suscipit ad totam, minima animi inventore maxime iste dolores possimus laborum tempora?',
      profileimg: '/static/images/people/3.jpg',
      profilename: 'Vaibhav Yadav',
    },
    {
      time: '2 Weeks Ago',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum eligendi rem sequi suscipit ad totam, minima animi inventore maxime iste dolores possimus laborum tempora?',
        profileimg: '/static/images/people/3.jpg',
        profilename: 'John Doe',
    },
    {
      time: '2 Weeks Ago',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum eligendi rem sequi suscipit ad totam, minima animi inventore maxime iste dolores possimus laborum tempora?',
        profileimg: '/static/images/people/3.jpg',
        profilename: 'John Doe',
    },
    {
      time: '2 Weeks Ago',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum eligendi rem sequi suscipit ad totam, minima animi inventore maxime iste dolores possimus laborum tempora?',
        profileimg: '/static/images/people/3.jpg',
        profilename: 'John Doe',
    },
    {
      time: '2 Weeks Ago',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum eligendi rem sequi suscipit ad totam, minima animi inventore maxime iste dolores possimus laborum tempora?',
        profileimg: '/static/images/people/3.jpg',
        profilename: 'John Doe',
    },
    {
      time: '2 Weeks Ago',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum eligendi rem sequi suscipit ad totam, minima animi inventore maxime iste dolores possimus laborum tempora?',
        profileimg: '/static/images/people/3.jpg',
        profilename: 'John Doe',
    },
    {
      time: '2 Weeks Ago',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum eligendi rem sequi suscipit ad totam, minima animi inventore maxime iste dolores possimus laborum tempora?',
        profileimg: '/static/images/people/3.jpg',
        profilename: 'John Doe',
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

export default ValuationSliderTwo;