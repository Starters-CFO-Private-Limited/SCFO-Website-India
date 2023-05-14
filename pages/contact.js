import React from "react";
export default class Contact extends React.Component {
	render() {
		return (
			<>404</>
		)
	}
}

// import React, { Fragment } from 'react';

// import Container from "scfonext/pages/components/site/container";
// import Row from "scfonext/pages/components/site/row";
// import Col from "scfonext/pages/components/site/col";
// import Button from "scfonext/pages/components/site/button";
// import Card from "scfonext/pages/components/site/card";
// import Form from "scfonext/pages/components/site/form";
// import Layout from 'scfonext/pages/components/site/layout';
// import { FormValidation } from 'calidation';
// import Meta from 'scfonext/pages/components/site/meta';
// import { WHATSAPP_DISPLAY_NUMBER } from '../constants';

// class Contact extends React.Component {

// 	state = {
// 		'buttonText': 'Submit',
// 		'submitSuccess': ''
// 	};

// 	render() {

// 		const formConfig = {
// 			full_name: {
// 				isRequired: {
// 					message: 'Full name is a required field.'
// 				},
// 			},
// 			mobile: {
// 				isRequired: {
// 					message: 'Mobile is a required field.'
// 				},
// 				isExactLength: {
// 					message: 'Mobile number must have exactly 10 digits.',
// 					length: 10,
// 				},
// 				isRegexMatch: {
// 					message: 'Mobile numbers can only contain digits.',
// 					regex: /^\d{10}$/,
// 				},
// 			},
// 			email: {
// 				isRequired: {
// 					message: 'Email is a required field.'
// 				},
// 				isEmail: { message: 'Please enter a valid e-mail address' },
// 			},
// 			message: {
// 				isRequired: {
// 					message: 'Message is a required field.'
// 				},
// 			},
// 		};

// 		const onSubmit = async ({ fields, isValid }) => {
// 			if (isValid) {
// 				this.setState({ 'buttonText': 'Processing...' });
// 				console.log('start')
// 				const response = await fetch('/api/v1/leads/', {
// 					'body': JSON.stringify({
// 						"full_name": fields.full_name,
// 						"email": fields.email,
// 						"mobile": fields.mobile
// 					}),
// 					'method': 'POST',
// 					'headers': {
// 						"cache-control": "no-cache",
// 						'Accept': 'application/json',
// 						'Content-Type': 'application/json'
// 					}
// 				})
// 				console.log(response);

// 				if (response.ok) {
// 					// json = await response.json();
// 				} else {
// 					response.text().then(result => { console.log(result) });
// 				}

// 				this.setState({
// 					'submitSuccess': 'x',
// 				})
// 			}
// 		};

// 		return (
// 			<>
// 				<Layout promobanner={true}>
// 					<link rel="stylesheet" href="/static/contact.css" />
// 					<Meta title="Contact" description="Starters' CFO Support - available monday to saturday, 10:00 AM to 6:00 PM"></Meta>

// 					<Container>

// 						<Row style={{ marginTop: '50px' }}></Row>
// 						<Row>
// 							<Col md={{ 'span': '5', 'offset': '1' }} sm={{ 'span': '6' }}>
// 								{/* <Card className="mt-2">
// 									<Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
// 										<Row className="text-center">
// 											<Col>
// 												<i className="fas fa-phone-volume font__50 color__scfo"></i>
// 												<br></br><br></br>
// 												<h4 className="color__dark title">Whatsapp us directly at</h4>
// 												<span className="color__dark font__15">{WHATSAPP_DISPLAY_NUMBER}</span>
// 												<br></br><br></br>
// 												<a href="tel:01141183815" className="btn__primary btn btn-primary btn-sm">Call us</a>
// 											</Col>
// 										</Row>
// 									</Card.Body>
// 								</Card> */}
// 							</Col>
// 							<Col md={{ 'span': '5' }} sm={{ 'span': '6' }}>
// 								{/* <Card className="mt-2">
// 									<Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
// 										<Row className="text-center">
// 											<Col>
// 												<i className="fas fa-comments font__50 color__scfo"></i>
// 												<br></br><br></br>
// 												<h4 className="color__dark title">Chat with our sales team</h4>
// 												<span className="color__dark font__15">Monday to Friday, 10:00 AM to 6:00 PM</span>
// 												<br></br><br></br>
// 												<a href="https://m.me/StartersCFO" className="btn__primary btn btn-primary btn-sm" target="_blank" rel="noreferrer">Chat with us</a>
// 											</Col>
// 										</Row>
// 									</Card.Body>
// 								</Card> */}
// 							</Col>
// 						</Row>

// 						<Row style={{ height: '50px' }} className="d-none d-md-flex"></Row>

// 						<Row>
// 							<Col md={{ 'span': 10, 'offset': 1 }}>
// 								{/* <Card className="mt-2">
// 									<Card.Body className="d-flex custom_wid" style={{ paddingTop: '50px' }}>
// 										<Col md={12} className="text-center">
// 											<div className="heading_meeting">
// 												<h4 className="color__dark mar-top">Send a message</h4>
// 												<p className="color__grey font__15">
// 													Pick a date that works for you to see available times to meet with one of our sales representatives.
// 													<br></br>
// 												</p>
// 											</div>
// 											<br></br>
// 											<Row>
// 												<Col md={12} className="text-left">
// 													<div className="form_content">
// 														<div className="form_start">
// 															<>
// 																{
// 																	this.state.submitSuccess ? <>
// 																		<p className="color__grey">
// 																			<Row className="text-center">
// 																				<Col>
// 																					<h4 className="color__dark font__15">WhatsApp us directly at</h4>
// 																					<span className="color__scfo font__30 mobile_font__15"><i className="fab fa-whatsapp"></i>&nbsp; {WHATSAPP_DISPLAY_NUMBER}</span>
// 																					<br></br>
// 																				</Col>
// 																			</Row>
// 																			<br></br>
// 																			We've received your message. We can't wait to get started.
// 																			We will reach out in the next 30 - 90 minutes. You can call us if you need a faster response.
// 																			<br></br>
// 																			<br></br>
// 																			<span className="color__grey">
// 																				WhatsApp us at <a href={`https://api.whatsapp.com/send?phone={WHATSAPP_MESSAGE_NUMBER}&text=Hi%21%20I%20just%20submitted%20a%20request%20form%20on%20your%20website.%0d%0aI%20am%20interested%20in%20your%20product.&source=&data=`} target="_blank" rel="noreferrer"> &nbsp; <i className="fab fa-whatsapp color__whatsapp font__15"></i> <span className="font__15">{WHATSAPP_DISPLAY_NUMBER}</span></a>
// 																				<br></br>
// 																				Email us at info@starterscfo.in
// 																				<br></br>
// 																				Chat with us, look for chat bubble in the bottom right corner of the screen.
// 																			</span>
// 																		</p>
// 																		<br></br><br></br>
// 																	</> : <>
// 																		<FormValidation className="pop-convert--form" config={formConfig} onSubmit={onSubmit}>
// 																			{({ errors, fields, submitted }) => (
// 																				<>
// 																					<Fragment>
// 																						<Form.Group controlId="formBasicName">
// 																							<Form.Control type="text" placeholder="Full Name" required name="full_name" value={fields.full_name} onChange={() => { }} />
// 																							{submitted && errors.full_name && <small className="text-danger">{errors.full_name}</small>}
// 																						</Form.Group>

// 																						<Form.Group controlId="formBasicEmail">
// 																							<Form.Control type="email" placeholder="Email *" required name="email" value={fields.email} onChange={() => { }} />
// 																							{submitted && errors.email && <small className="text-danger">{errors.email}</small>}
// 																						</Form.Group>

// 																						<Form.Group controlId="formBasicMobile">
// 																							<Form.Control type="tel" placeholder="Mobile *" required name="mobile" value={fields.mobile} onChange={() => { }} />
// 																							{submitted && errors.mobile && <small className="text-danger">{errors.mobile}</small>}
// 																						</Form.Group>

// 																						<Form.Group controlId="formBasicMobile">
// 																							<Form.Control type="text" placeholder="Message *" required name="message" value={fields.message} onChange={() => { }} />
// 																							{submitted && errors.mobile && <small className="text-danger">{errors.message}</small>}
// 																						</Form.Group>
// 																					</Fragment>

// 																					<Button variant="primary" type="submit">
// 																						{this.state.buttonText}
// 																					</Button>

// 																					<br></br>
// 																					<p className="color__light-grey font__10">
// 																						By creating an account with Starter's CFO, you agree to our <a href="">terms</a> and <a href="">privacy policy</a>.
// 																					</p>
// 																				</>
// 																			)}
// 																		</FormValidation>
// 																		<br></br>
// 																	</>
// 																}
// 															</>
// 														</div>
// 													</div>
// 												</Col>
// 											</Row>
// 										</Col>
// 									</Card.Body>
// 								</Card> */}
// 							</Col>
// 						</Row>
// 						<Row style={{ marginTop: '40px' }}></Row>
// 					</Container>
// 				</Layout>
// 			</>
// 		);
// 	}
// }

// export default Contact;
