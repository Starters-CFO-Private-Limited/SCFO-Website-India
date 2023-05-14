import React from "react";
import Container from "scfonext/pages/components/site/container";
import Row from "scfonext/pages/components/site/row";
import Col from "scfonext/pages/components/site/col";

export default class NumbersSpeak extends React.Component {
    render() {
        return (
            <div className="w- 100 background-color__blue-gradient">
                <Container>
                    <Row style={{ marginTop: '50px', paddingTop: '50px' }}>
                        <Col className="text-center" md={{ 'span': '8', 'offset': '2' }}>
                            <h3 className="color__white"><b>Numbers speak</b></h3>
                            <br></br>
                            <p className="color__white">
                                We've built our organisation over the years, garnering from the experience of having served hundreds of clients, start ups, Entrepreneurs & SMEs. With a team of over 50 accountants spread over 7 locations in India, we're onboarding a new start up everyday!
                            </p>
                            <br></br>
                            <br></br>
                            <Row className="d-none d-md-flex">
                                <Col className="iconBox">
                                    <i className="fa fa-building icon"></i>
                                    <br></br>
                                    <span className="title">1000+</span>
                                    <br></br>
                                    <span className="description">clients</span>
                                </Col>
                                <Col className="iconBox">
                                    <i className="fa fa-user-tie icon"></i>
                                    <br></br>
                                    <span className="title">50+</span>
                                    <br></br>
                                    <span className="description">experienced accountants</span>
                                </Col>
                                <Col className="iconBox">
                                    <i className="fa fa-check icon"></i>
                                    <br></br>
                                    <span className="title">50+</span>
                                    <br></br>
                                    <span className="description">monthly valuations</span>
                                </Col>
                                <Col className="iconBox">
                                    <i className="fa fa-globe-asia icon"></i>
                                    <br></br>
                                    <span className="title">7</span>
                                    <br></br>
                                    <span className="description">locations in India</span>
                                </Col>
                            </Row>
                            <Row className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                                <Col className="iconBox">
                                    <i className="fa fa-building icon"></i>
                                    <br></br>
                                    <span className="title">2000+</span><br></br>
                                    <span className="description">clients</span>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <i className="fa fa-user-tie icon"></i>
                                    <br></br>
                                    <span className="title">50+</span><br></br>
                                    <span className="description">experienced accountants</span>
                                </Col>
                                <Col className="iconBox">
                                    <i className="fa fa-check icon"></i>
                                    <br></br>
                                    <span className="title">50+</span>
                                    <br></br>
                                    <span className="description">monthly company incorporations</span>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <i className="fa fa-globe-asia icon"></i>
                                    <br></br>
                                    <span className="title">7</span>
                                    <br></br>
                                    <span className="description">locations in India</span>
                                </Col>
                            </Row>
                            <br></br>
                            <br></br>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}
