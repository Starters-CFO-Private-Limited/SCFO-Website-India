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
import Meta from '../components/site/meta';
import { WHATSAPP_DISPLAY_NUMBER } from '../constants';
import DigitallyEnabled from '../components/leadPages/digitallyEnabled';
import FormIframe from '../components/leadPages/formIframe';

const PLC_REGISTRATION_COST = "₹ 7,800"; // "₹ 6,800"; 
const OPC_REGISTRATION_COST = "₹ 7,499"; //"₹ 5,800";


class CompanyIncorporation extends React.Component {

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
                <Meta title="Company registration services| Private limited company registration| Starter CFO" description="Start your new business with Starters' CFO - the smartest way to incorporate in India. Private Limited Company, One Person Company, LLP, NGO & other forms."></Meta>

                <Layout promobanner={true}>

                    <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert} product={'ci'} mobile={this.state.mobile}></PopConvert>
                    <ExitConvert></ExitConvert>

                    {/* desktop hero */}
                    <div className="d-none d-md-block d-lg-block d-xl-block w-100">
                        <div className="hero--wrapper">
                            <div className="hero__background d-flex align-items-start">
                                <Container>
                                    <Row className="hero__text">
                                        <Col>
                                            <h4 className="title">The BEST way <br></br> to start a new business</h4>
                                            <p className="description">
                                                <ul className="card__list">
                                                    <li><i className="fa fa-check"></i>&nbsp; Investor friendly</li>
                                                    <li><i className="fa fa-check"></i>&nbsp; Completely online process</li>
                                                    <li><i className="fa fa-check"></i>&nbsp; Legal agreements and strategic advisory</li>
                                                    <li><i className="fa fa-check"></i>&nbsp; 10+ free perks with every registration</li>
                                                </ul>
                                            </p>
                                            <Button className="btn__secondary large" onClick={this.togglePopConvert}>Register your business</Button>
                                            <br></br>
                                            <br></br>
                                            <span className="color__white font__15" style={{ marginTop: "15px" }}>
                                                Are you unsure of your company structure? Take this <a href="/tools/incorporation/help" target="_blank" className='font__12'>quiz here</a> for recommendations.
                                            </span>
                                        </Col>
                                        <Col>
                                            <Card>
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
                                                        title="Get a Free Consultation"
                                                        whatsapp="true" 
                                                        footerText="true" />

                                                           
                                                    }
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="grass"></div>
                    </div>

                    {/* mobile hero */}
                    <div className="w-100 d-xs-block d-sm-block d-md-none">
                        <div className="hero--wrapper -mobile">
                            <div className="hero__background d-flex align-items-start -mobile">
                                <Container>
                                    <Row className="hero__text">
                                        <Col className="text-center">
                                            <h4 className="title">The best way <br></br> to start a new business</h4>
                                            <br></br>
                                            <p className="description">
                                                Staters' CFO is dedicated to making it simpler and easier for you to start your new business.
                                            </p>
                                            <Button className="btn__secondary large" onClick={this.togglePopConvert}>Register your business</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>

                    <Row style={{ marginTop: '50px' }}></Row>

                    <Container>

                        <Row style={{ marginTop: '10px' }}>
                            <Col md={{ 'span': '8', 'offset': '2' }}>
                                <h4 className="color__dark text-center weight__700">Company Registration Services</h4>
                                <br></br>
                                <p className="font__20 text-center color__dark">
                                    Incorporating a business can be a lengthy and complicated process.<br></br>
                                    Starters' CFO is dedicated to empowering entreprenuers in this regard and making India start up ready.
                                    <br></br><br></br>

                                    Starters' CFO serves 100+ funded businesses. We use this experience to help build an investory friendly legal structure for your business. Include clauses for ESOP, preference shares and more from the get go.

                                    <br></br>
                                    <br></br>



                                    Not sure about company structure? Use <a href="/tools/incorporation/help" className="font__20" style={{ color: '#0056b3', textDecorationLine: 'underline' }} target="_blank">this tool</a> to decide.
                                    <br></br>
                                </p>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }}></Row>

                        <hr></hr>

                        <Row style={{ marginTop: '80px' }}></Row>

                        <Row className="text-center">
                            <Col>
                                <img src="/static/images/illustrations/company-incorporation.svg" alt='Company Incorporation' className="features__illustration"></img>
                                <br></br><br></br>
                                <h4 className="color__dark"><b>Company Incorporation</b></h4>
                                <p className="color__grey font__15 text-center">
                                    <br></br>
                                    If you have not already decided, our team will be available for consultation and help you choose the best legal entity suitable for your business.
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
                                    Starting a new business will need agreements with your partners, co founders, investors and first employees. We help you prepare the right documents, and protect your interests.
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
                                    Understand valuations, fund raising, ESOPs, SOPs, Start Up India & more.
                                </p>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }}></Row>

                    </Container>

                    <DigitallyEnabled />

                    <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
                        <Col>
                            <Container>
                                <LineConvert product={'ci'}></LineConvert>
                            </Container>
                        </Col>
                    </Row>

                    <Container>
                        <Row style={{ marginTop: '50px', marginBottom: '20px' }}>
                            <Col>
                                <div>
                                    <h4 className="color__dark"><b>Perks and Benefits for you</b></h4>
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
                                    <img src="/static/images/partners/rzp.png" alt='Razorpay Partner' height="45px" style={{ marginBottom: '10px' }}></img>
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
                                        <p className="color__dark text-center">Receive a call from an executive to get started.</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={this.togglePopConvert}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    One Person Company
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for proprietprs looking to limited liability and have 100% control
                                                </p>
                                            </Card.Header>
                                            <Card.Body>
                                                <table className="card__fancy--table table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                One proprietor only
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Moderate compliance needs
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Difficult to raise funds
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Cannot offer ESOP
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Tax @ 22%<br></br>
                                                                SC + AT + MAT applicable
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {OPC_REGISTRATION_COST} <br></br>
                                                                Starters' CFO Price
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
                                                    Private Limited Company
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Idela for businesses looking for high turnover, external sources of funding
                                                </p>
                                            </Card.Header>
                                            <Card.Body>
                                                <table className="card__fancy--table table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                At least two directors
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                High compliance needs
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Easy to raise funds
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Can offer ESOP
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Tax @ 30% <br></br>
                                                                SC + AT + MAT applicable
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {PLC_REGISTRATION_COST} <br></br>
                                                                Starters' CFO Price
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
                                                    Limited Liability Partnership
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for service oriented businesses with low investment needs
                                                </p>
                                            </Card.Header>
                                            <Card.Body>
                                                <table className="card__fancy--table table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                At least two directors
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Low compliance needs
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Moderately easy to raise funds
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Cannot offer ESOP
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Tax @ 30%<br></br>
                                                                SC + AT + MAT applicable
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {OPC_REGISTRATION_COST} <br></br>
                                                                Starters' CFO Price
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
                                <Row style={{ marginBottom: '50px' }}></Row>
                                <Row style={{ marginBottom: '20px' }}>
                                    <Col>
                                        <h4 className="color__dark text-center">Other firms</h4>
                                        <p className="color__dark text-center">More ways to incorporate in India</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={this.togglePopConvert}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    NGO ( Section 8 Company )
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for non profit organisations or social ventures
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={this.togglePopConvert}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Partnership Firm
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for individuals who have agreed to share the profits of a business
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={this.togglePopConvert}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Proprietorship Firm
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for small operations with a single proprietor.
                                                    <br></br><br></br>
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={this.togglePopConvert}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Subsidiary of a company
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for organisations looking to venture into new domains
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={this.togglePopConvert}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Subsidiary of foreign company
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for foreign organisations looking to venture into India
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={this.togglePopConvert}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Public Limited Company
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for large scale businesses, with high investment needs
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '20px' }}>
                                    <Col>
                                        <p className="text-center color__dark sans-serif font__15"><i className="fa fa-info-circle"></i>&nbsp;&nbsp;Want to start a business but not sure of an entity? <a style={{ fontSize: '15px' }} onClick={() => { this.togglePopConvert }}>Request a call back</a> to explore best solutions & understand key differences. </p>
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
                                        <h4 className="color__white text-center">Start up toolkit</h4>
                                        <p className="color__white text-center">Beyond incorporation - getting you started</p>
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
                                    <li className="first"><i className="fa fa-check"></i>&nbsp;DIN for two directors <span className="color__light-grey">( ₹ 1000 / director for more )</span></li>
                                    <li><i className="fa fa-check"></i>&nbsp;Digital Signature Token for 2 Promoters</li>
                                    <li><i className="fa fa-check"></i>&nbsp;MOA + AOA</li>
                                    <li><i className="fa fa-check"></i>&nbsp;Incorporation Certificate</li>
                                    <li><i className="fa fa-check"></i>&nbsp;Company PAN Card</li>
                                    <li><i className="fa fa-check"></i>&nbsp;GST Registration</li>
                                    <li><i className="fa fa-check"></i>&nbsp;Company TAN/TDS Number</li>
                                    <li><i className="fa fa-check"></i>&nbsp;Printed Share Certificates</li>
                                    <li><i className="fa fa-check"></i>&nbsp;Letter Head Design & Print <span className="color__light-grey">( ₹ 1000 over, optional )</span></li>
                                    <li><i className="fa fa-check"></i>&nbsp;Set of 4 stamps <span className="color__light-grey">( ₹ 799 over, optional )</span></li>
                                    <li>🎉 Free Zoho Books Account <span className="color__light-grey">( terms & caps apply. )</span></li>
                                    <li>🎉 Free Payroll Software <span className="color__light-grey">( terms & caps apply. )</span></li>
                                    <li>🎉 Fundraising Assistance <span className="color__light-grey">( terms & caps apply. )</span></li>
                                    <li>🎉 Current Bank Account w/ ICICI / DBS / IndusInd</li>
                                    <li>🎉 15 day free trial of Virtual CFO services</li>
                                    <li>🎉 Legal templates for founder agreement, vendor agreement & more.</li>
                                    <li>🎉 Benefits and credits from Google, Amazon, Razorpay & more.</li>
                                </ul>
                            </Col>
                            <Col md={4} style={{ borderLeft: '1px solid #f4f8fb' }}>

                                <h2 className="color__dark">{OPC_REGISTRATION_COST}</h2>
                                <p className="color__light-grey">
                                    OPC, Limited Liability<br></br>
                                    One time fee, all inclusive.
                                </p>

                                <h4 className="color__dark">{PLC_REGISTRATION_COST}</h4>
                                <p className="color__light-grey">
                                    Private Limited Company<br></br>
                                    One time fee, all inclusive.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
                        <Col>
                            <Container>
                                <LineConvert product={'ci'}></LineConvert>
                            </Container>
                        </Col>
                    </Row>
                </Layout>
            </>
        );
    }
}

export default CompanyIncorporation;
