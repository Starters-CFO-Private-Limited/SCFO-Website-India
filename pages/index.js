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
                    <meta name="title" content="Get Your Finances in Order with Starters' CFO"></meta>
                    <meta name="description" content="Starters’ CFO offers Virtual CFO Services for all your business needs. Hire us for Virtual CFO Services, Valuations and accounting service in Delhi, India."/>
                    <meta name="keywords" content="Statutory Compliance , Payroll Automation , Virtual CFO , Company registration services , Accounting services , Payroll Outsourcing , Partnership firm, LLP Registration, one person company, one person company registration, private limited company registration, pvt ltd company registration Best virtual cfo services, virtual CFO services, company valuation in india, company formation online, private limited company registration, accounting services in Delhi, private company valuation, business valuation services in india, company registration services, virtual cfo services in India, cfo services for startups, business valuation services india, cfo services for startups in india, virtual cfo for startups, company valuation india, virtual bookkeeping services in delhi, virtual cfo packages, start-up business valuation services, fast track trademark registration india, valuation firms in india"></meta>
                    <meta name="copyright" content="Starters CFO" />
                    <link rel="canonical" href="https://starterscfo.com/" />
                    
                    <meta name="language" content="English" />
                    <meta name="coverage" content="Worldwide" />
                    <meta name="distribution" content="Global" />
                    <meta name="robots" content="index,follow"></meta>

                    <meta property="og:type" content="website"></meta>
                    <meta property="og:url" content="https://starterscfo.com/"></meta>
                    <meta property="og:title" content="Get Your Finances in Order with Starters' CFO"></meta>
                    <meta property="og:description" content="Starters CFO offers Virtual CFO Services for all your business needs. Hire us for Virtual CFO Services, Valuations and accounting service in Delhi, India."></meta>
                    <meta property="og:image" content="https://starterscfo.com/static/images/illustrations/compliance.webp"></meta>

                    <meta property="twitter:card" content="summary_large_image"></meta>
                    <meta property="twitter:url" content="https://starterscfo.com/"></meta>
                    <meta property="twitter:title" content="Get Your Finances in Order with Starters' CFO"></meta>
                    <meta property="twitter:description" content="Starters CFO offers Virtual CFO Services for all your business needs. Hire us for Virtual CFO Services, Valuations and accounting service in Delhi, India."></meta>
                    <meta property="twitter:image" content="https://starterscfo.com/static/images/illustrations/compliance.webp"></meta>
                    <meta name="google-site-verification" content="hwGg0k7JuVnA49F784MZXUy6ABXLBXG-OK8On0vglTA" />
                </Head>

                <Layout promobanner={true}>

                    <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert} product={'vcfo'}></PopConvert>
                    
                    <h1 className="d-none">Company Incorporation & Valuation</h1>
                    <h2 className="d-none">Payroll Automation</h2>

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



                    {/* Footer Text */}
                    <div className="w-100 background-color__footer_text">
                    <Container>
                    <Row className="background-color__footer_text footer" style={{ paddingTop: '60px', paddingBottom: '10px' }}>
                            <Col>
                            <h5 class="font__14 weight__600 mt-2 mb-2">Most Searched for Starters’ CFO </h5>
                            <p className='font__12'>Statutory Compliance | Payroll Automation | Virtual CFO | Company registration services | Accounting services | Payroll Outsourcing | Partnership firm| LLP Registration| one person company| one person company registration| private limited company registration| pvt ltd company registration| Business registration service| Trademark Registration| company incorporation| partnership firm|partnership deed registration| certificate of incorporation| startup india|small business ideas|starting a business|government registrations|registrar of companies|register a company|register a business|company registration office|business registration online|copyright registration| copyright application| copyright filing|online copyright registration|tds return filing| cleartds | professional tax registration|professional tax enrollment|copyright registration|digital signature certificate|GST Registration|GST Filing|GST Advisory|Indirect Tax|Private Limited Company / OPC| Limited Liability Partnership| Proprietorship Tax Return Filing| Income Tax Notice| Proprietorship to Pvt Ltd Company| Compliance Check - Secretarial Audit |udyam registration| udyog aadhar | msme registration | udyog aadhar registration</p>

                            <h5 class="font__14 weight__600 mt-2 mb-2">Statutory Compliance</h5>
                            <p className='font__12'>Starters' CFO  Statutory compliance in payroll involves the legal and regulatory requirements set by the government concerning employee wages, benefits, taxes, and deductions. with the help of  some Characteristics in statutory compliance in payroll such as,  Employee Classification, Minimum Wage, Overtime Pay, Tax Deduction , Social Security and Medicare, Leave and Holiday, Compliance Reporting, Labor Laws, Audit and Review, Technology and Software, Professional Assistance</p>

                            <h5 className='font__14 weight__600 mt-2 mb-2'>Payroll Automation</h5>
                            <p className='font__12'>An automated payroll system can significantly reduce manual errors, save time, and enhance employee satisfaction. By selecting the right system, implementing it effectively, and ensuring ongoing support, Starters' CFO can position itself at the forefront of efficient payroll management.</p>

                            <h5 className='font__14 weight__600 mt-2 mb-2'>Virtual CFO</h5>        
                            <p className='font__12'>Starters' CFO, your trusted partner for the Virtual CFO services. With a team of experienced financial experts, we are dedicated to helping your business thrive and succeed by providing top-notch financial guidance and strategic insights.we're not just financial consultants; we're your partners in success.</p>

                            <h5 className='font__14 weight__600 mt-2 mb-2'>Company registration services</h5>
                            <p className='font__12'>Starters' CFO, your trusted partner for seamless and efficient company registration services. Whether you're a growing entrepreneur or an established business looking to expand, our expert team is here to guide you through the process of registering your company with precision and expertise.</p>

                            <h5 className='font__14 weight__600 mt-2 mb-2'>LLP Registration</h5>
                            <p className='font__12'>Starters' CFO is here to assist you in seamlessly registering your Limited Liability Partnership (LLP). Our comprehensive LLP registration services ensure a hassle-free and efficient process, allowing you to focus on what truly matters – building your business.</p>
                            </Col>
                    </Row>
                    </Container>
                    </div>
                </Layout>
            </>
        );
    }
}

export default Home;
