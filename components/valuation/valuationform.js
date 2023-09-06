import React, { Fragment } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { FormValidation } from 'calidation';
// import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGE_NUMBER } from "../../constants";
import Link from 'next/link';

// const FORM_CONFIG = {
//     full_name: {
//         isRequired: {
//             message: 'Full name is a required field.'
//         },
//     },
//     mobile: {
//         isRequired: {
//             message: 'Mobile is a required field.'
//         },
//         isExactLength: {
//             message: 'Mobile number must have exactly 10 digits.',
//             length: 10,
//         },
//         isRegexMatch: {
//             message: 'Mobile numbers can only contain digits.',
//             regex: /^\d{10}$/,
//         },
//     },
//     email: {
//         isRequired: {
//             message: 'Email is a required field.'
//         },
//         isEmail: { message: 'Please enter a valid e-mail address' },
//     },
// };


export default class VALUATIONFORM extends React.Component {

    state = {
        'showPopConvert': false,
        'buttonText': 'Submit',
        'convertSuccess': ''
    }

    // onSubmit = async ({ fields, isValid }) => {
    //     if (isValid) {
    //         this.setState({ 'buttonText': 'Processing...' });
    //         const response = await fetch('/api/v1/leads/', {
    //             'body': JSON.stringify({
    //                 "full_name": fields.full_name,
    //                 "email": fields.email,
    //                 "mobile": fields.mobile,
    //                 "product": this.props.product,
    //             }),
    //             'method': 'POST',
    //             'headers': {
    //                 "cache-control": "no-cache",
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         console.log(response);

    //         if (response.ok) {
    //             let json = await response.json();
    //         } else {
    //             response.text().then(result => { console.log(result) });
    //         }

    //         this.setState({
    //             'convertSuccess': 'x',
    //         })
    //     }
    // };

    render() {
        const {
            title
        } = this.props;

        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={12} md={12}>
                            <Card>
                                <Card.Body style={{ 'backgroundColor': '#f3f8fb' }}>
                                <>
                                        <Fragment>
                                            <Row style={{ marginBottom: '5px' }}>
                                                <Col>
                                                    <h4 className="color__dark">{this.props.title}</h4>
                                                    <p className="color__dark">Hear back in 24 hours, or Whatsapp +91 81128 11268 now.</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                            <Col md={12}>
                                            <iframe 
                                                width="100%"
                                                height="300" 
                                                src="https://crm.starterscfo.com/forms/wtl/d3938263727cd88e397764e4c01c291a" 
                                                frameBorder="0" sandbox="allow-top-navigation allow-forms allow-same-origin allow-scripts allow-popups"
                                                allowFullScreen>
                                            </iframe>

                                            </Col>
                                                
                                            </Row>
                                            
                                        </Fragment>
                                        <p className="privacy_policy color__light-grey font__10">
                                            By creating an account with Starter's CFO, you agree to our <Link href="/terms-of-service"><a>terms</a></Link> and <Link href="/privacy-policy"><a>privacy policy</a></Link>.
                                        </p>
                                    </>
                                    
                                    {/* {
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
                                                    WhatsApp us at <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_MESSAGE_NUMBER}&text=Hi%21%20I%20just%20submitted%20a%20request%20form%20on%20your%20website.%0d%0aI%20am%20interested%20in%20your%20product.&source=&data=`} target="_blank" rel="noreferrer"><i className="fab fa-whatsapp color__whatsapp"></i>{WHATSAPP_DISPLAY_NUMBER}</a>
                                                    <br></br>
                                                    Email us at info@starterscfo.in
                                                    <br></br>
                                                    Chat with us, look for chat bubble in the bottom right corner of the screen.
                                                </span>
                                            </p>
                                        </> :
                                            <FormValidation className="pop-convert--form" config={FORM_CONFIG} onSubmit={this.onSubmit}>
                                                {({ errors, fields, submitted }) => (
                                                    <>
                                                        <Fragment>
                                                            <Row style={{ marginBottom: '5px' }}>
                                                                <Col>
                                                                    <h4 className="color__dark">{this.props.title}</h4>
                                                                    <p className="color__dark">Hear back in 24 hours, or Whatsapp +91 81128 11268 now.</p>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                            <Col md={12}>
                                                                    <Form.Group controlId="formBasicEmail">
                                                                        <Form.Control type="email" placeholder="Email *" required name="email" value={fields.email} onChange={() => { }} />
                                                                        {submitted && errors.email && <small className="text-danger">{errors.email}</small>}
                                                                    </Form.Group>
                                                                </Col>
                                                                
                                                            </Row>
                                                            <Row>
                                                                <Col md={6}>
                                                                    <Form.Group controlId="formBasicName">
                                                                        <Form.Control type="text" placeholder="First Name" required name="first_name" value={fields.first_name} onChange={() => { }} />
                                                                        {submitted && errors.full_name && <small className="text-danger">{errors.first_name}</small>}
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group controlId="formBasicName">
                                                                        <Form.Control type="text" placeholder="Last Name" required name="last_name" value={fields.last_name} onChange={() => { }} />
                                                                        {submitted && errors.last_name && <small className="text-danger">{errors.last_name}</small>}
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md={2} sm={2} xs={2} style={{ paddingRight: '0px', marginRight: '0px' }}>
                                                                    <Form.Group controlId="formMobile">
                                                                        <Form.Control className="countcode" type="text" value="+91" disabled />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={10} sm={10} xs={10}>
                                                                    <Form.Group controlId="formMobile">
                                                                        <Form.Control type="tel" placeholder="Mobile Number *" required name="mobile" value={fields.mobile} onChange={() => { }} min="10" max="10" />
                                                                        {submitted && errors.full_name && <small className="text-danger">{errors.mobile}</small>}
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <Button variant="primary" type="submit" className="gradient btn__primary">
                                                                        {this.state.buttonText}
                                                                    </Button>
                                                                </Col>
                                                            </Row>
                                                        </Fragment>
                                                        <p className="privacy_policy color__light-grey font__10">
                                                            By creating an account with Starter's CFO, you agree to our <a href="">terms</a> and <a href="">privacy policy</a>.
                                                        </p>
                                                    </>
                                                )}
                                            </FormValidation>
                                    } */}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}