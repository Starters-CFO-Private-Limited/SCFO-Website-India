import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../components/site/layout';
import PopConvert from '../components/leadPages/popConvert';
import ExitConvert from '../components/leadPages/exitConvert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FormValidation } from 'calidation';
import Carousel from 'react-bootstrap/Carousel';
import Meta from '../components/site/meta';
import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGE_NUMBER } from '../constants';
import FormIframe from '../components/leadPages/formIframe';

class MSMERegistration extends React.Component {

    togglePopConvert() {
        this.setState({
            'showPopConvert': !this.state.showPopConvert,
            'mobile': '',
        })
    }

    constructor(props, context) {
        super(props, context);

        this.togglePopConvert = this.togglePopConvert.bind(this);

        this.state = {
            'showPopConvert': false,
            'buttonText': 'Submit',
            'convertSuccess': ''
        }
    }

    render() {

    
        return (

            <>
                <Meta title="MSME - Udyog Aadhar Registration" description="MSME - Udyog Aadhar Registration Online. Cheapest, Fastest. Free Perks and gifts included."></Meta>

                <Layout promobanner={true}>

                    <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert} product={'msme'} mobile={this.state.mobile}></PopConvert>
                    <ExitConvert></ExitConvert>

                    <div className="w-100">
                        <div className="-white">
                            <Container>
                                <Row className="hero__text">
                                    <Col className="text-center">
                                        <h4 className="title color__dark text-center">MSME Registration @ ₹ 1,999/-</h4>
                                        <span className="color__light-grey text-center font--15">MSME Registration Helpline <a href={`tel:${WHATSAPP_MESSAGE_NUMBER}`} className="font__15 color__light-grey">{WHATSAPP_DISPLAY_NUMBER}</a></span>
                                        <br></br>
                                        <br></br>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Card className="mt-md-5">
                                            <Card.Body style={{ 'backgroundColor': '#f3f8fb' }}>
                                                {
                                                    this.state.convertSuccess ? <>
                                                        <p>
                                                            <Row className="text-center">
                                                                <Col>
                                                                    <h4 className="color__dark font__15">WhatsApp us directly at</h4>
                                                                    <span className="color__scfo font__30 mobile_font__15"><i className="fab fa-whatsapp"></i>&nbsp; {WHATSAPP_DISPLAY_NUMBER}</span>
                                                                    <br></br>
                                                                </Col>
                                                            </Row>
                                                            <br></br>
                                                            We've received your message. We can't wait to get started!
                                                            We will reach out in the next 30 - 90 minutes. You can call us if you need a faster response.
                                                            <br></br><br></br>
                                                            <span className="color__grey">
                                                                WhatsApp us at <a href={`https://api.whatsapp.com/send?phone={WHATSAPP_MESSAGE_NUMBER}&text=Hi%21%20I%20just%20submitted%20a%20request%20form%20on%20your%20website.%0d%0aI%20am%20interested%20in%20your%20product.&source=&data=`} target="_blank" rel="noreferrer"><i className="fab fa-whatsapp color__whatsapp"></i> {WHATSAPP_DISPLAY_NUMBER}</a>
                                                                <br></br>
                                                                Email us at info@starterscfo.in
                                                                <br></br>
                                                                Chat with us, look for chat bubble in the bottom right corner of the screen.
                                                            </span>
                                                        </p>
                                                    </> :

                                                    <FormIframe 
                                                    title="Register with MSME India"
                                                    whatsapp="true" 
                                                    footerText="true" />

                                                    
                                                }
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Row style={{ marginTop: "45px" }}>
                                            <Col sm={12} md={12} lg={12} xl={12}>
                                                <ul className="card__list">
                                                    <li><i className="fa fa-check"></i>&nbsp; Legal safety around payments from clients</li>
                                                    <li><i className="fa fa-check"></i>&nbsp; Trademark and patent fee waivers</li>
                                                    <li><i className="fa fa-check"></i>&nbsp; Various govt. grants and subsidies</li>
                                                    <li><i className="fa fa-check"></i>&nbsp; Preference when applying for govt. tenders</li>
                                                    <li><i className="fa fa-check"></i>&nbsp; Access to priority sector lending</li>
                                                </ul>
                                            </Col>
                                        </Row>
                                        <hr></hr>
                                        <Row>
                                            <Col>
                                                <h5 className="color__grey font__20 mt-3">Over 3000+ clients served to date.</h5>
                                                <div>
                                                    <Carousel interval={'3000'} fade={true}>
                                                        <Carousel.Item>
                                                            <Card className="-no-shadow mt-4 border-color__dark">
                                                                <Card.Body className="border-color__dark">
                                                                    <h5>
                                                                        It was a great experience! No hassle, no waiting, a couple clicks and one email and it was done. Totally transparent.
                                                                    </h5>
                                                                    <Row className="mt-4">
                                                                        <Col style={{ flex: 1 }} className="text-right">
                                                                            <img src="/static/images/people/1.jpg" height={'50px'} width={'50px'} style={{ borderRadius: '50%' }}></img>
                                                                        </Col>
                                                                        <Col style={{ flex: 9, marginLeft: '-10px' }}>
                                                                            <h5 className="color__dark font__15 text-left">Shruti Choudhary<br></br><span className="color__grey font__12">Product Manager</span></h5>
                                                                        </Col>
                                                                    </Row>
                                                                </Card.Body>
                                                            </Card>
                                                        </Carousel.Item>
                                                        <Carousel.Item>
                                                            <Card className="-no-shadow mt-4 border-color__dark">
                                                                <Card.Body className="border-color__dark">
                                                                    <h5>
                                                                        I'm impressed. You kept your word. Trademark process was completed faster than promised. Would recommend Starters' CFO to everyone who asks.
                                                                    </h5>
                                                                    <Row className="mt-4">
                                                                        <Col style={{ flex: 1 }} className="text-right">
                                                                            <img src="/static/images/people/2.jpg" height={'50px'} width={'50px'} style={{ borderRadius: '50%' }}></img>
                                                                        </Col>
                                                                        <Col style={{ flex: 9, marginLeft: '-10px' }}>
                                                                            <h5 className="color__dark font__15 text-left">Kunal Kishore<br></br><span className="color__grey font__12">Business Consultant</span></h5>
                                                                        </Col>
                                                                    </Row>
                                                                </Card.Body>
                                                            </Card>
                                                        </Carousel.Item>
                                                        <Carousel.Item>
                                                            <Card className="-no-shadow mt-4 border-color__dark">
                                                                <Card.Body className="border-color__dark">
                                                                    <h5>
                                                                        I can only say how pleasantly overwhelmed I am with your insight and professional expretise.
                                                                    </h5>
                                                                    <Row className="mt-4">
                                                                        <Col style={{ flex: 1 }} className="text-right">
                                                                            <img src="/static/images/people/3.jpg" height={'50px'} width={'50px'} style={{ borderRadius: '50%' }}></img>
                                                                        </Col>
                                                                        <Col style={{ flex: 9, marginLeft: '-10px' }}>
                                                                            <h5 className="color__dark font__15 text-left">Rohit Joshi<br></br><span className="color__grey font__12">CEO, Kreatryx</span></h5>
                                                                        </Col>
                                                                    </Row>
                                                                </Card.Body>
                                                            </Card>
                                                        </Carousel.Item>
                                                    </Carousel>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '100px' }}></Row>
                            </Container>
                        </div>
                    </div>

                    <div id="fb-root"></div>
                    <div className="fb-customerchat"
                        attribution="setup_tool"
                        page_id="827013777421580">
                    </div>

                </Layout>
            </>
        );
    }
}

export default MSMERegistration;
