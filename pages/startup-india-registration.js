import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../components/site/layout';
import PopConvert from '../components/leadPages/popConvert';
import LineConvert from '../components/leadPages/lineConvert';
import ExitConvert from '../components/leadPages/exitConvert';
import HeaderConvert from '../components/leadPages/headerConvert';
import Perks from '../components/leadPages/perks';
import Meta from '../components/site/meta';
import Button from 'react-bootstrap/Button';


class StartupIndiaRegistration extends React.Component {

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
                {/* <Meta title="Start up India Registration" description="Start up India Registration Online. Cheapest, Fastest. Free Perks and gifts included."></Meta> */}

                <Meta 
                title="Streamline Your Startup Registration with Starters' CFO"
                description="Starters' CFO your team dedicated partner is here to guide you through the process of startup registration with their Expert's suggestions. "
                keywords="msme startup registration, register startup, startup company registration, startup valuation services, startup valuation, How do I register for start up India, What benefits do I get after Startup India registration?, startup registration, startup india registration, startup register, register your startup, startup registration online, start up company, start up business ideas, startup company, startup ideas, startup company, startup registration online"
                robots="index,follow"

                og_url="https://starterscfo.com"
                og_type="website"
                og_title="Streamline Your Startup Registration with Starters' CFO"
                og_description="Starters' CFO your team dedicated partner is here to guide you through the process of startup registration with their Expert's suggestions."
                og_image="https://starterscfo.com/static/images/og/img3.avif"
                twitter_title="Streamline Your Startup Registration with Starters' CFO"
                twitter_card="summary_large_image"
                twitter_description="Starters' CFO your team dedicated partner is here to guide you through the process of startup registration with their Expert's suggestions."
                twitter_image="https://starterscfo.com/static/images/og/img3.avif"

                ></Meta>
                <Layout promobanner={true}>

                    <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert} product={'startupindia'} mobile={this.state.mobile}></PopConvert>
                    <ExitConvert></ExitConvert>

                    <h1 className="d-none">Start up India Registration</h1>
                    <h2 className="d-none">Tax Benefits</h2>

                    <div className="w-100">
                        <div className="-white">
                            <HeaderConvert title="Start up India Registration @ ₹ 12,500/-" />
                        </div>
                    </div>

                    <Container>
                        <hr></hr>
                        <Row className="hero__text">
                            <Col>
                                <h4 className="color__dark text-center font__40">Why register with Start Up India?</h4>
                                <p className="font__20 text-center color__dark">There are number of benefits of registering with Start Up India.</p>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '30px' }}></Row>

                        <Row>
                            <Col sm={12} md={6}>
                                <h3>1. Access to a ₹ 10,000 Crore Fund</h3>
                                <p className="color__grey">
                                    The government of India has allocated ₹ 10,000 Crore to Start Up India. This amount is used to fund start ups registered under the scheme. To learn more about the Start Up India and the fund, visit <a href="https://www.startupindia.gov.in/content/sih/en/about-startup-india-initiative.html" target="_blank" rel="noopener noreferrer">startupindia.gov.in</a>.
                                    Additional information about the seed fund also available at <a href="https://seedfund.startupindia.gov.in">https://seedfund.startupindia.gov.in</a>
                                </p>
                            </Col>
                            <Col sm={12} md={6}>
                                <h3>2. Tax Benefits</h3>
                                <p className="color__grey">
                                    Registration inlcudes several tax benefits, including <b>angel tax exemption</b> if you are currently raising money. As described by the scheme, the benefits include "Income Tax exemption for a period of 3 consecutive years and exemption on capital and investments above Fair Market Value".
                                </p>
                            </Col>
                        </Row>
                        <Row className="mt-md-4">
                            <Col sm={12} md={6}>
                                <h3>3. Trademark & Patent Fee waivers</h3>
                                <p className="color__grey">
                                    Fast track patent application with up to 80% rebate in filling patents, and similar benefits for trademark registration.
                                </p>
                            </Col>
                            <Col sm={12} md={6}>
                                <h3>4. Various government grants & subsidies</h3>
                                <p className="color__grey">
                                    Learn about all the different schemes and policies available <a href="https://www.startupindia.gov.in/content/sih/en/government-schemes.html">here</a>. Some items include the Venture Capital Scheme, High Risk - High Reward Scheme, Stand Up India Scheme and more.
                                </p>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }}></Row>
                    </Container>

                    <div className="w-100">
                        <Container>

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
                                <Col>
                                    <h5>1. What is Startup India Program?</h5>
                                    <p className="color__grey font__15">
                                        Under the Startup India Scheme, eligible companies can get recognised as Startups by DPIIT, in order to access a host of tax benefits, easier compliance, IPR fast-tracking & more.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <br></br>
                                    <h5>2. What programs can I benefit from post registration?</h5>
                                    <p className="color__grey font__15">
                                        <ul className="card__list">
                                            <li><i className="fa fa-check"></i>&nbsp;&nbsp;The venture capital assistance scheme.</li>
                                            <li><i className="fa fa-check"></i>&nbsp;&nbsp;Technology development program.</li>
                                            <li><i className="fa fa-check"></i>&nbsp;&nbsp;Ayurvedic Biology program.</li>
                                            <li><i className="fa fa-check"></i>&nbsp;&nbsp;MSME Rural Entrepreeurship program.</li>
                                            <li><i className="fa fa-check"></i>&nbsp;&nbsp;<a href="https://www.startupindia.gov.in/content/sih/en/government-schemes.html" target="_blank" rel="noreferrer">and thousands more</a>...</li>
                                        </ul>
                                    </p>
                                </Col>
                                <Col>
                                    <br></br>
                                    <h5>3. What benefits do I get after registration?</h5>
                                    <p className="color__grey font__15">
                                        <ul className="card__list">
                                            <li><i className="fa fa-check"></i>&nbsp;&nbsp;Self compliance under environmental and labour laws.</li>
                                            <li><i className="fa fa-check"></i>&nbsp;&nbsp;Fast track patent applications & IPR protection.</li>
                                            <li><i className="fa fa-check"></i>&nbsp;&nbsp;Income tax exemption for 3 years.</li>
                                            <li><i className="fa fa-check"></i>&nbsp;&nbsp;Get listed as seller to the government, bypass minimum requirements.</li>
                                            <li><i className="fa fa-check"></i>&nbsp;&nbsp;Easy winding up of companies.</li>
                                        </ul>
                                    </p>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <br></br>
                                    <h5>4. Do I qualify for registration?</h5>
                                    <p className="color__grey font__15">
                                        <ul className="card__list">
                                            <li><i className="fa fa-check"></i>&nbsp;&nbsp;You are incorporated as a PLC / LLP / Partnership.</li>
                                            <li><i className="fa fa-check"></i>&nbsp;&nbsp;Your company is not older than 10 years.</li>
                                            <li><i className="fa fa-check"></i>&nbsp;&nbsp;Turnover since incorporation has not crossed INR 100 crores.</li>
                                            <li><i className="fa fa-check"></i>&nbsp;&nbsp;You have a scalable business model with potential for job creation and revenue generation.</li>
                                            <li><i className="fa fa-check"></i>&nbsp;&nbsp;You're organisation was not formed by splitting or restructuring a business already in existence.</li>
                                        </ul>
                                    </p>
                                </Col>
                                <Col>
                                    <br></br>
                                    <h5>5. How do I register for start up India?</h5>
                                    <p className="color__grey font__15">
                                        <ul className="card__list">
                                            The process is easy.
                                            <br></br>
                                            1. Fill form on this page. <br></br>
                                            2. Receive call from us and submit documents. <br></br>
                                            3. Pay registration fees. <br></br>
                                            4. Get registered and receive access to govt. portal for benefits. <br></br>
                                        </ul>
                                    </p>
                                    <span className="color__grey font__13">If you are not incorporated yet, please explore - </span>
                                    <h3><a href="/company-registration" className="font__20">Private Limited Company Registration</a></h3>
                                </Col>
                            </Row>

                            <Row style={{ marginTop: '20px' }}></Row>

                        </Container>
                    </div>

                    <div className="w-100" style={{ backgroundColor: '#f4f8fb' }}>
                        <Container>
                            <Row style={{ height: '350px', marginTop: '50px', paddingTop: '50px' }}>

                                <Col className="text-center" md={{ 'span': '8', 'offset': '2' }}>
                                    <h3 className="color__blue"><b>Digitally Enabled, Online Processes</b></h3>
                                    <br></br>
                                    <p className="color__grey">
                                        Starters' CFO differs from the competition in the simple online processes it has built to help you achieve your businsess accounting needs.<br></br><br></br>
                                        You can stop struggling through lists of email attachments sent back and forth for ever! Our digital partners include Zoho Books, Tally, Quickbooks & Razorpay amongst others.
                                    </p>
                                    <br></br>
                                    <Button className="btn__transparent border-color__dark color__dark btn__secondary" size="lg" onClick={this.togglePopConvert}>Get a free consultation</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <Perks />

                    <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
                        <Col>
                            <Container>
                                <LineConvert product={'startupindia'}></LineConvert>
                            </Container>
                        </Col>
                    </Row>

                    {/* Footer Text */}
                    <div className="w-100 background-color__footer_text">
                    <Container>
                    <Row className="background-color__footer_text footer" style={{ paddingTop: '60px', paddingBottom: '10px' }}>
                            <Col>
                            <h5 class="font__14 weight__600 mt-2 mb-2">Most Searched for Starters’ CFO </h5>
                            <p className='font__12'>startup valuation services | startup valuation  | How do I register for start up India | What benefits do I get after Startup India registration? | startup registration | startup india registration | startup register | register your startup | startup registration online | start up company| start up business ideas | startup company | startup ideas | startup company</p>

                            <h5 class="font__14 weight__600 mt-2 mb-2">Startup valuation services </h5>
                            <p className='font__12'>Starters' CFO recognizes that a precise valuation provides a clear picture of your startup's financial health and potential, enabling you to seize growth opportunities with confidence. From assessing your intellectual property, market positioning, and revenue projections to analyzing industry trends, competitive landscape, and risk factors.</p>

                            <h5 className='font__14 weight__600 mt-2 mb-2'>Startup valuation</h5>
                            <p className='font__12'>Startup valuation is a critical aspect of any entrepreneurial journey, as it determines the worth of your company in the eyes of potential investors, partners, and even yourself. At Starters' CFO, we understand the importance of accurate valuation for startups, and we're here to guide you through the intricacies of this process.</p>

                            <h5 className='font__14 weight__600 mt-2 mb-2'> What benefits do I get after Startup India registration</h5>
                            <p className='font__12'>After registering your organization at Starters' CFO under the Startup India initiative you can potentially gain several benefits that can help your startup thrive and succeed in the competitive business landscape. Being a registered startup under Startup India adds a level of credibility and recognition to your business.</p>

                            <h5 className='font__14 weight__600 mt-2 mb-2'>How do I register for start up India</h5>
                            <p className='font__12'>Our Experts of Starters’ CFO will help you to register for Startup India. Through registered startups can avail various tax benefits, such as income tax exemptions for three consecutive assessment</p>

                            </Col>
                    </Row>
                    </Container>
                    </div>
                    
                </Layout>
            </>
        );
    }
}

export default StartupIndiaRegistration;
