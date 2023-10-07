import React, { Fragment } from 'react';
import PopConvert from '../components/leadPages/popConvert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Layout from '../components/site/layout';
import { FormValidation } from 'calidation';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import ExitConvert from '../components/leadPages/exitConvert';
import Meta from '../components/site/meta';
import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGE_NUMBER } from '../constants';
import DigitallyEnabled from '../components/leadPages/digitallyEnabled';
import PartnerLogos from '../components/leadPages/partnerLogos';
import FormIframe from '../components/leadPages/formIframe';

class VirtualCFO extends React.Component {

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
				{/* <Meta title="Virtual CFO Services | best virtual cfo services| Starter CFO" description="You run your business. We will do the bookkeeping. India's first Virtual CFO Service for start-ups and SMEs."></Meta> */}


				<Meta 
				title="Expert Virtual CFO & Accounting Services in Delhi - Starters' CFO"
				description="Starters’ CFO the Best CFO firm in delhi that specializes in offering Virtual CFO services specifically tailored to startups and small businesses"
				keywords="virtual cfo, virtual cfo services, vcfo services, virtual cfo pricing, best virtual cfo services, virtual cfo solutions, virtual cfo cost, virtual cfo for startups, virtual cfo packages, virtual cfo small business, virtual cfo services pricing, best virtual cfo,virtual cfo companies, the virtual cfo, accounting services, cost accounting, forensic accounting, corporate accounting, accounting firm,  payroll accounting, accounting and auditing ,accounting consultant, bookkeeping accounting , accounting outsourcing,  accounting consultant"
				robots="index,follow"

				og_url="https://starterscfo.com"
				og_type="website"
				og_title="Expert Virtual CFO & Accounting Services in Delhi - Starters' CFO"
				og_description="Starters’ CFO the Best CFO firm in delhi that specializes in offering Virtual CFO services specifically tailored to startups and small businesses"
				og_image="https://starterscfo.com/static/images/og/img4.avif"
				twitter_title="Expert Virtual CFO & Accounting Services in Delhi - Starters' CFO"
				twitter_card="summary_large_image"
				twitter_description="Starters’ CFO the Best CFO firm in delhi that specializes in offering Virtual CFO services specifically tailored to startups and small businesses."
				twitter_image="https://starterscfo.com/static/images/og/img2.avif"

				></Meta>

				<PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert}></PopConvert>
				<ExitConvert></ExitConvert>

				<Layout promobanner={true}>

					<link rel="stylesheet" href="/static/virtual.css" />
					
					<h1 className="d-none">Virtual CFOs in India</h1>

					<div className="w-100">
						<div className="-white">
							<Container>
								<Row className="hero__text">
									<Col className="text-center">
										<h4 className="title color__dark text-center">Virtual CFOs in India</h4>
										<span className="color__light-grey text-center font--15">Details & pricing below <i className="fa fa-arrow-down mx-auto font__10"></i></span>
										<br></br>
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
													    title="Get free consultation"
													   whatsapp="true" 
													   footerText="true" >
													 </FormIframe>
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

					<Container>
						<Row className="" style={{ paddingTop: '80px', paddingBottom: '50px' }}>
							<Col className="text-center" lg={{ 'span': '8', 'offset': '2' }} md={{ 'span': '6', 'offset': '3' }}>
								<h3><b>What we help you with</b></h3>
								<br></br>
								<p className="color__grey text_cus">
									Imagine all your responsibilities to do with accounting, compliances and payroll management disappeared -- Starters' CFO makes that a reality. Here's everything we will take off your hands.
								</p>
							</Col>
						</Row>
						<Row>
							<Col md={4} style={{ marginTop: '20px' }}>
								<Card>
									<Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
										<Row className="text-center">
											<Col>
												<img src="/static/images/illustrations/compliance.webp" className="features__illustration"></img>
												<br></br><br></br>
												<h4 className="color__dark"><b>Accounting & Taxes</b></h4>
											</Col>
										</Row>
										<Row>
											<Col>
												<p className="color__grey font__15 text-center">
													<br></br>
													Each month, you’ll get a clear, accurate Income Statement and Balance Sheet. We create a functional e mail account for you ( finance@yourcompany.com ) that we use to automatically import your invoices, purchase orders, and communicate with your debtors and vendors.
													<br></br><br></br>
												</p>
												<hr></hr>
												<br></br>
												<h6>Popular Features</h6>
												<ul className="card__list color__dark font__14" style={{ marginTop: '15px' }}>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Tax Ready Income Statement</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Balance Sheet</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Vendor Payment Automation</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Debtors Follow Up & Aging</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;MIS Reporting</li>
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
												<h4 className="color__dark"><b>Statutory Compliance</b></h4>
											</Col>
										</Row>
										<Row>
											<Col>
												<p className="color__grey font__15 text-center">
													<br></br>
													Our team always stays on top of govt. compliances, executing and completing tasks autonomously, always on time and in compliance with updated GST / TDS ammendments. With close to no involvement required from your end, you can focus on your business.
													<br></br><br></br>
												</p>
												<hr></hr>
												<br></br>
												<h6>Popular Features</h6>
												<ul className="card__list color__dark font__14" style={{ marginTop: '15px' }}>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;GST Compliance</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;TDS Compliance</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Secreterial Compliances</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Statutory Audit</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Issue of form 16-A</li>
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
												<h4 className="color__dark"><b>Payroll on Autopilot</b></h4>
											</Col>
										</Row>
										<Row>
											<Col>
												<p className="color__grey font__15 text-center">
													<br></br>
													Starters' CFO allows you to customise your payroll workflow to be as hands-off (or hands-on) as you want—from running completely on auto-pilot, to manually adjusting employee salaries before they are transferred.
													<br></br><br></br>
												</p>
												<hr></hr>
												<br></br>
												<h6>Popular Features</h6>
												<ul className="card__list color__dark font__14" style={{ marginTop: '15px' }}>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Employee Dashboard</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Automated Investment Declaration</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Payslips</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;PF & ESIS Compliances</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Automated NEFT / IMPS to Employees</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Optimised Salary Structure</li>
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
												<h4 className="color__dark"><b>Services on demand</b></h4>
												<p className="color__grey font__15">
													<br></br>
													In a highly dynamic environment, our responsibilities as your CFO do not end at just book keeping & compliances. Our team will assist you with all ad-hoc requirements that your organisation comes up with.
													<br></br>
												</p>
												<hr></hr>
												<h6>Popular Features</h6>
												<ul className="card__list color__dark font__12 horizontal" style={{ marginTop: '15px' }}>
													<li className="first"><i className="fa fa-check"></i>&nbsp;&nbsp;Internal Audit</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Income Tax & GST Assesments</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Budgets & Forecasting</li>
													<li style={{ marginLeft: '0' }}><i className="fa fa-check"></i>&nbsp;&nbsp;Wealth Management</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Competetive Market Analysis</li><br className="d-none d-md-block"></br>
													<li style={{ marginLeft: '0' }}><i className="fa fa-check"></i>&nbsp;&nbsp;Cash Flow Management</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Trademark Registration</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Company Winding up</li>
												</ul>
												<br></br>
												<Button className="btn__secondary on_white d-xs-inline-block d-sm-inline-block d-md-none" onClick={() => { window.location = '/virtual-cfo' }}>Learn More</Button>
											</Col>
										</Row>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>

					<Container>
						<Row className="" style={{ paddingTop: '80px', paddingBottom: '50px' }}>
							<Col className="text-center" lg={{ 'span': '8', 'offset': '2' }} md={{ 'span': '6', 'offset': '3' }}>
								<h3><b>Insights Dashboard</b></h3>
								<br></br>
								<p className="color__grey text_cus">
									Unlike traditional firms, Starters' CFO has prepared SOPs for managing your finances in a way that all key parameters are readily available on dasboard. You can keep an eye on your company's functioning on real time basis.
								</p>
							</Col>
						</Row>
						<Row>
							<Col md={4}>
								<Card>
									<Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
										<Row className="text-center">
											<Col>
												<img src="/static/images/illustrations/business_insights.svg" className="features__illustration"></img>
												<br></br><br></br>
												<h4 className="color__dark"><b>Business Insights</b></h4>
											</Col>
										</Row>
										<Row>
											<Col>
												<p className="color__grey font__15 text-center">
													<br></br>
													We transform unstructured data into actionable information that enables you to make informed strategic decisions.
													<br></br><br></br>
												</p>
												<hr></hr>
												<br></br>
												<ul className="card__list color__dark font__12">
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Compliance Tracker</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;MIS Reports </li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Budgeting and forecasting</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Cash flow statements</li>
												</ul>
												<br></br>
												<Button className="btn__secondary on_white" onClick={this.togglePopConvert}>Learn More</Button>
											</Col>
										</Row>
									</Card.Body>
								</Card>
							</Col>
							<Col md={4} >
								<Card>
									<Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
										<Row className="text-center">
											<Col>
												<img src="/static/images/illustrations/1.svg" className="features__illustration"></img>
												<br></br><br></br>
												<h4 className="color__dark"><b>Automated Payroll</b></h4>
											</Col>
										</Row>
										<Row>
											<Col>
												<p className="color__grey font__15 text-center">
													<br></br>
													Starters' CFO uses smart automation to ensure that you never need to worry about payroll ever again.
													<br></br><br></br>
												</p>
												<hr></hr>
												<br></br>
												<ul className="card__list color__dark font__12">
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Automated Credit of Salaries</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Automated Generation of Payslips</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Optimisation of Salary Structure</li>
												</ul>
												<br></br>
												<Button className="btn__secondary on_white" onClick={this.togglePopConvert}>Learn More</Button>
											</Col>
										</Row>
									</Card.Body>
								</Card>
							</Col>
							<Col md={4} >
								<Card>
									<Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
										<Row className="text-center">
											<Col>
												<img src="/static/images/illustrations/automated_accounting.svg" className="features__illustration"></img>
												<br></br><br></br>
												<h4 className="color__dark"><b>Experienced Accountants</b></h4>
											</Col>
										</Row>
										<Row>
											<Col>
												<p className="color__grey font__15 text-center">
													<br></br>
													Starters' CFO will dedicate personnel to your business to give you your own accounting team.
													<br></br><br></br>
												</p>
												<hr></hr>
												<br></br>
												<ul className="card__list color__dark font__12">
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Feels like an in house accounting team</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Hosted email for all client communication</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Marker Checker for all payment initiations</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Whatsapp group with dedicated accountants</li>
													<li><i className="fa fa-check"></i>&nbsp;&nbsp;Finance team on auto pilot</li>
												</ul>
												<br></br>
												<Button className="btn__secondary on_white" onClick={this.togglePopConvert}>Learn More</Button>
											</Col>
										</Row>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>


					<div className="w-100" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#f4f8fb', marginTop: '50px' }}>
						<Container>
							<Row>
								<Col md={6} sm={12} xs={12}>
									<h3 className="color__dark"><b>Tasks performed monthly</b></h3>
									<p className="color__grey font__15">
										<br></br>
										Maintaining and managing compliances for an organization can get very complex as various filings have to be completed at different due dates. Failure or delay in maintaining compliance leads to penalty in lakhs. Our team acts autonomously and keeps your company in the green, without hassle or effort.
										<br></br>
										<br></br>
										<span className="color__grey include">Here’s what’s included.</span>
									</p>
									<ul className="card__list color__dark font__16" style={{ marginTop: '15px' }}>
										<li></li>
										<li><i className="fa fa-check"></i>&nbsp;&nbsp;TDS Payments</li>
										<li><i className="fa fa-check"></i>&nbsp;&nbsp;GST Payments & Returns</li>
										<li><i className="fa fa-check"></i>&nbsp;&nbsp;MIS</li>
										<li><i className="fa fa-check"></i>&nbsp;&nbsp;Vendor Payments - Rent, Utility, Suppliers, etc.</li>
										<li><i className="fa fa-check"></i>&nbsp;&nbsp;Payroll</li>
										<li><i className="fa fa-check"></i>&nbsp;&nbsp;Debtors Follow up</li>
										<li><i className="fa fa-check"></i>&nbsp;&nbsp;Cash Flow Management</li>
										<li><i className="fa fa-check"></i>&nbsp;&nbsp;Bank Account Reconcilation</li>
									</ul>
								</Col>
								<Col md={6} sm={12} xs={12}>
									<h3 className="color__dark text_cus"><b>Tasks performed yearly</b></h3>
									<p className="color__grey font__15 text_cus">
										<br></br>
										Building on our philosophies of automating and simplifying your finance operations, we similarly take responsibilities of yearly compliances.
										<br></br>
										<br></br>
										<span className="color__grey include">Here’s what’s included.</span>
									</p>
									<ul className="card__list color__dark font__16" style={{ marginTop: '15px' }}>
										<li><i className="fa fa-check"></i>&nbsp;&nbsp;Finalisation of Balance Sheet & PnL Account</li>
										<li><i className="fa fa-check"></i>&nbsp;&nbsp;Issue of Form 16 / 16A</li>
										<li><i className="fa fa-check"></i>&nbsp;&nbsp;Income Tax Assesments</li>
										<li><i className="fa fa-check"></i>&nbsp;&nbsp;Statutory Audit / Tax Audit</li>
										<li><i className="fa fa-check"></i>&nbsp;&nbsp;Income Tax Returns</li>
										<li><i className="fa fa-check"></i>&nbsp;&nbsp;Secreterial Compliances</li>
									</ul>
									<br></br>
									<Button className="btn__transparent border-color__dark color__dark d-none d-md-flex" size="xl" onClick={this.togglePopConvert}>Start working with us</Button>
								</Col>
							</Row>
						</Container>
					</div>

					<Container>
						<Row className="mt-sm-5 mt-xs-5 mb-5">
							<Col>
								<div className="div_steps background-color__blue-gradient" onClick={this.togglePopConvert}>
									<a href="#" className="step_anchor">
										<h2>
											Start your trial now
										</h2>
										<p>30% discount for start ups registered in the last financial year.</p>
										<div className="right_icon">
											<span><i className="fa fa-angle-double-right"></i></span>
										</div>
									</a>
								</div>
							</Col>
						</Row>
					</Container>

					<Row style={{ height: '100%', marginTop: '20px', paddingBottom: '50px' }}>

						<Col md={{ 'span': '12' }} className="text_cus">
							<Container>
								<h4 className="color__dark">Top Rated Accounting Services in Delhi, India</h4>
								<br></br>
								<p className="color__grey">
									Our product provides high skill assistance in financial requirements of an organization, just like a chief financial officer does for large organizations.
									<br></br><br></br>
									On a basic level, we act as the bookkeeper of our clients and take responsibility for the accuracy of the account books and interpret the financial information from the accounting data as required. We take responsibility for executing or overseeing the reporting process. On the more strategic side, we act as the financial and strategic sparring partner for the business owner.
									<br></br><br></br>
									Starters' CFO is not just any services firm. We partner with Zoho, Quickbooks & Tally to build our automation pipelines and business intelligence tools, and give you the best of human & artificial intelligence in a single, afforable package.
									<br></br><br></br>
									We’ll help manage cash flow, keep investors happy, and create strong efficiencies in the operations and business processes. Your focus on your startup growth where the finance, funding and accounting will be handled by Starters’s CFO.
								</p>
							</Container>
						</Col>

					</Row>


					{/* Footer Text */}
					<div className="w-100 background-color__footer_text">
					<Container>
					<Row className="background-color__footer_text footer" style={{ paddingTop: '60px', paddingBottom: '10px' }}>
							<Col>
							<h5 class="font__14 weight__600 mt-2 mb-2">Most Searched for Starters’ CFO </h5>
							<p className='font__12'>Business Insights | Automated Payroll | Experienced Accountants| Statutory Compliance | Accounting services | CFO | virtual cfo services| best virtual cfo services| virtual cfo packages| virtual cfo business| accounting services| cost accounting| forensic accounting| corporate accounting| accounting firm| payroll accounting|cloud accounting| accounting standard| small business accountant| accounting and auditing |accounting consultant| bookkeeping accounting | accounting outsourcing| accounting consultant</p>

							<h5 class="font__14 weight__600 mt-2 mb-2">Business Insights</h5>
							<p className='font__12'>Business insights refer to valuable and actionable information derived from data analysis and Starters’ CFO  can help you to take  business decisions with that data. So that  business leaders and decision-makers better understand their organization's performance, customers, operations, and market dynamics.</p>

							<h5 className='font__14 weight__600 mt-2 mb-2'>Automated Payroll</h5>
							<p className='font__12'>Manual payroll tasks can be time-consuming and prone to errors. With Starters' CFO automation services, you can significantly reduce the time spent on payroll processing, allowing your HR and finance teams to focus on more strategic initiatives.We proudly offers advanced automation services to streamline your payroll processes.</p>

							<h5 className='font__14 weight__600 mt-2 mb-2'>Experienced Accountants</h5>        
							<p className='font__12'>At Starters' CFO, we understand that the backbone of any successful business lies in its financial health. With our team of experienced accountants, we offer a wide range of top-notch accounting services tailored to meet the unique needs of your organization. Our expertise goes beyond number-crunching; we are your strategic partner in achieving financial excellence.</p>

							<h5 className='font__14 weight__600 mt-2 mb-2'>Proprietorship Tax Return Filing</h5>
							<p className='font__12'>Fulfilling your tax obligations is an essential aspect of running a successful business. As Starters' CFO, navigating the intricacies of tax return filing is crucial to maintaining financial transparency and compliance. </p>

							<h5 className='font__14 weight__600 mt-2 mb-2'>Accounting services</h5>
							<p className='font__12'>Accounting services refer to the professional services provided by accounting firms or individual accountants to help businesses and individuals manage their financial records, transactions, and reporting.</p>

							<h5 className='font__14 weight__600 mt-2 mb-2'>CFO</h5>
							<p className='font__12'>At Starters' CFO, we understand that financial success is the cornerstone of any thriving business. Our team of seasoned financial experts is dedicated to helping startups and small businesses navigate the complex world of finance. With our tailored CFO services, you can expect strategic financial planning, analysis, and guidance that will empower your business to grow and flourish.</p>
							</Col>
					</Row>
					</Container>
					</div>

				</Layout>
			</>
		);
	}
}

export default VirtualCFO;
