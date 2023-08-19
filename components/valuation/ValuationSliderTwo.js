import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
// const Slide = ({ time, detail, profileimg, profilename }) => (
//   <div className="slide2">
//     <p>{time}</p>
//     <p>{detail}</p>
//     <div className="slide2testi">
//       <img src={profileimg} alt="Profile" />
//       <span>{profilename}</span>
//     </div>
//   </div>
// );


const Slide = ({ time, detail, profileimg, profilename }) => (
  <div className="slide2">

    <div className="mt-2 d-md-flex d-lg-flex slide2testi d-xl-flex row">
     
     <div className="d-flex  slide2testi align-items-end  width_auto col-md-3 col-sm-3 ">
       <img src={profileimg} alt="Profile" ></img>
     </div>
     <div className="d-flex justify-content-left text-margin flex-column width_auto col-md-9 col-sm-9">
         <h6 className="color__grey d-block"><strong>{profilename}</strong></h6>
         <div className="color__scfo d-flex  font__12 flex-row"> {time}</div>
     </div>
   </div>
      <div className="color__star d-flex mt-2  flex-row">
          <i className="fa fa-star d-block mr-1 font__14" aria-hidden="true"></i>
          <i className="fa fa-star d-block mr-1 font__14" aria-hidden="true"></i>
          <i className="fa fa-star d-block mr-1 font__14" aria-hidden="true"></i>
          <i className="fa fa-star d-block mr-1 font__14" aria-hidden="true"></i>
          <i className="fa fa-star d-block mr-1 font__14" aria-hidden="true"></i>
        </div>

        <p className="mt-2">{detail}
        <br/>
        <Link href="/startup-valuation-india1" ><a className='read-more'>Read more</a></Link>
        </p>
       
   
        <div className="d-md-flex d-lg-flex d-xl-flex row">
     
          <div className="d-flex align-items-end width_auto col-md-2 col-sm-2">
            <img src="/static/images/icons/google.png" height="35px"></img>
          </div>
          <div className="d-flex justify-content-left text-margin font__13  width_auto flex-column col-md-9 col-sm-9">
              <span className="color__grey d-block">Posted on</span>
              <div className="color__scfo d-flex flex-row">
               <Link href="https://www.google.com/maps"><a target="_blank">Google</a></Link>
               </div>
          </div>
                
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