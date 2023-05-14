import React from "react";

import Layout from '../components/site/layout';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Meta from '../components/site/meta';

class Privacypolicy extends React.Component {

    render() {
        return (
            <>
                <Layout promobanner={true}>
                    <Meta title="Privacy Policy"></Meta>
                    <Row>
                        <Col>
                            <div className="seoPage--header d-flex justify-content-center">
                                <p>Privacy Policy</p>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '50px' }}></Row>
                    <Container>
                        <Row className="d-flex justify-content-center seoPage--content color__grey">
                            <Col md={12} sm={12}>
                                <h3 className="color__dark">Our Commitment to Privacy</h3>
                                <p>Our Privacy Policy was developed as an extension of our commitment to combine quality products and services with integrity in dealing with our users. The Policy is designed to assist you in understanding how we collect, use and safeguard the personal information you provide to us and to assist you in making informed decisions when using our site and our products and services.This privacy statement applies to the website of Starters CFO.in:&nbsp;info@Starters&nbsp;CFO.in</p>
                                <h3 className="color__dark">Registration and Setup Forms</h3>
                                <p>Starters CFO.in registration and website setup forms may require users to give us contact information, such as name and email address. Contact information from the registration and setup forms is used to setup your wedding website services or provide technical support. The customers contact information is also used to get in touch with the customer when necessary.</p>
                                <h3 className="color__dark">What is a Cookie?</h3>
                                <p>Cookies are a feature of web browser (Firefox, Safari, Internet Explorer, Netscape Navigator, etc.) software that allows web servers to recognize the computer used to access a site. They are small pieces of data that are stored by a users web browser on one site to simplify subsequent interactions with that site by the same user or to use the information to streamline the user's transaction on related web pages. This makes it easier for a user to move from site to site and to complete transactions over the Internet. Cookies should make your online experience easier and more personalized.</p>
                                <p>Our site utilizes cookies to collect information about how our site is used. Passive Information gathered may include the date and time of visits, the site pages viewed, time spent at our site, the sites visited just before and just after our site. If you do not wish to transmit 'cookie' information about yourself, you may turn off the cookie function in your web browser; please consult the 'Help' section of your browser to correctly do so.</p>
                                <p>Our site's servers also automatically identify your computer by its Internet Protocol address which is a unique string of numbers that is assigned to your computer by your Internet Service Provider. Your IP address may be used to address problems with our server or administer our site or to gather broad demographic information about our users.</p>
                                <h3 className="color__dark">Your Information In Relation to Others We Link To</h3>
                                <p>You may be able to access other websites through our site. When you do so you are doing so subject to their policies regarding privacy and data collection and you should read those sites privacy policies to make sure you agree to them before using such sites. When you choose to shop at such sites, you should read their privacy policies to make sure you agree to them before making purchases.</p>
                                <h3 className="color__dark">Sharing Information with Advertisers or Other Third Parties</h3>
                                <p>We do not share any personal information with any parties outside Starters CFO.in. Including names and e-mail address. While we may contact you if you have opted to receive news and updates, all correspondence is sent through Starters CFO.in and no others.</p>
                                <h3 className="color__dark">Sharing Information with the Government or As Otherwise Required by Law</h3>
                                <p>You agree that You have the needed and required rights and permissions on all content uploaded to Your wedding website. Files such as music, photos, videos and other, must be accompanied by permission in writing from current copyright or license holder(s). Upon notification and proof of copyright infringement, Your account and or website may be suspended or terminated.</p>
                                <h3 className="color__dark">Questions, Comments, Contact</h3>
                                <p>If you have any questions, comments or concerns with the privacy of your information collected by Starters CFO.in, please&nbsp;contact us.</p>
                                <p>The organization is a congregation of professionally qualified and experienced persons who are committed to add value and optimize the benefits accruing to clients.</p>
                            </Col>
                        </Row>
                    </Container>
                </Layout>
            </>
        )
    }
}

export default Privacypolicy;
