import React from 'react';
import PropTypes from 'prop-types';

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DEFAULT_TESTIMONIALS from '../../content/default_testimonials';

class TestimonialsSlider extends React.Component {
    render() {
        const testimonials = this.props.testimonials || DEFAULT_TESTIMONIALS;
        return (
            <>
                <Carousel interval={3000} fade={true}>
                    {
                        testimonials.map((testimonial, i) => {
                            return (
                                <Carousel.Item key={i}>
                                    <Card className="-no-shadow mt-4 border-color__dark">
                                        <Card.Body className="border-color__dark">
                                            <h5>
                                                {testimonial.text}
                                            </h5>
                                            <Row className="mt-4">
                                                <Col style={{ flex: 1 }} className="text-right">
                                                    <img src={testimonial.image} height={'50px'} width={'50px'} style={{ borderRadius: '50%' }}></img>
                                                </Col>
                                                <Col style={{ flex: 9, marginLeft: '-10px' }}>
                                                    <h5 className="color__dark font__15 text-left">{testimonial.name}<br></br><span className="color__grey font__12">{testimonial.title}</span></h5>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Carousel.Item>
                            )
                        })}
                </Carousel>
            </>
        )
    }
}

export default TestimonialsSlider;