import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PopConvert from '../leadPages/popConvert';

class ValuationServices extends React.Component {

  state = {
    'showPopConvert': false
};

togglePopConvert = () => {
    this.setState({
        'showPopConvert': !this.state.showPopConvert
    })
}


    render() {
   
      
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
              "Starters' CFO differs from the competition in the simple online processes it has built to help you achieve your valuation needs.",
            
              buttonLabel: 'Find more ',
          },
          {
            profileimg: '/static/images/icons/valutaion2.png',
            title: 'Lorem ipsum dolor sit.',
            detail:
              'You can stop struggling through lists of email attachments sent back and forth for ever! Our digital partners include Zoho Books, Tally, Quickbooks & Razorpay amongst others.        ',
            
              buttonLabel: 'Find more ',
          },
          
          // Add more slides as needed
        ];
      
    
        return (
          
            <>
            <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert}></PopConvert>

            <Slider {...settings}>
          
                {slidesData.map((slide, index) => (
                  <>

                      <div key={index} className="slide3">
                      <img src={slide.profileimg} alt="Profile" />
                      {/* <h2>{title}</h2> */}
                      <p>{slide.detail}</p>
                      <button onClick={this.togglePopConvert} className='card_btn_sli'>{slide.buttonLabel}</button>
                    </div>

                  </>
                ))}
            </Slider>
            </>
        )
    }
}


export default ValuationServices;