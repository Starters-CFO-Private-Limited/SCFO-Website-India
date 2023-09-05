import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PopConvert from '../leadPages/popConvert';

class ConsultantPlans extends React.Component {

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
          title: 'Customized Plan',
          price: 'INR 25,000/-',
          detail:'Get Startup Valuationb Certificate',
          detail:'Get Startup Valuationb Certificate',
          subtitle:'Registered Valuer/ CA Certified Valuation Report',
          buttonLabel: 'INR 25,000/-',
        },
        {
          title: 'Basic Plan',
          price: 'INR 30,000/-',
          detail:'Get Startup Valuationb Certificate',
          detail:'Get Startup Valuationb Certificate',
          subtitle:'Valuation Report for Investment Pitching',
          buttonLabel: 'INR 30,000/-',
        },
        {
          title: 'Advanced Plan ',
          price: 'INR 60,000/-',
          detail:'Get Startup Valuationb Certificate',
          detail:'Get Startup Valuationb Certificate',
          subtitle:'Financial Model + Valuation',
          buttonLabel: 'INR 60,000/-',
        },
        
        
        // Add more slides as needed
      ];

    
        return (
          
            <>
            <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert}></PopConvert>

            <Slider {...settings}>
              {slidesData.map((slide, index) => (
                <>
              <div key={index} className="plan_price_bo">
                  <h5 className='weight__600'>{slide.subtitle}</h5>
                  {/* <h6>{price}</h6> */}
                  {/* <ul>
                  <li>{detail}</li>
                  <li>{detail}</li>
                  <li>{detail}</li>
                  <li>{detail}</li>
                  </ul> */}
                  {/* <p className='text-justify'>{subtitle}</p> */}
                  <button type="button" onClick={this.togglePopConvert} className="btn__primary  mb-3 btn btn-primary">{slide.buttonLabel}</button>
              </div>
             </>
              ))}
            </Slider>
            </>
        )
    }
}


export default ConsultantPlans;