import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class Trust extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={4} className="justify-content-end d-xs-flex d-sm-flex d-md-none d-lg-none d-xl-none text-center">
                        <img src="/static/images/sample/cta_card.webp" className="cta_card__image"></img>
                        <div className="hsg-cta-block__circles" data-background-image="horizontal-circles-pink"></div>
                        <br></br><br></br>
                    </Col>
                    <Col md={8}>
                        <h3 className="color__dark"><b>Thousands of businesses work with us</b></h3>
                        <p className="color__grey font__15">
                            <br></br>
                            Don't take our word for it! Start your trial today, or schedule a call with us to understand how we can help you, or explore case studies.
                            <br></br><br></br>
                            Getting started with your new business has never been easier.
                            <br></br><br></br>
                            <Button className="btn__secondary large on_white" onClick={this.togglePopConvert}>Get Started</Button>
                            <br></br>
                            <span className="color__grey font__10">
                                Get started with a 30% discount for new start ups registered in 2022.
                            </span>
                        </p>
                    </Col>
                    <Col md={4} className="justify-content-end d-none d-md-flex">
                        <img src="/static/images/people/indian_business_woman.jpg" className="cta_card__image"></img>
                        <div className="hsg-cta-block__circles" data-background-image="horizontal-circles-pink"></div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Trust;