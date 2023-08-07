import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../components/site/layout';
import PopConvert from '../components/leadPages/popConvert';
import LineConvert from '../components/leadPages/lineConvert';
import ExitConvert from '../components/leadPages/exitConvert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FormValidation } from 'calidation';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Meta from '../components/site/meta';
import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGE_NUMBER } from '../constants';
import FormIframe from '../components/leadPages/formIframe';

class TrademarkRegistration extends React.Component {

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
                <Meta title="Draft ESOP policies for your employees" description="Trademark karo, safe raho. Register a trademark with Starters' CFO. Trademark Attorney Services included for free!"></Meta>

                <Layout promobanner={true}>

                    <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert} product={'trademark'} mobile={this.state.mobile}></PopConvert>
                    <ExitConvert></ExitConvert>

                    <div className="w-100">
                        <div className="-white">
                            <Container>
                                <Row className="hero__text">
                                    <Col>
                                        <h4 className="title color__dark text-center">Trademark karo, safe raho. ™️</h4>
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
                                                    <>
                                                    
                                                        <FormIframe 
                                                        title="Request Call Back"
                                                        whatsapp="true" 
                                                        footerText="true" />

                                                    </>
                                                }
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6}>

                                        {/* mobile rating */}
                                        <Row className="mt-4 d-xs-flex d-sm-flex d-md-none">
                                            <Col className="d-flex justify-content-center flex-column align-items-center">
                                                <i className="fab fa-facebook font__50" style={{ color: '#3a5997' }}></i>
                                                <br></br>
                                                <h4 className="color__grey d-block">4.7 / 5</h4>
                                                <div className="color__scfo d-flex flex-row">
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star-half-alt d-block mr-1 font__10"></i>
                                                </div>
                                            </Col>
                                            <Col className="d-flex flex-column align-items-center justify-content-center">
                                                <img src="/static/images/icons/google.png" width={'50px'}></img>
                                                <br></br>
                                                <h4 className="color__grey d-block">5 / 5</h4>
                                                <div className="color__scfo d-flex flex-row">
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                </div>
                                            </Col>
                                        </Row>

                                        {/* desktop rating */}
                                        <Row className="mt-5 d-none d-md-flex d-lg-flex d-xl-flex">
                                            <Col className="d-flex justify-content-right">
                                                <i className="fab fa-facebook font__50" style={{ color: '#3a5997' }}></i>
                                            </Col>
                                            <Col className="d-flex justify-content-left flex-column">
                                                <h4 className="color__grey d-block">4.7 / 5</h4>
                                                <div className="color__scfo d-flex flex-row">
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star-half-alt d-block mr-1 font__10"></i>
                                                </div>
                                            </Col>
                                            <Col className="d-flex align-items-end">
                                                <img src="/static/images/icons/google.png" height={'50px'}></img>
                                            </Col>
                                            <Col className="d-flex justify-content-left flex-column">
                                                <h4 className="color__grey d-block">5 / 5</h4>
                                                <div className="color__scfo d-flex flex-row">
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                    <i className="fa fa-star d-block mr-1 font__10"></i>
                                                </div>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12} md={6} lg={6} xl={6}>
                                                <h5 className="color__grey font__15 text-center mt-3">Highest rated amongst competitors.</h5>
                                            </Col>
                                            <Col></Col>
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
                            </Container>
                        </div>
                    </div>


                    <div className="w-100">
                        <Container>

                            {/* desktop pricing */}
                            <Row className="mt-sm-5 d-none d-md-flex d-lg-flex d-xl-flex">
                                <Col>
                                    <Card className="-no-shadow" onClick={this.togglePopConvert}>
                                        <Card.Body className="background-color__white">
                                            <h3>₹ 7499/-</h3>
                                            <h5 className="font__20">For Individuals</h5>
                                            <p>Applicable if the owner of the trademark is to be an individual person.</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="-no-shadow" onClick={this.togglePopConvert}>
                                        <Card.Body>
                                            <h3>₹ 7499/-</h3>
                                            <h5 className="font__20">For Start Up India 🇮🇳 Companies</h5>
                                            <p>Applicable ONLY if your company is registered under Startup India / MSME.</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="-no-shadow" onClick={this.togglePopConvert}>
                                        <Card.Body>
                                            <h3>₹ 11,999/-</h3>
                                            <h5>For Companies</h5>
                                            <p>Applicable for all other companies, private limited or otherwise.</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            {/* mobile pricing */}
                            <Row className="d-xs-flex d-sm-flex d-md-none" style={{ marginTop: '100px' }}>
                                <Col sm={12}>
                                    <Card className="-no-shadow mb-2" onClick={this.togglePopConvert}>
                                        <Card.Body className="background-color__white">
                                            <h3>₹ 7499/-</h3>
                                            <h5 className="font__20">For Individuals</h5>
                                            <p>Applicable if the owner of the trademark is to be an individual person.</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12}>
                                    <Card className="-no-shadow mb-2" onClick={this.togglePopConvert}>
                                        <Card.Body>
                                            <h3>₹ 7499/-</h3>
                                            <h5 className="font__20">For Start Up India 🇮🇳 Companies</h5>
                                            <p>Applicable ONLY if your company is registered under Startup India / MSME.</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12}>
                                    <Card className="-no-shadow" onClick={this.togglePopConvert}>
                                        <Card.Body>
                                            <h3>₹ 11,999/-</h3>
                                            <h5>For Companies</h5>
                                            <p>Applicable for all other companies, private limited or otherwise.</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            <Row style={{ marginTop: '20px' }}></Row>

                            <hr></hr>

                            <Row className="hero__text">
                                <Col>
                                    <h4 className="color__dark text-center font__40">Questions? We gotcha.</h4>
                                    <br></br>
                                </Col>
                            </Row>

                            <Row style={{ marginTop: '30px' }}></Row>

                            <Row>
                                <Col sm={12} md={6}>
                                    <h3>1. Do I really need a trademark?</h3>
                                    <p className="color__grey">
                                        Trademarks aren't required by law, and require money so many companies might think they can avoid it altogether. In many cases, this is perfectly true. To understand if you really need a trademark, we recommend that you get on a call with one of our advisors. (Free!)
                                    </p>
                                </Col>
                                <Col sm={12} md={6}>
                                    <h3>2. When should I get a trademark?</h3>
                                    <p className="color__grey">
                                        Answering that question depends on your ambition. If you're looking to start and run a business for a long time, and offer goods or services, it is a good idea to get your trademark registered as quick as possible. If you only intend to run your business for a few years and have no intention of expanding beyond your local network, you might not need one.
                                    </p>
                                </Col>
                            </Row>
                            <Row className="mt-md-4">
                                <Col sm={12} md={6}>
                                    <h3>3. I can't afford one.</h3>
                                    <p className="color__grey">
                                        Some boostrap start ups cannot immediately afford a trademark and other regulatory / compliance costs, and we at Starters' CFO understand that. We can help reduce the cost of trademark acquisition by getting you an MSME / Start up India registration, and offer additional EMIs on your bills.
                                    </p>
                                </Col>
                                <Col sm={12} md={6}>
                                    <h3>4. Do I need a trademark attorney?</h3>
                                    <p className="color__grey">
                                        Statistics show that your chances of getting a trademark approved increases by almost 100% when your application is overseen by a certified attorney. All applications submitted via Starters' CFO are vetted by one, at no extra cost to you.
                                    </p>
                                </Col>
                            </Row>

                            <Row style={{ marginTop: '20px' }}></Row>

                        </Container>
                    </div>

                    <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
                        <Col>
                            <Container>
                                <LineConvert product={'trademark'}></LineConvert>
                            </Container>
                        </Col>
                    </Row>

                    <Container>

                        <Row className="hero__text">
                            <Col>
                                <h4 className="color__dark text-center font__40">Even more questions!?</h4>
                                <br></br>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="justify-content-center align-items-center flex-column d-none d-md-flex d-lg-flex d-xl-flex" md={5}>
                                <img src="/static/svg/reading.svg" style={{ width: '67%!important' }}></img>
                                <br></br>
                                <br></br>
                                <h5 className="color__dark">Still curious? </h5>
                                <p className="color__grey">
                                    Call our team for immediate resolution to your questions, or fill out our interest form, and we will get in touch in 24 hours.<br></br> <br></br>Whatsapp {WHATSAPP_MESSAGE_NUMBER}.
                                </p>
                            </Col>
                            <Col md={7}>
                                <Accordion defaultActiveKey="0">
                                    <Card className="-no-shadow -no-hover border-radius__0">
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="color__dark">
                                            What can be registered as a trademark?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="color__grey">
                                                Any word, name, device, label, numerals or a combination of colors that can be represented graphically (in a paper) can be registered as a trademark. The trademark to be registered must also be distinctive for the services or goods for which it is proposed to be registered.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="-no-shadow -no-hover border-radius__0">
                                        <Accordion.Toggle as={Card.Header} eventKey="1" className="color__dark">
                                            What trademarks cannot be registered?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body className="color__grey">
                                                Any trademark, which is identical or deceptively similar to an existing registered trademark or trademark for which application for registration has been made, cannot be registered. Also trademark that would likely cause deception or confusion or is offensive may not be registered. Geographical names, common names, common trade words and common abbreviation can also not be registered as a trademark.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="-no-shadow -no-hover border-radius__0">
                                        <Accordion.Toggle as={Card.Header} eventKey="2" className="color__dark">
                                            Will my trademark be valid for all services and goods?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body className="color__grey">
                                                Trademark applications are distinctive to the goods or services it is represents. Therefore, trademark applications are made under a "Class" of goods or service it represents. The trademark application will therefore be valid for the entire class of goods or service it represents.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="-no-shadow -no-hover border-radius__0">
                                        <Accordion.Toggle as={Card.Header} eventKey="3" className="color__dark">
                                            Will my trademark be valid all over the world?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body className="color__grey">
                                                No, trademark registered in India will be valid only in India. However, some countries use the trademark filing in India as a basis for registering the trademark in their country.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="-no-shadow -no-hover border-radius__0">
                                        <Accordion.Toggle as={Card.Header} eventKey="4" className="color__dark">
                                            What documents do I need?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body className="color__grey">
                                                A copy of the trademark to be registered along with the address and identity proof of the trademark owner is required. In case of Company, the name of the Company along with its Certificate of Incorporation and Address proof is required.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="-no-shadow -no-hover border-radius__0">
                                        <Accordion.Toggle as={Card.Header} eventKey="5" className="color__dark">
                                            How long will this take?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body className="color__grey">
                                                Trademark application can be filed with the trademark registry in a matter of 1 - 3 days. However, it will typically take 6 to 24 months for the Trademark Registry to complete their formalities and provide registration for the trademark.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="-no-shadow -no-hover border-radius__0">
                                        <Accordion.Toggle as={Card.Header} eventKey="6" className="color__dark">
                                            When can I use the ™️ (tm) mark?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="6">
                                            <Card.Body className="color__grey">
                                                The TM mark can be used along with the trademark once the trademark application is filed with the Controller General of Patents Designs and Trademarks.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="-no-shadow -no-hover border-radius__0">
                                        <Accordion.Toggle as={Card.Header} eventKey="7" className="color__dark">
                                            When can I use the ⓡ (r) mark?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="7">
                                            <Card.Body className="color__grey">
                                                The ® mark can be used once the trademark application is approved by the Controller General of Patents Designs and Trademarks and trademark registration is provided.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                            <Col className="justify-content-center align-items-center flex-row d-xs-flex d-sm-flex d-md-none mt-5 text-center">
                                <img src="/static/svg/reading.svg" style={{ width: '67%!important' }}></img>
                                <br></br>
                                <br></br>
                                <h5 className="color__dark">Still curious? </h5>
                                <p className="color__grey">
                                    Call our team for immediate resolution to your questions, or fill out our interest form, and we will get in touch in 24 hours.<br></br> <br></br>Dial {WHATSAPP_DISPLAY_NUMBER}.
                                </p>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }}></Row>

                    </Container>

                    <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
                        <Col>
                            <Container>
                                <LineConvert product={'trademark'}></LineConvert>
                            </Container>
                        </Col>
                    </Row>
                </Layout>
            </>
        );
    }
}

export default TrademarkRegistration;
