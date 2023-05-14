import React from "react";
export default class ESOP extends React.Component {
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
// import Layout from 'scfonext/pages/components/site/layout';
// import PopConvert from 'scfonext/pages/components/leadPages/popConvert';
// import LineConvert from 'scfonext/pages/components/leadPages/lineConvert';
// import ExitConvert from 'scfonext/pages/components/leadPages/exitConvert';
// import Card from "scfonext/pages/components/site/card";
// import HeaderConvert from 'scfonext/pages/components/leadPages/headerConvert';
// import Meta from 'scfonext/pages/components/site/meta';
// import { WHATSAPP_DISPLAY_NUMBER } from '../constants';


// class ESOP extends React.Component {

//     state = {
//         'showPopConvert': false,
//         'buttonText': 'Submit',
//         'convertSuccess': ''
//     };

//     componentDidMount = () => {
//         window.product = "esop"
//     }

//     render() {
//         return (
//             <></>
//         )

//         // return (

//         //     <>
//         //         <Meta title="Draft ESOP policies for your employees" description="Keep your business smart with Starters' CFO. Draft, Issue and Implement ESOP for your employees with us."></Meta>

//         //         <Layout promobanner={true}>

//         //             <ExitConvert></ExitConvert>


//         //             <div className="w-100">
//         //                 <div className="-white">
//         //                     <HeaderConvert title="ESOP, Demystified." />
//         //                 </div>
//         //             </div>

//         //             <div className="w-100">
//         //                 <Container>

//         //                     {/* desktop pricing */}
//         //                     <Row className="mt-sm-5 d-none d-md-flex d-lg-flex d-xl-flex">
//         //                         <Col>
//         //                             <Card className="-no-shadow" onClick={this.togglePopConvert}>
//         //                                 <Card.Body className="background-color__white">
//         //                                     <h3>₹ 6499/-</h3>
//         //                                     <h5 className="font__20">For Individuals</h5>
//         //                                     <p>lorem ipsum doler is imet.</p>
//         //                                 </Card.Body>
//         //                             </Card>
//         //                         </Col>
//         //                         <Col>
//         //                             <Card className="-no-shadow" onClick={this.togglePopConvert}>
//         //                                 <Card.Body>
//         //                                     <h3>₹ 6499/-</h3>
//         //                                     <h5 className="font__20">For Start Up India 🇮🇳 Companies</h5>
//         //                                     <p>lorem ipsum doler is imet.</p>
//         //                                 </Card.Body>
//         //                             </Card>
//         //                         </Col>
//         //                         <Col>
//         //                             <Card className="-no-shadow" onClick={this.togglePopConvert}>
//         //                                 <Card.Body>
//         //                                     <h3>₹ 10,999/-</h3>
//         //                                     <h5>For Companies</h5>
//         //                                     <p>lorem ipsum doler is imet.</p>
//         //                                 </Card.Body>
//         //                             </Card>
//         //                         </Col>
//         //                     </Row>

//         //                     {/* mobile pricing */}
//         //                     <Row className="d-xs-flex d-sm-flex d-md-none" style={{ marginTop: '100px' }}>
//         //                         <Col sm={12}>
//         //                             <Card className="-no-shadow mb-2" onClick={this.togglePopConvert}>
//         //                                 <Card.Body className="background-color__white">
//         //                                     <h3>₹ 6499/-</h3>
//         //                                     <h5 className="font__20">For Individuals</h5>
//         //                                     <p>lorem ipsum doler is imet.</p>
//         //                                 </Card.Body>
//         //                             </Card>
//         //                         </Col>
//         //                         <Col sm={12}>
//         //                             <Card className="-no-shadow mb-2" onClick={this.togglePopConvert}>
//         //                                 <Card.Body>
//         //                                     <h3>₹ 6499/-</h3>
//         //                                     <h5 className="font__20">For Start Up India 🇮🇳 Companies</h5>
//         //                                     <p>lorem ipsum doler is imet.</p>
//         //                                 </Card.Body>
//         //                             </Card>
//         //                         </Col>
//         //                         <Col sm={12}>
//         //                             <Card className="-no-shadow" onClick={this.togglePopConvert}>
//         //                                 <Card.Body>
//         //                                     <h3>₹ 10,999/-</h3>
//         //                                     <h5>For Companies</h5>
//         //                                     <p>lorem ipsum doler is imet.</p>
//         //                                 </Card.Body>
//         //                             </Card>
//         //                         </Col>
//         //                     </Row>

//         //                     <Row style={{ marginTop: '20px' }}></Row>

//         //                     <hr></hr>

//         //                     <Row className="hero__text">
//         //                         <Col>
//         //                             <h4 className="color__dark text-center font__40">Questions? We gotcha.</h4>
//         //                             <br></br>
//         //                         </Col>
//         //                     </Row>

//         //                     <Row style={{ marginTop: '30px' }}></Row>

//         //                     <Row>
//         //                         <Col sm={12} md={6}>
//         //                             <h3>1. What is an ESOP?</h3>
//         //                             <p className="color__grey">
//         //                                 Employee Stock Option Plan or Employee Stock Ownership Plan, abbreviated as ESOP, under the Indian system, enables employees of a company to purchase a certain number of shares of that company. It is an efficient tool that improves remuneration mechanism and employee retention.
//         //                             </p>
//         //                         </Col>
//         //                         <Col sm={12} md={6}>
//         //                             <h3>2. How ESOP work?</h3>
//         //                             <p className="color__grey">
//         //                                 An organization grants ESOP to its employees for buying a specified number of shares of the company at a defined price after the option period. He needs to go through the pre-defined vesting period which implies that the employee has to work for the organization.
//         //                             </p>
//         //                         </Col>
//         //                     </Row>
//         //                     <Row className="mt-md-4">
//         //                         <Col sm={12} md={6}>
//         //                             <h3>3. What is tax Implication of ESOP?</h3>
//         //                             <p className="color__grey">
//         //                                 Employee stock ownership plans is considered as perquisites with respect to taxation. The capital gains would be taxed depending on the period of holding. This period is calculated from the date of exercise up to the date of sale.
//         //                             </p>
//         //                         </Col>
//         //                         <Col sm={12} md={6}>
//         //                             <h3>4. What is ESOP from an employee’s perspective?</h3>
//         //                             <p className="color__grey">
//         //                                 With ESOP, an employee gets the benefit of acquiring the shares of the company at the nominal rate, and sell them and make a profit. There are several success stories of an employee raking in the riches together with founders of the companies
//         //                             </p>
//         //                         </Col>
//         //                     </Row>

//         //                     <Row style={{ marginTop: '20px' }}></Row>

//         //                 </Container>
//         //             </div>

//         //             <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
//         //                 <Col>
//         //                     <Container>
//         //                         <LineConvert product={'trademark'}></LineConvert>
//         //                     </Container>
//         //                 </Col>
//         //             </Row>

//         //             <Container>

//         //                 <Row className="hero__text">
//         //                     <Col>
//         //                         <h4 className="color__dark text-center font__40">Even more questions!?</h4>
//         //                         <br></br>
//         //                     </Col>
//         //                 </Row>

//         //                 <Row>
//         //                     <Col className="justify-content-center align-items-center flex-column d-none d-md-flex d-lg-flex d-xl-flex" md={5}>
//         //                         <img src="/static/svg/reading.svg" style={{ width: '67%!important' }}></img>
//         //                         <br></br>
//         //                         <br></br>
//         //                         <h5 className="color__dark">Still curious? </h5>
//         //                         <p className="color__grey">
//         //                             Call our team for immediate resolution to your questions, or fill out our interest form, and we will get in touch in 24 hours.<br></br> <br></br>Dial +91 9911 464 354.
//         //                         </p>
//         //                     </Col>
//         //                     <Col md={7}>
//         //                         <Accordion defaultActiveKey="0">
//         //                             <Card className="-no-shadow -no-hover border-radius__0">
//         //                                 <Accordion.Toggle as={Card.Header} eventKey="0" className="color__dark">
//         //                                     What can be Perquisite tax?
//         //                                 </Accordion.Toggle>
//         //                                 <Accordion.Collapse eventKey="0">
//         //                                     <Card.Body className="color__grey">
//         //                                         When an employee decided to buy a certain number of shares of his/her company, the difference between Fair Market Value and Exercise Price is taxed as Perquisite. TDS is deducted by the employer on this perquisite value, gets reflected in the employee’s Form 16 and is considered as a part of the total income from salary in the tax return.
//         //                                     </Card.Body>
//         //                                 </Accordion.Collapse>
//         //                             </Card>
//         //                             <Card className="-no-shadow -no-hover border-radius__0">
//         //                                 <Accordion.Toggle as={Card.Header} eventKey="1" className="color__dark">
//         //                                     What is taxed as Capital Gains?
//         //                                 </Accordion.Toggle>
//         //                                 <Accordion.Collapse eventKey="1">
//         //                                     <Card.Body className="color__grey">
//         //                                         If and when an employee decides to sell the shares of his/her company, the difference between Sale Price and Fair Market Value on the exercise date is taxed as Capital Gains, as per the tax bracket that he/she belongs to.
//         //                                     </Card.Body>
//         //                                 </Accordion.Collapse>
//         //                             </Card>
//         //                             <Card className="-no-shadow -no-hover border-radius__0">
//         //                                 <Accordion.Toggle as={Card.Header} eventKey="2" className="color__dark">
//         //                                     What Will be my Advance Taxes on Capital Gains?
//         //                                 </Accordion.Toggle>
//         //                                 <Accordion.Collapse eventKey="2">
//         //                                     <Card.Body className="color__grey">
//         //                                         Advance Taxes on capital gains demand that an employee pays his/her tax dues for the annual year in advance through instalments. An employee may have to deposit advance tax on earning capital gains, despite the employer being eligible for deducting TDS after the employee exercising his/her options.
//         //                                     </Card.Body>
//         //                                 </Accordion.Collapse>
//         //                             </Card>
//         //                             <Card className="-no-shadow -no-hover border-radius__0">
//         //                                 <Accordion.Toggle as={Card.Header} eventKey="3" className="color__dark">
//         //                                     What is Exercise Period?
//         //                                 </Accordion.Toggle>
//         //                                 <Accordion.Collapse eventKey="3">
//         //                                     <Card.Body className="color__grey">
//         //                                         The time period after vesting within which the employee should exercise his right to apply for shares against the option vested in him in pursuance of the ESOS. (7) "exercise price" means the price payable by the employee for exercising the option granted to him in pursuance of ESOS.
//         //                                     </Card.Body>
//         //                                 </Accordion.Collapse>
//         //                             </Card>
//         //                             <Card className="-no-shadow -no-hover border-radius__0">
//         //                                 <Accordion.Toggle as={Card.Header} eventKey="4" className="color__dark">
//         //                                     What are the benefits of ESOP for the employers?
//         //                                 </Accordion.Toggle>
//         //                                 <Accordion.Collapse eventKey="4">
//         //                                     <Card.Body className="color__grey">
//         //                                         As the employees would benefit when the company’s share prices soar, it would be an incentive for the employee put in his 100 percent. Although motivation, employee retention and awarding hard work are the key benefits which ESOP brings to the employers, there are several other noteworthy advantages too.
//         //                                     </Card.Body>
//         //                                 </Accordion.Collapse>
//         //                             </Card>
//         //                             <Card className="-no-shadow -no-hover border-radius__0">
//         //                                 <Accordion.Toggle as={Card.Header} eventKey="5" className="color__dark">
//         //                                     Can be borrowed money at a profitable after-tax price?
//         //                                 </Accordion.Toggle>
//         //                                 <Accordion.Collapse eventKey="5">
//         //                                     <Card.Body className="color__grey">
//         //                                         Cash borrowed under ESOP can be invested in buying company shares and shares of outgoing owners of the company. Both principal and interest paid for ESOP are tax deductible because they help in repaying the loan amount.
//         //                                     </Card.Body>
//         //                                 </Accordion.Collapse>
//         //                             </Card>
//         //                             <Card className="-no-shadow -no-hover border-radius__0">
//         //                                 <Accordion.Toggle as={Card.Header} eventKey="6" className="color__dark">
//         //                                     In what ways ESOP helps?
//         //                                 </Accordion.Toggle>
//         //                                 <Accordion.Collapse eventKey="6">
//         //                                     <Card.Body className="color__grey">
//         //                                         ESOP helps improving overall efficiency and productivity of people in the firm as they are now related to company in 2 ways that is as an employee and also as shareholder and therefore good performance of a company would be in their interest.
//         //                                     </Card.Body>
//         //                                 </Accordion.Collapse>
//         //                             </Card>
//         //                             <Card className="-no-shadow -no-hover border-radius__0">
//         //                                 <Accordion.Toggle as={Card.Header} eventKey="7" className="color__dark">
//         //                                     How an Employee Stock Ownership Plan (ESOP) Works?
//         //                                 </Accordion.Toggle>
//         //                                 <Accordion.Collapse eventKey="7">
//         //                                     <Card.Body className="color__grey">
//         //                                         ESOP Provide a Variety of Significant Tax Benefits for Companies and Their Owners. ESOP Rules Are Designed to Assure the Plans Benefit Employees Fairly and Broadly
//         //                                     </Card.Body>
//         //                                 </Accordion.Collapse>
//         //                             </Card>
//         //                         </Accordion>
//         //                     </Col>
//         //                     <Col className="justify-content-center align-items-center flex-row d-xs-flex d-sm-flex d-md-none mt-5 text-center">
//         //                         <img src="/static/svg/reading.svg" style={{ width: '67%!important' }}></img>
//         //                         <br></br>
//         //                         <br></br>
//         //                         <h5 className="color__dark">Still curious? </h5>
//         //                         <p className="color__grey">
//         //                             Call our team for immediate resolution to your questions, or fill out our interest form, and we will get in touch in 24 hours.<br></br> <br></br>Dial +91 9911 464 354.
//         //                         </p>
//         //                     </Col>
//         //                 </Row>

//         //                 <Row style={{ marginTop: '20px' }}></Row>

//         //             </Container>

//         //             <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
//         //                 <Col>
//         //                     <Container>
//         //                         <LineConvert product={'trademark'}></LineConvert>
//         //                     </Container>
//         //                 </Col>
//         //             </Row>
//         //         </Layout>
//         //     </>
//         // );
//     }
// }

// export default ESOP;
