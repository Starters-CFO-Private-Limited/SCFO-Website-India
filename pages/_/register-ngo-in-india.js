import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../../components/site/layout';
import PopConvert from '../../components/leadPages/popConvert';
import LineConvert from '../../components/leadPages/lineConvert';
import ExitConvert from '../../components/leadPages/exitConvert';
import Card from 'react-bootstrap/Card';
import Head from 'next/head';
import Accordion from 'react-bootstrap/Accordion';
import HeaderConvert from '../../components/leadPages/headerConvert';
import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGE_NUMBER } from '../../constants';


class RegisterNGOIndia extends React.Component {

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

        const formConfig = {
            full_name: {
                isRequired: {
                    message: 'Full name is a required field.'
                },
            },
            mobile: {
                isRequired: {
                    message: 'Mobile is a required field.'
                },
                isExactLength: {
                    message: 'Mobile number must have exactly 10 digits.',
                    length: 10,
                },
                isRegexMatch: {
                    message: 'Mobile numbers can only contain digits.',
                    regex: /^\d{10}$/,
                },
            },
            email: {
                isRequired: {
                    message: 'Email is a required field.'
                },
                isEmail: { message: 'Please enter a valid e-mail address' },
            },
        };

        const onSubmit = async ({ fields, isValid }) => {
            if (isValid) {
                this.setState({ 'buttonText': 'Processing...' });
                const response = await fetch('/api/v1/leads/', {
                    'body': JSON.stringify({
                        "full_name": fields.full_name,
                        "email": fields.email,
                        "mobile": fields.mobile,
                        "product": "ngo"
                    }),
                    'method': 'POST',
                    'headers': {
                        "cache-control": "no-cache",
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                console.log(response);

                if (response.ok) {
                    // json = await response.json();
                } else {
                    response.text().then(result => { console.log(result) });
                }

                this.setState({
                    'convertSuccess': 'x',
                })
            }
        };

        return (

            <>
                <Head>
                    <title>Starters' CFO | NGO Registration in India</title>
                    <meta name="title" content="Starters' CFO | NGO Registration in India"></meta>
                    <meta name="description" content="NGO Registration in India. Choose from different structures, free consultation."></meta>

                    <meta property="og:type" content="website"></meta>
                    <meta property="og:url" content="https://www.starterscfo.com/register-ngo-in-india"></meta>
                    <meta property="og:title" content="Starters' CFO | NGO Registration"></meta>
                    <meta property="og:description" content="NGO Registration in India. Choose from different structures, free consultation."></meta>
                    <meta property="og:image" content=""></meta>

                    <meta property="twitter:card" content="summary_large_image"></meta>
                    <meta property="twitter:url" content="https://www.starterscfo.com/register-ngo-in-india"></meta>
                    <meta property="twitter:title" content="Starters' CFO | NGO Registration"></meta>
                    <meta property="twitter:description" content="NGO Registration in India. Choose from different structures, free consultation."></meta>
                    <meta property="twitter:image" content=""></meta>

                </Head>

                <Layout promobanner={true}>

                    <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert} product={'ngo'} mobile={this.state.mobile}></PopConvert>
                    <ExitConvert></ExitConvert>

                    <div className="w-100">
                        <div className="-white">
                            <HeaderConvert title="GST Registration at ₹999" />
                        </div>
                    </div>


                    <Row style={{ marginTop: '50px' }}></Row>

                    <Container>

                        <hr></hr>

                        <Row style={{ marginTop: '20px' }}></Row>

                        <Row style={{ marginTop: '10px' }}>
                            <Col md={{ 'span': '8', 'offset': '2' }}>
                                <p className="font__20 text-center color__dark">
                                    Indian regulations, laws, and structures can be difficult to navigate.
                                    We simplify it for you.
                                    <br></br>
                                    <br></br>

                                    <br></br><br></br>

                                    Our support does not start or end at just NGO registration. We will help you choose the best structures for your new organisation, and empower you with tools to jumpstart your new venture.
                                </p>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }}></Row>

                        <hr></hr>

                        <Row style={{ marginTop: '80px' }}></Row>

                        <Row className="text-center">
                            <Col>
                                <img src="/static/images/illustrations/ngo-registration.svg" alt='NGO Registration' className="features__illustration"></img>
                                <br></br><br></br>
                                <h4 className="color__dark"><b>NGO Registration</b></h4>
                                <p className="color__grey font__15 text-center">
                                    <br></br>
                                    If you have not already decided, our team will be available for consultation and help you choose the best legal entity suitable for your organisation.
                                    <br></br><br></br>
                                    Navigating the pros and cons of the differnet form of legal entities available in India can be complex and have serious implications. We help you make the right choice.
                                </p>
                            </Col>
                            <Col>
                                <img src="/static/images/illustrations/agreement.svg" alt='Legal Agreements' className="features__illustration"></img>
                                <br></br><br></br>
                                <h4 className="color__dark"><b>Legal Agreements</b></h4>
                                <p className="color__grey font__15 text-center">
                                    <br></br>
                                    Starting a new venture will need agreements with your partners, co founders, donors, investors and first employees. We help you prepare the right documents, and protect your interests.
                                    <br></br><br></br>
                                    Our templates are prepared by leading legal consultancy organisations in India, and are available at no cost to you.
                                </p>
                            </Col>
                            <Col>
                                <img src="/static/images/illustrations/advisory.svg" alt='Strategic Advisory' className="features__illustration"></img>
                                <br></br><br></br>
                                <h4 className="color__dark"><b>Strategic Advisory</b></h4>
                                <p className="color__grey font__15 text-center">
                                    <br></br>
                                    Throughout our relationship with you, we shall act as your strategic partners, and help ensure you make the best choices for your new businesses.
                                    <br></br><br></br>
                                    Our team is apt at detecting loopholes and red flags, and will always keep in touch with you.
                                </p>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }}></Row>

                    </Container>

                    <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
                        <Col>
                            <Container>
                                <LineConvert product={'ngo'}></LineConvert>
                            </Container>
                        </Col>
                    </Row>

                    <Container>
                        <Row style={{ marginTop: '50px', marginBottom: '20px' }}>
                            <Col>
                                <div>
                                    <h4 className="color__dark"><b>Partnerships and Benefits to you</b></h4>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ 'span': '6' }} sm={{ 'span': '6' }} className="text-center text-md-left">
                                <div className="reliable_txt" style={{ marginBottom: '20px' }}>
                                    <img src="/static/images/partners/gcp.png" alt='Google Cloud Platform Referral Partner' height="75px" style={{ marginLeft: '-20px' }}></img>
                                    <p className="color__grey">
                                        Google Cloud Platform Referral Partner. <br></br>
                                        Up to $100K in free credits.
                                    </p>
                                </div>
                                <br></br>
                            </Col>
                            <Col md={{ 'span': '6' }} sm={{ 'span': '6' }} className="text-center text-md-left">
                                <div className="reliable_txt" style={{ marginBottom: '20px' }}>
                                    <img src="/static/images/partners/aws.png" alt='Amazon Web Services Referral Partner' height="75px" style={{ marginLeft: '-20px' }}></img>
                                    <p className="color__grey">
                                        Amazon Web Services Referral Partner. <br></br>
                                        Up to $5K in free credits.
                                    </p>
                                </div>
                                <br></br>
                            </Col>
                            <Col md={{ 'span': '6' }} sm={{ 'span': '6' }} className="text-center text-md-left">
                                <div className="reliable_txt" style={{ marginBottom: '20px' }}>
                                    <img src="/static/images/partners/rzp.png" height="75px" style={{ marginLeft: '-20px' }}></img>
                                    <p className="color__grey">
                                        Razorpay Partner. <br></br>
                                        Discounted transaction rates of 2%.
                                    </p>
                                </div>
                                <br></br>
                            </Col>
                            <Col md={{ 'span': '6' }} sm={{ 'span': '6' }} className="text-center text-md-left">
                                <div className="reliable_txt" style={{ marginBottom: '20px' }}>
                                    <img src="/static/images/partners/instaspaces.png" alt='Instaspaces Partner' height="45px" style={{ marginLeft: '-10px' }}></img>
                                    <br></br><br></br>
                                    <p className="color__grey">
                                        Instaspaces Partner. <br></br>
                                        Get virtual addresses for your business registration for ₹1000 / month.
                                    </p>
                                </div>
                                <br></br>
                            </Col>
                        </Row>
                    </Container>

                    <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
                        <Col>
                            <Container>
                                <Row style={{ marginBottom: '20px' }}>
                                    <Col>
                                        <h4 className="color__dark text-center">Choose an entity</h4>
                                        <p className="color__dark text-center">Hear back in 24 hours, or Whatsapp +91 81128 11268 now.</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={this.togglePopConvert}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Trust
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal when property is involved.
                                                </p>
                                            </Card.Header>
                                            <Card.Body>
                                                <table className="card__fancy--table table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Income Tax Exempted
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                At least 2 trustees
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Succession by appointment / election
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Jurisdiction of deputy registrar / charity commissioner
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Moderately difficult when hiring
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Moderately difficult raising funds
                                                            </td>
                                                        </tr>

                                                        <tr className="cta">
                                                            <div>
                                                                <br></br>
                                                                <a>Get Started <i className="fa fa-arrow-right"></i></a>
                                                                <br></br>
                                                                <br></br>
                                                            </div>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={this.togglePopConvert}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Society
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for small non profit organisations, with small teams
                                                </p>
                                            </Card.Header>
                                            <Card.Body>
                                                <table className="card__fancy--table table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Income Tax Exempted
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                At least 7 members
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Succession by election
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Jurisdiction of registrar of societies
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Moderately difficult when hiring
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Moderately difficult raising funds
                                                            </td>
                                                        </tr>
                                                        <tr className="cta">
                                                            <div>
                                                                <br></br>
                                                                <a>Get Started <i className="fa fa-arrow-right"></i></a>
                                                                <br></br>
                                                                <br></br>
                                                            </div>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={this.togglePopConvert}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Section 8 Non Profit
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for most needs, most recommended
                                                </p>
                                            </Card.Header>
                                            <Card.Body>
                                                <table className="card__fancy--table table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Income Tax Exempted
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                At least 3 members
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Succession by election
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Jurisdiction of registrar of companies
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Easily hire employees
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Easily raise funds
                                                            </td>
                                                        </tr>
                                                        <tr className="cta">
                                                            <div>
                                                                <br></br>
                                                                <a>Get Started <i className="fa fa-arrow-right"></i></a>
                                                                <br></br>
                                                                <br></br>
                                                            </div>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '20px' }}>
                                    <Col>
                                        <p className="text-center color__dark sans-serif font__15"><i className="fa fa-info-circle"></i>&nbsp;&nbsp;Want to start an NGO but not sure of structure? <a style={{ fontSize: '15px' }} onClick={() => { this.togglePopConvert }}>Request a call back</a> to explore best solutions & understand key differences. </p>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: '50px' }}></Row>
                            </Container>
                        </Col>
                    </Row>

                    <Row style={{ backgroundColor: '#415089', paddingTop: '40px', paddingBottom: '40px' }}>
                        <Col>
                            <Container>
                                <Row style={{ marginBottom: '40px' }}>
                                    <Col>
                                        <h4 className="color__white text-center">NGO toolkit</h4>
                                        <p className="color__white text-center">Beyond registration - launchpad for your venture</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6} xs={6} md={3}>
                                        <i className="fa fa-check color__white" style={{ fontSize: '35px' }}></i>
                                        <br></br><br></br>
                                        <h6 className="color__white">Navigate Compliances</h6>
                                        <p className="color__grey_on_dark">Our team will keep you up to date with notifications on deadlines for regulations & compliances.</p>
                                    </Col>
                                    <Col sm={6} xs={6} md={3}>
                                        <i className="fa fa-comments-dollar color__white" style={{ fontSize: '35px' }}></i>
                                        <br></br><br></br>
                                        <h6 className="color__white">Perks & Benefits</h6>
                                        <p className="color__grey_on_dark">SCFO companies receive benefits from Google and Amazon up to $1,00,000 discounted services from other vetted companies.</p>
                                    </Col>
                                    <Col sm={6} xs={6} md={3}>
                                        <i className="fa fa-piggy-bank color__white" style={{ fontSize: '35px' }}></i>
                                        <br></br><br></br>
                                        <h6 className="color__white">Bank account and debit card</h6>
                                        <p className="color__grey_on_dark">Starters' CFO will help you open a bank account with one of our many partners, and get started with generating revenue on day 1.</p>
                                    </Col>
                                    <Col sm={6} xs={6} md={3}>
                                        <i className="fa fa-user-friends color__white" style={{ fontSize: '35px' }}></i>
                                        <br></br><br></br>
                                        <h6 className="color__white">SCFO Community</h6>
                                        <p className="color__grey_on_dark">Network with other entreprenuers and start ups in the nation through our invite only forum, or exclusive meet ups.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>

                    <Container>
                        <Row style={{ marginBottom: '50px', marginTop: '50px' }}>
                            <Col>
                                <h2 className="color__dark text-center">The simplest way to get started</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2} className="d-none d-md-flex">
                                <img src="/static/images/logos/scfo/scfo-square-logo.png" alt='Starters CFO' style={{ height: '50px' }}></img>
                            </Col>
                            <Col>
                                <h5 className="color__dark">Get started with Starters CFO</h5>
                                <ul className="card__list --spaced color__dark font__15" style={{ marginTop: '15px' }}>
                                    <li><i className="fa fa-check"></i>&nbsp;Complete registration for chosen entity</li>
                                    <li><i className="fa fa-check"></i>&nbsp;Letter Head Design & Print <span className="color__light-grey">( ₹ 1000 over, optional )</span></li>
                                    <li><i className="fa fa-check"></i>&nbsp;Set of 4 stamps <span className="color__light-grey">( ₹ 799 over, optional )</span></li>
                                    <li>🎉 Domain Name + Web Hosting for 1 year</li>
                                    <li>🎉 10 Professional Emails</li>
                                    <li>🎉 Current Bank Account w/ ICICI / DBS / IndusInd</li>
                                    <li>🎉 10 day free trial of Virtual CFO services</li>
                                    <li>🎉 Legal templates for founder agreement, vendor agreement & more.</li>
                                    <li>🎉 Benefits and credits from Google, Amazon, Razorpay & more.</li>
                                </ul>
                            </Col>
                            <Col md={4} style={{ borderLeft: '1px solid #f4f8fb' }}>

                                <h2 className="color__dark">₹ 28,799</h2>
                                <p className="color__light-grey">
                                    Section 8 Non Profit Company<br></br>
                                    One time fee, all inclusive.
                                </p>

                                <h4 className="color__dark">₹ 9,799</h4>
                                <p className="color__light-grey">
                                    Trust or Society<br></br>
                                    One time fee, all inclusive.
                                </p>
                            </Col>
                        </Row>
                    </Container>


                    <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
                        <Col>
                            <Container>
                                <LineConvert product={'ngo'}></LineConvert>
                            </Container>
                        </Col>
                    </Row>

                    <Container>

                        <Row className="hero__text">
                            <Col>
                                <h4 className="color__dark text-center font__30">Registration in detail</h4>
                                <br></br>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="justify-content-center align-items-center flex-column d-none d-md-flex d-lg-flex d-xl-flex" md={5}>
                                <img src="/static/svg/still-curious.svg" alt='Still curious?' style={{ width: '67%!important' }}></img>
                                <br></br>
                                <br></br>
                                <h5 className="color__dark">Still curious? </h5>
                                <p className="color__grey">
                                    Call our team for immediate resolution to your questions, or fill out our interest form, and we will get in touch in 24 hours.<br></br> <br></br>Whatsapp {WHATSAPP_DISPLAY_NUMBER}.
                                </p>
                            </Col>
                            <Col md={7}>
                                <Accordion defaultActiveKey="0">
                                    <Card className="-no-shadow -no-hover border-radius__0">
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="color__dark">
                                            What is an NGO?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="color__grey">
                                                <p>In India non profit organisations/ public charitable organisations (NGO) can be registered as <strong>trusts</strong>, <strong>societies</strong>, or a <strong>private limited non profit company</strong>, under section-8 companies. <br></br>Non-profit organisations in India exist independently of the state, and are ‘non-profit-making’, in as much as they are prohibited from distributing a monetary residual to their own members.</p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="-no-shadow -no-hover border-radius__0">
                                        <Accordion.Toggle as={Card.Header} eventKey="1" className="color__dark">
                                            What are the tax benefits offered to NGOs?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body className="color__grey">
                                                <p>Whether a trust, society or section-8 company (previous section 25), the Income Tax Act gives all categories equal treatment, in terms of exempting their income and granting 80G certificates, whereby donors to non-profit organisations may claim a rebate against donations made. Foreign contributions to non-profits are governed by FC(R)A regulations and the Home Ministry. </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="-no-shadow -no-hover border-radius__0">
                                        <Accordion.Toggle as={Card.Header} eventKey="2" className="color__dark">
                                            What is Composition scheme and when should a business opt for it?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body className="color__grey">
                                                If eligible, under the composition scheme, a business is granted certain benefits.

                                                <ul className="card__list mt-2 mb-2">
                                                    <li><i className="fa fa-check"></i>&nbsp;File returns only once every quarter.</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;They cannot issue taxable invoices.</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;They cannot claim any input credit.</li>
                                                </ul>
                                                To understand if you are eligible for this scheme, feel free to schedule a free call with us.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="-no-shadow -no-hover border-radius__0">
                                        <Accordion.Toggle as={Card.Header} eventKey="3" className="color__dark">
                                            What are the benefits of GST registration?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body className="color__grey">
                                                <ul className="card__list">
                                                    <li><i className="fa fa-check"></i>&nbsp;Collect input credit.</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;Make interstate sales without any restrictions.</li>
                                                    <li><i className="fa fa-check"></i>&nbsp;They cannot claim any input credit.</li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                            <Col className="justify-content-center align-items-center flex-row d-xs-flex d-sm-flex d-md-none mt-5 text-center">
                                <img src="/static/svg/still-curious.svg" alt='Still curious?' style={{ width: '67%!important' }}></img>
                                <br></br>
                                <br></br>
                                <h5 className="color__dark">Still curious? </h5>
                                <p className="color__grey">
                                    Call our team for immediate resolution to your questions, or fill out our interest form, and we will get in touch in 24 hours.<br></br> <br></br>Whatsapp {WHATSAPP_DISPLAY_NUMBER}.
                                </p>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }}></Row>

                    </Container>

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

export default RegisterNGOIndia;
