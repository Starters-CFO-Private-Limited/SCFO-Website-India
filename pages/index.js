import React from "react";

import Layout from '../components/site/layout';
import PopConvert from '../components/leadPages/popConvert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Head from 'next/head';

import OnlineSessions from "../components/leadPages/onlineSessions";
import NumbersSpeak from "../components/leadPages/numbersSpeak";
import DigitallyEnabled from "../components/leadPages/digitallyEnabled";
import PartnerLogos from "../components/leadPages/partnerLogos";

class Home extends React.Component {

    togglePopConvert() {
        this.setState({
            'showPopConvert': !this.state.showPopConvert
        })
    }

    constructor(props, context) {
        super(props, context);

        this.togglePopConvert = this.togglePopConvert.bind(this);

        this.state = {
            'showPopConvert': false
        }
    }

    render() {

        return (
            <>
                <Head>
                    <title> Virtual CFO Services | Accounting, Services in Delhi | Starter CFO </title>
                    <meta name="title" content="Starters' CFO | Virtual CFOs, Company Incorporation, Accounting Software"></meta>
                    <meta name="description" content="Starters CFO offers Virtual CFO Services for all your business needs. Hire us for Virtual CFO Services, Valuations and accounting service in Delhi, India."/>
                    <meta name="keywords" content="Starters' CFO, Virtual CFO, SMEs, Startups, India"></meta>
                    <meta name="copyright" content="Starters CFO" />
                    <meta name="language" content="English" />
                    <meta name="coverage" content="Worldwide" />
                    <meta name="distribution" content="Global" />
                    <meta name="robots" content="index,follow"></meta>

                    <meta property="og:type" content="website"></meta>
                    <meta property="og:url" content="https://www.starterscfo.com/"></meta>
                    <meta property="og:title" content="Starters' CFO | Virtual CFOs, Company Incorporation, Accounting Software"></meta>
                    <meta property="og:description" content="You run your business. We will do the bookkeeping. 
            India's first Virtual CFO Service for start-ups and SMEs. Accounting & Taxes, Statutory Compliances & more"></meta>
                    <meta property="og:image" content="/static/images/banner/meta.png"></meta>

                    <meta property="twitter:card" content="summary_large_image"></meta>
                    <meta property="twitter:url" content="https://www.starterscfo.com/"></meta>
                    <meta property="twitter:title" content="Starters' CFO | Virtual CFOs, Company Incorporation, Accounting Software"></meta>
                    <meta property="twitter:description" content="You run your business. We will do the bookkeeping. 
            India's first Virtual CFO Service for start-ups and SMEs. Accounting & Taxes, Statutory Compliances & more"></meta>
                    <meta property="twitter:image" content="/static/images/banner/meta.png"></meta>
                    <meta name="google-site-verification" content="hwGg0k7JuVnA49F784MZXUy6ABXLBXG-OK8On0vglTA" />
                </Head>

                <Layout promobanner={true}>

                    <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert} product={'vcfo'}></PopConvert>

                    <div className="d-none d-md-block d-lg-block d-xl-block w-100">
                        <div className="hero--wrapper">
                            <div className="d-flex align-items-start h-100">
                                <Container className="h-100">
                                    <Row className="hero__text -no-margin h-100">
                                        <Col>
                                            <div style={{ marginTop: "50px;" }}>
                                                <h4 className="title">CFO as a service <br></br> for start-ups & SMEs</h4>
                                                <br></br>
                                                <p className="description">
                                                    Entrepreneurship, running a profitable business is already taxing as it is. <br></br>
                                                    GST returns, compliances, and routine accounting is not something a business owner should spend their cycles on. <br></br><br></br>
                                                    You run your business. We will do the bookkeeping. <br></br>
                                                    India's first Virtual CFO Service for start-ups & SMEs.
                                                </p>
                                                <Button className="btn__secondary large" onClick={this.togglePopConvert}>Get started</Button>
                                            </div>
                                        </Col>
                                        <Col className="d-flex align-items-center h-100">
                                            <img src="/static/svg/hero_3.svg" alt="Starters' CFO | Virtual CFOs, Company Incorporation, Accounting Software" height="80%"></img>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="grass"></div>
                    </div>

                    <div className="d-xs-block d-sm-block d-md-none w-100">
                        <div className="hero--wrapper -mobile">
                            <div className="hero__background d-flex align-items-start -mobile">
                                <Container>
                                    <Row className="hero__text">
                                        <Col>
                                            <h4 className="title">CFO as a service <br></br> for SMEs</h4>
                                            <br></br>
                                            <p className="description">
                                                Entrepreneurship, running a profitable business is already taxing as it is. <br></br>
                                                GST returns, compliances, and routine accounting is not something a business owner should spend their cycles on. <br></br><br></br>
                                                You run your business. We will do the bookkeeping. <br></br>
                                                India's first Virtual CFO Service for start-ups and SMEs.
                                            </p>
                                            <Button className="btn__secondary large" onClick={this.togglePopConvert}>Get started</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="grass"></div>
                    </div>

                    <Container>

                        <Row style={{ marginTop: '50px' }}></Row>

                        <Row style={{ marginTop: '10px' }}>
                            <Col md={{ 'span': '8', 'offset': '2' }}>
                                <p className="font__20 text-center color__dark">
                                    You're a start-up / SME owner with lot's to do. We're an expert
                                    finance organisation with experience serving Entrepreneurs & start ups.

                                    <br></br><br></br>

                                    Let's take book keeping off your hands forever - so that you can focus on what's
                                    important to you - your business.
                                </p>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }}></Row>

                        <hr></hr>

                        <PartnerLogos />

                    </Container>

                    <DigitallyEnabled />

                    <OnlineSessions />

                    <Container>

                        <Row style={{ height: '50px' }}></Row>

                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body className="d-flex" style={{ paddingTop: '50px' }}>
                                        <Row>
                                            <Col md={5} className="text-center">
                                                <img src="/static/images/illustrations/automated_accounting.svg" className="features__illustration"></img>
                                                <br></br><br></br>
                                                <Button className="btn__secondary on_white d-none d-md-inline-block d-lg-inline-block d-xl-inline-block" onClick={this.togglePopConvert}>Start Trial</Button>
                                            </Col>
                                            <Col md={7}>
                                                <h4 className="color__dark"><b>Company Incorporation & Valuation</b></h4>
                                                <p className="color__grey font__15">
                                                    <br></br>
                                                    Incorporating a business can be a lengthy and complicated process. Starters' CFO is dedicated to empowering entreprenuers in this regard and making India start up ready.
                                                    <br></br>
                                                </p>
                                                <hr></hr>
                                                <h6>Popular Features</h6>
                                                <ul className="card__list color__dark font__14 horizontal" style={{ marginTop: '15px' }}>
                                                    <li className="first"><i className="fa fa-check"></i>&nbsp;&nbsp;Virtual CFO Services</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Free Perks & Benefits</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Strategic Advisory</li>
                                                </ul>
                                                <br></br>
                                                <Button className="btn__secondary on_white d-xs-inline-block d-sm-inline-block d-md-none" onClick={() => { window.location = '/virtual-cfo' }}>Learn More</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }}></Row>

                        <Row>
                            <Col md={4} style={{ marginTop: '20px' }}>
                                <Card>
                                    <Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
                                        <Row className="text-center">
                                            <Col>
                                                <img src="/static/images/illustrations/compliance.webp" className="features__illustration"></img>
                                                <br></br><br></br>
                                                <h4 className="color__dark"><b>Statutory Compliance</b></h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="color__grey font__15 text-center">
                                                    <br></br>
                                                    Beyond acting as your bookkeepers, we work autonomously to keep your firm up to date with all regulations and compliances.
                                                    <br></br><br></br>
                                                </p>
                                                <hr></hr>
                                                <br></br>
                                                <h6>Popular Features</h6>
                                                <ul className="card__list color__dark font__14" style={{ marginTop: '15px' }}>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;GST Compliance</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;TDS Compliance</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Secretarial Compliances</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Statutory Audit</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Issue of form 16-A</li>
                                                </ul>
                                                <br></br>
                                                <Button className="btn__secondary on_white" onClick={() => { window.location = '/virtual-cfo' }}>Learn More</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} style={{ marginTop: '20px' }}>
                                <Card>
                                    <Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
                                        <Row className="text-center">
                                            <Col>
                                                <img src="/static/images/illustrations/1.svg" className="features__illustration"></img>
                                                <br></br><br></br>
                                                <h4 className="color__dark"><b>Payroll Automation</b></h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="color__grey font__15 text-center">
                                                    <br></br>
                                                    Our software automatically generates payroll and initiates credits to employee's accounts. Employees receive their own dashboard.
                                                    <br></br><br></br>
                                                </p>
                                                <hr></hr>
                                                <br></br>
                                                <h6>Popular Features</h6>
                                                <ul className="card__list color__dark font__14" style={{ marginTop: '15px' }}>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Employee Dashboard</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Automated Form 16</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Automated Investment Declaration</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Payslips</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;& more...</li>
                                                </ul>
                                                <br></br>
                                                <Button className="btn__secondary on_white" onClick={() => { window.location = '/virtual-cfo' }}>Learn More</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} style={{ marginTop: '20px' }}>
                                <Card>
                                    <Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
                                        <Row className="text-center">
                                            <Col>
                                                <img src="/static/images/illustrations/service.svg" className="features__illustration"></img>
                                                <br></br><br></br>
                                                <h4 className="color__dark"><b>Virtual CFO</b></h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="color__grey font__15 text-center">
                                                    <br></br>
                                                    We act as your partners in your business and will help you with any ad-hoc requirements you come up with. Drop us a message, as you would with your CFO.
                                                    <br></br><br></br>
                                                </p>
                                                <hr></hr>
                                                <br></br>
                                                <h6>Popular Features</h6>
                                                <ul className="card__list color__dark font__14" style={{ marginTop: '15px' }}>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Registration</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Internal Audit</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Income Tax & GST Assessments</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Budgets & Forecasting</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;& much more...</li>
                                                </ul>
                                                <br></br>
                                                <Button className="btn__secondary on_white" onClick={() => { window.location = '/virtual-cfo' }}>Learn More</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }}></Row>

                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body className="d-flex" style={{ paddingTop: '50px' }}>
                                        <Row>
                                            <Col md={5} className="text-center" style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                                                <img src="/static/images/illustrations/payroll.svg" className="features__illustration"></img>
                                                <br></br><br></br>
                                                <Button className="btn__secondary on_white d-none d-md-inline-block d-lg-inline-block d-xl-inline-block" onClick={this.togglePopConvert}>Consult Now</Button>
                                            </Col>
                                            <Col md={7}>
                                                <h4 className="color__dark"><b>International Payroll Outsourcing</b></h4>
                                                <p className="color__grey font__15">
                                                    <br></br>
                                                    Hire and manage payroll + HR on auto pilot for your Indian employees as an international employer.
                                                    <br></br>
                                                </p>
                                                <hr></hr>
                                                <h6>Popular Features</h6>
                                                <ul className="card__list color__dark font__14" style={{ marginTop: '15px' }}>
                                                    <li className="first"><i className="fa fa-check"></i>&nbsp;&nbsp;Create legal presence in India without FDI complexities</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Onboard & forget -- dedicated account manager(s) for your India team keep everything streamlined.</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Offer perks, insurance to your India team</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Includes financial planning and tax saving advice for your employees</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Includes annual tax filing for all employees</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Deep integration with Zoho Payroll offers a digital portal to all employees.</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;&nbsp;Deep integration with Zoho Books offers you quick access to your books and statistics.</li>
                                                </ul>
                                                <br></br>
                                                <Button className="btn__secondary on_white d-xs-inline-block d-sm-inline-block d-md-none" onClick={() => { window.location = '/virtual-cfo' }}>Learn More</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4} style={{ marginTop: '20px' }}>
                                <Card onClick={this.togglePopConvert}>
                                    <Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
                                        <Row className="text-center">
                                            <Col>
                                                <h4 className="color__dark"><b>GST Registration</b></h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="color__grey font__15 text-center">
                                                    <br></br>
                                                    All companies in India require a GST registration. Additionally, the registration can involve additional steps, such as registering an LUT.
                                                    <br></br><br></br>
                                                </p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} style={{ marginTop: '20px' }}>
                                <Card onClick={this.togglePopConvert}>
                                    <Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
                                        <Row className="text-center">
                                            <Col>
                                                <h4 className="color__dark"><b>MSME Registration</b></h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="color__grey font__15 text-center">
                                                    <br></br>
                                                    Register with the Ministry of Micro, Small & Medium Enterprises (MSME) to qualify for government schemes and benefits. This process is completely online.
                                                    <br></br><br></br>
                                                </p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} style={{ marginTop: '20px' }}>
                                <Card onClick={this.togglePopConvert}>
                                    <Card.Body style={{ paddingTop: '50px' }}>
                                        <Row className="text-center">
                                            <Col>
                                                <h4 className="color__dark"><b>Trademark Registration</b></h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="color__grey font__15 text-center">
                                                    <br></br>
                                                    Trademark your logo, brand, product or service name with the Government of India. This protects your business from competition.
                                                    <br></br><br></br>
                                                </p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '50px' }} className="d-none d-md-block"></Row>
                        <Row style={{ marginTop: '20px' }} className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"></Row>

                    </Container>

                    <NumbersSpeak />

                    <Container>
                        <Row style={{ marginTop: '50px' }}></Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col md={4} className="justify-content-end d-xs-flex d-sm-flex d-md-none d-lg-none d-xl-none text-center">
                                <img src="/static/images/sample/cta_card.webp" className="cta_card__image"></img>
                                <div className="hsg-cta-block__circles" data-background-image="horizontal-circles-pink"></div>
                                <br></br><br></br>
                            </Col>
                            <Col md={8}>
                                <h3 className="color__dark"><b>Over 1000 businesses trust us</b></h3>
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
                                <img src="/static/images/sample/cta_card.webp" className="cta_card__image"></img>
                                <div className="hsg-cta-block__circles" data-background-image="horizontal-circles-pink"></div>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '50px' }}></Row>
                    </Container>
                </Layout>
            </>
        );
    }
}

export default Home;
