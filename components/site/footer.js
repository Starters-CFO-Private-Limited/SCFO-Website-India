import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGE_NUMBER } from '../../constants';


class Footer extends React.Component {

    render() {
        return (
            <>
                <div className="w-100 background-color__dark">
                    <Container>
                        <Row className="background-color__dark footer" style={{ paddingTop: '60px', paddingBottom: '10px' }}>
                            <Col>
                                <h6 className="color__white">Pages</h6>
                                <ul className="color__white font__12 color__grey_on_dark" style={{ marginBottom: '10px' }}>
                                    <li className="first"><Link href="/contact"><a>Contact</a></Link></li>
                                    <li><Link href="articles"><a>Blog</a></Link></li>
                                    <li><Link href="/careers"><a>Careers</a></Link></li>
                                </ul>
                                <ul className="color__white font__12 color__grey_on_dark" style={{ marginBottom: '30px' }}>
                                    <li className="first"><Link href="/startup-valuation-india"><a>Start up Valuation in India</a></Link></li>
                                    <li><Link href="/virtual-cfo"><a>Virtual CFO</a></Link></li>
                                    <li><Link href="/compliances"><a>Compliances</a></Link></li>
                                </ul>
                                <h6 className="color__white">Free Tools</h6>
                                <ul className="color__white font__12 color__grey_on_dark" style={{ marginBottom: '30px' }}>
                                    <li className="first"><Link href="/tools/incorporation/help"><a>Company Structure Quiz</a></Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <h6 className="color__white">Register</h6>
                                <ul className="color__white font__12 color__grey_on_dark" style={{ marginBottom: '30px' }}>
                                    <li className="first"><Link href="/company-incorporation"><a>Company</a></Link></li>
                                    <li className="first"><Link href="/trademark-registration"><a>Trademark</a></Link></li>
                                    <li className="first"><Link href="/gst"><a>GST</a></Link></li>
                                    <li className="first"><Link href="/startup-india-registration"><a>Start Up India</a></Link></li>
                                    <li className="first"><Link href="/msme-registration-india"><a>MSME</a></Link></li>
                                    <li className="first"><Link href="/msme-registration-india"><a>Udyog Aadhar</a></Link></li>
                                    <li className="first"><Link href="/contact"><a>NGO</a></Link></li>
                                    <li className="first"><Link href="/contact"><a>Other?</a></Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <h6 className="color__white">Legal</h6>
                                <ul className="color__white font__12 color__grey_on_dark" style={{ marginBottom: '30px' }}>
                                    <li className="first"><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
                                    <li className="first"><Link href="/terms-of-service"><a>Terms of Service</a></Link></li>
                                    <li className="first"><Link href="/contact"><a>Customer Support</a></Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <h6 className="color__white">Social Presence</h6>
                                <ul className="color__white font__12 color__grey_on_dark" style={{ marginBottom: '30px' }}>
                                    <li className="first"><a href="https://www.facebook.com/StartersCFO/" target="_blank" rel="noreferrer">Facebook</a></li>
                                    <li><a href="https://www.linkedin.com/company/starters-cfo/" target="_blank" rel="noreferrer">Linkedin</a></li>
                                    <li><a href="https://twitter.com/CfoStarter" target="_blank" rel="noreferrer">Twitter</a></li>
                                </ul>
                                <br></br>
                                <h6 className="color__white">Reach Us</h6>
                                <p className="color__grey_on_dark font__12">
                                    Starters’ CFO Private Limited
                                    <br></br>243, 2nd floor, Gujrawala Town, Part 3,
                                    <br></br>Delhi - 110009 
                                    <br></br>Opp HDFC Bank, Near Pentamed Hospital
                                    <br></br>
                                    <br></br>
                                    <span className="color__grey_on_dark font__14"><i className="fab fa-whatsapp"></i>&nbsp; <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_MESSAGE_NUMBER}&text=Hi%21%20I%20just%20submitted%20a%20request%20form%20on%20your%20website.%0d%0aI%20am%20interested%20in%20your%20product.&source=&data=`} target="_blank" rel="noreferrer" className="color__grey_on_dark font__14">{WHATSAPP_DISPLAY_NUMBER}</a></span>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row style={{ marginTop: '20px' }}></Row>
                        <Row className="footer" style={{ paddingTop: '0', paddingBottom: '50px' }}>
                            <Col className="justify-content-start d-none d-md-flex">
                                <img src="/static/images/logos/scfo/footer_light_logo.png" alt='starters scfo' className="footer__logo"></img>
                            </Col>
                            <Col className="text-center d-xs-flex d-sm-flex d-md-none">
                                <img src="/static/images/logos/scfo/footer_light_logo.png" alt='starters scfo' className="footer__logo"></img>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <script src="static/footer-integrations.js"></script>
            </>
        )
    }
}

export default Footer;
