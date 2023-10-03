import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'react-modal-video/scss/modal-video.scss';
import 'react-modal-video/css/modal-video.min.css';
import ModalVideo from 'react-modal-video';

  class ValuationVideoSlider extends React.Component {

    constructor() {
      super();
      this.state = {
        isOpen: false,
        video_id: 'KGTnYCuXCzY',
        
      };
      this.openModal = this.openModal.bind(this);
    }
  
    openModal() {
      this.setState({ isOpen: true });
      // console.log(event);
    }

   


    render() {

      const handleClick = event => {
      //  console.log(event.target.dataset);
      this.setState({ isOpen: true });
       
        this.setState({ video_id: event.target.getAttribute('data-test-id') });

        // 👇️ "my-btn"
        console.log(event.target.getAttribute('data-test-id'));
    
      }

      const settings = {
        arrows: true, // Use 'arrows' instead of 'arrow'
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
          {
 
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              infinite: true
            }
       
          }, {
       
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              dots: true
            }
       
          }, 
          // {
       
          //   breakpoint: 300,
          //   settings: "unslick" // destroys slick
       
          // }

          // {
          //   breakpoint: 768, // Mobile breakpoint
          //   settings: {
          //     slidesToShow: 1,
          //   },
          //   breakpoint: 992, // Mobile breakpoint
          //   settings: {
          //     slidesToShow: 2,
          //   },
          // },
        ],
      };


      const slidesData = [
        {
          title: 'Financial Modelling',
        // buttonLabel: 'Read',
        video_Id: 'sbRX4Ilb4bE',
        videoUrl: 'https://www.youtube.com/embed/sbRX4Ilb4bE',

        },

        {
            title: 'What is a Financial Model',
          // buttonLabel: 'Read',
            video_Id: 'oKJFmJCqWZ8',
            videoUrl: 'https://www.youtube.com/embed/oKJFmJCqWZ8',
      
        },
        
        {
            title: 'Funding Process',
            video_Id: '-z5AfrJdVhE',
            videoUrl: 'https://www.youtube.com/embed/-z5AfrJdVhE',
        },

        {
            title: 'Types of Valuation Reports',
            video_Id: '4CYHfUgnwKQ',
            videoUrl: 'https://www.youtube.com/embed/4CYHfUgnwKQ',
        },
        
        {
            title: 'Valuation of Start-Ups',
            video_Id: 'KGTnYCuXCzY',
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
        <>
        <ModalVideo
          channel="youtube"
          autoplay='1'
          isOpen={this.state.isOpen}
          videoId={this.state.video_id}
          onClose={() => this.setState({ isOpen: false })}
        />

        <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div key={index}  className="slide">
            <h6>{slide.title}</h6>
            <img   onClick={handleClick} data-test-id={slide.video_Id} width="320"  src={'http://img.youtube.com/vi/'+slide.video_Id+'/hqdefault.jpg'} title="YouTube Video" alt="YouTube Video" />
            <span  onClick={handleClick} data-test-id={slide.video_Id} className="playbutton"></span>

            {/* <iframe
            width="320"
            height="560" 
            src={slide.videoUrl}  
            title={slide.title} 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>

            </iframe> */}

            </div>
          ))}
        </Slider>
        </>
      );

    }
  }

export default ValuationVideoSlider;