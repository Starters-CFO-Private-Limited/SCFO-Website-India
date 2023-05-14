import React, { Component } from 'react';

import Container from "scfonext/pages/components/site/container";
import Row from "scfonext/pages/components/site/row";
import Col from "scfonext/pages/components/site/col";


class PerksV2 extends Component {
    render() {
        return (
            <Container>
                <Row className="hero__text">
                    <Col>
                        <h4 className="color__dark text-center font__40">Perks & Benefits</h4>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ 'span': '3' }} sm={{ 'span': '6' }} className="text-center">
                        <div className="reliable_txt" style={{ marginBottom: '20px' }}>
                            <img src="/static/images/partners/gcp.png" height="75px"></img>
                            <br></br>
                            <p className="color__grey">
                                Google Cloud Platform Referral Partner. <br></br>
                                Up to $100K in free credits.
                            </p>
                        </div>
                        <br></br>
                    </Col>
                    <Col md={{ 'span': '3' }} sm={{ 'span': '6' }} className="text-center">
                        <div className="reliable_txt" style={{ marginBottom: '20px' }}>
                            <img src="/static/images/partners/aws.png" height="75px"></img>
                            <br></br>
                            <p className="color__grey">
                                Amazon Web Services Referral Partner. <br></br>
                                Up to $5K in free credits.
                            </p>
                        </div>
                        <br></br>
                    </Col>
                    <Col md={{ 'span': '3' }} sm={{ 'span': '6' }} className="text-center">
                        <div className="reliable_txt" style={{ marginTop: '20px' }}>
                            <img src="/static/images/partners/rzp.png" height="45px" style={{ marginBottom: '20px' }}></img>
                            <br></br>
                            <p className="color__grey">
                                Razorpay Partner. <br></br>
                                Discounted transaction rates of 2%.
                            </p>
                        </div>
                        <br></br>
                    </Col>
                    <Col md={{ 'span': '3' }} sm={{ 'span': '6' }} className="text-center">
                        <div className="reliable_txt" style={{ marginTop: '20px' }}>
                            <img src="/static/images/partners/instaspaces.png" height="45px" style={{ marginBottom: '20px' }}></img>
                            <br></br>
                            <p className="color__grey">
                                Instaspaces Partner. <br></br>
                                Get virtual addresses for your business registration for ₹1000 / month.
                            </p>
                        </div>
                        <br></br>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default PerksV2;