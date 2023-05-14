
import React from "react";
export default class Compliances extends React.Component {
    render() {
        return (
            <>404</>
        )
    }
}
// import React from 'react';

// // import Container from "scfonext/pages/components/site/container";
// // import Row from "scfonext/pages/components/site/row";
// // import Col from "scfonext/pages/components/site/col";
// // import Layout from 'scfonext/pages/components/site/layout';
// // import PopConvert from 'scfonext/pages/components/leadPages/popConvert';
// // import LineConvert from 'scfonext/pages/components/leadPages/lineConvert';
// // import ExitConvert from 'scfonext/pages/components/leadPages/exitConvert';
// // import Table from 'react-bootstrap/Table';
// // import HeaderConvert from 'scfonext/pages/components/leadPages/headerConvert';
// // import Meta from 'scfonext/pages/components/site/meta';
// // import Button from "scfonext/pages/components/site/button";


// class Compliances extends React.Component {


//     state = {
//         'buttonText': 'Submit',
//         'convertSuccess': ''
//     }

//     componentDidMount = () => {
//         window.product = "compliances"
//     }

//     // render() {

//     //     return (

//     //         <>
//     //             <Meta title="Compliances with Starters' CFO" description="Stay Compliant with Starters' CFO. GST Returns, ESI, PF, TDS and more."></Meta>

//     //             <Layout promobanner={true}>
//     //                 <ExitConvert></ExitConvert>

//     //                 <div className="w-100">
//     //                     <div className="-white">
//     //                         <HeaderConvert title="Stay Compliant with Starters' CFO" />
//     //                     </div>
//     //                 </div>

//     //                 <div className="w-100">
//     //                     <Container>

//     //                         <Row style={{ marginTop: '20px' }}></Row>

//     //                         <hr></hr>

//     //                         <Row className="hero__text">
//     //                             <Col>
//     //                                 <h4 className="color__dark text-center font__40">Compliances on auto pilot 🤸🏻‍♂️</h4>
//     //                                 <br></br>
//     //                             </Col>
//     //                         </Row>

//     //                         <Row style={{ marginTop: '10px' }}>
//     //                             <Col md={{ 'span': '8', 'offset': '2' }}>
//     //                                 <p className="font__20 text-center color__dark">
//     //                                     Running a business is taxing as it is. <br></br>
//     //                                     Keeping in line with the government's list of compliances can get messy and complicated quick.

//     //                                     <br></br><br></br>

//     //                                     We put your compliances on auto pilot so that you never have to worry about it again.

//     //                                     <br></br>
//     //                                 </p>
//     //                             </Col>
//     //                         </Row>
//     //                     </Container>
//     //                     <div className="w-100" style={{ backgroundColor: '#f4f8fb' }}>
//     //                         <Container>
//     //                             <Row style={{ height: '350px', marginTop: '40px', paddingTop: '50px' }}>

//     //                                 <Col className="text-center" md={{ 'span': '8', 'offset': '2' }}>
//     //                                     <h3 className="color__blue"><b>Digitally Enabled, Online Processes</b></h3>
//     //                                     <br></br>
//     //                                     <p className="color__grey">
//     //                                         Starters' CFO differs from the competition in the simple online processes it has built to help you achieve your businsess accounting needs.<br></br><br></br>
//     //                                         You can stop struggling through lists of email attachments sent back and forth for ever! Our digital partners include Zoho Books, Tally, Quickbooks & Razorpay amongst others.
//     //                                     </p>
//     //                                     <br></br>
//     //                                     <Button className="btn__transparent border-color__dark color__dark btn__secondary" size="lg" onClick={() => { window.location = '/virtual-cfo' }}>Learn more about our Software</Button>
//     //                                 </Col>

//     //                             </Row>
//     //                         </Container>
//     //                     </div>
//     //                     <Container>

//     //                         <Row style={{ marginTop: '50px' }}></Row>

//     //                         <Row className="text-center">
//     //                             <Col>
//     //                                 <h4 className="color__dark"><b>GST Compliance</b></h4>
//     //                                 <p className="color__grey font__15 text-center">
//     //                                     <br></br>
//     //                                     If you collect GST from your customers, you need to file GST compliances. This needs to be filed even for periods with zero sales.
//     //                                     <br></br>
//     //                                 </p>
//     //                             </Col>
//     //                             <Col>
//     //                                 <h4 className="color__dark"><b>Income Tax Compliance</b></h4>
//     //                                 <p className="color__grey font__15 text-center">
//     //                                     <br></br>
//     //                                     Income Tax has to be filed by every individual and business on the total income generated.
//     //                                     <br></br>
//     //                                 </p>
//     //                             </Col>
//     //                             <Col>
//     //                                 <h4 className="color__dark"><b>PF Compliance</b></h4>
//     //                                 <p className="color__grey font__15 text-center">
//     //                                     <br></br>
//     //                                     If your organisation deducts PF from the pay of their employees, PF compliance is mandatory.
//     //                                     <br></br>
//     //                                 </p>
//     //                             </Col>
//     //                         </Row>


//     //                         <Row style={{ marginTop: '20px' }}></Row>

//     //                         <Row className="text-center">
//     //                             <Col>
//     //                                 <h4 className="color__dark"><b>ESI Compliance</b></h4>
//     //                                 <p className="color__grey font__15 text-center">
//     //                                     <br></br>
//     //                                     ESI compliance is mandatory under the ESI scheme. All employees of a covered establishment, with salary lower than 21,000 are eligible for ESI.
//     //                                     <br></br>
//     //                                 </p>
//     //                             </Col>
//     //                             <Col>
//     //                                 <h4 className="color__dark"><b>TDS Compliance</b></h4>
//     //                                 <p className="color__grey font__15 text-center">
//     //                                     <br></br>
//     //                                     Tax Deducted at Source (TDS) is one of the modes of collecting income tax in India at the very source of income. TDS compliance is mandatory.
//     //                                     <br></br>
//     //                                 </p>
//     //                             </Col>
//     //                             <Col>
//     //                                 <h4 className="color__dark"><b>ROC Compliance</b></h4>
//     //                                 <p className="color__grey font__15 text-center">
//     //                                     <br></br>
//     //                                     ROC compliance is mandatory for all organisations incorporated under the companies act.
//     //                                     <br></br>
//     //                                 </p>
//     //                             </Col>
//     //                         </Row>


//     //                         <Row style={{ marginTop: '50px' }}></Row>


//     //                     </Container>
//     //                 </div>

//     //                 <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
//     //                     <Col>
//     //                         <Container>
//     //                             <LineConvert product={'compliance'}></LineConvert>
//     //                         </Container>
//     //                     </Col>
//     //                 </Row>


//     //                 <Container>
//     //                     <Row style={{ marginTop: '50px' }}></Row>
//     //                     <Row>
//     //                         <Col>
//     //                             <Row style={{ marginBottom: '20px' }}>
//     //                                 <Col>
//     //                                     <h4 className="color__dark text-center">GST Compliance</h4>
//     //                                 </Col>
//     //                             </Row>
//     //                             <Row>
//     //                                 <Col>
//     //                                     <Table bordered hover className="w-100">
//     //                                         <thead>
//     //                                             <tr>
//     //                                                 <td>GST Compliance</td>
//     //                                             </tr>
//     //                                         </thead>
//     //                                         <tbody className="font__15">
//     //                                             <tr>
//     //                                                 <td>GSTR-3B, 5, 5A</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>GSTR 7,8</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>GSTR 9,9A</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>GSTR 6</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>CMP 08</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>RFD 10</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>GSTR 1</td>
//     //                                             </tr>
//     //                                         </tbody>
//     //                                     </Table>
//     //                                 </Col>
//     //                             </Row>
//     //                             <Row style={{ marginBottom: '20px', marginTop: '20px' }}>
//     //                                 <Col>
//     //                                     <h4 className="color__dark text-center">PF Compliance</h4>
//     //                                 </Col>
//     //                             </Row>
//     //                             <Row>
//     //                                 <Col>
//     //                                     <Table bordered hover className="w-100">
//     //                                         <thead>
//     //                                             <tr>
//     //                                                 <td>PF Compliance</td>
//     //                                             </tr>
//     //                                         </thead>
//     //                                         <tbody className="font__15">
//     //                                             <tr>
//     //                                                 <td>PF Payment</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>ECR Filing</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>PF Annual Return</td>
//     //                                             </tr>
//     //                                         </tbody>
//     //                                     </Table>
//     //                                 </Col>
//     //                             </Row>
//     //                         </Col>
//     //                         <Col>
//     //                             <Row style={{ marginBottom: '20px' }}>
//     //                                 <Col>
//     //                                     <h4 className="color__dark text-center">Income Tax</h4>
//     //                                 </Col>
//     //                             </Row>
//     //                             <Row>
//     //                                 <Col>
//     //                                     <Table bordered hover className="w-100">
//     //                                         <thead>
//     //                                             <tr>
//     //                                                 <td>Income Tax</td>
//     //                                             </tr>
//     //                                         </thead>
//     //                                         <tbody className="font__15">
//     //                                             <tr>
//     //                                                 <td>15% Advance Income Tax</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>45% Advance Income Tax</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>75% Advance Income Tax</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>100% Advance Income Tax</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>Businesses under Presumptive Taxation Scheme</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>Tax Filing for Individual</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>Tax Filing for Body of Individuals</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>Tax Filing for Hindu Undivided Family</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>Tax Filing for Association of Persons</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>Businesses requiring audit</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>Businesses requiring TP Report</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>GSTR 1</td>
//     //                                             </tr>
//     //                                         </tbody>
//     //                                     </Table>
//     //                                 </Col>
//     //                             </Row>
//     //                         </Col>
//     //                     </Row>

//     //                     <Row style={{ marginTop: '50px' }}></Row>

//     //                     <Row style={{ marginTop: '50px' }}></Row>
//     //                     <Row style={{ marginBottom: '20px' }}>
//     //                         <Col>
//     //                             <Row style={{ marginBottom: '20px' }}>
//     //                                 <Col>
//     //                                     <h4 className="color__dark text-center">ESI Compliance</h4>
//     //                                 </Col>
//     //                             </Row>
//     //                             <Row>
//     //                                 <Col>
//     //                                     <Table bordered hover className="w-100">
//     //                                         <thead>
//     //                                             <tr>
//     //                                                 <td>ESI Compliance</td>
//     //                                             </tr>
//     //                                         </thead>
//     //                                         <tbody className="font__15">
//     //                                             <tr>
//     //                                                 <td>ESI Payment</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>ESI Return Filing</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>PF Annual Return</td>
//     //                                             </tr>
//     //                                         </tbody>
//     //                                     </Table>
//     //                                 </Col>
//     //                             </Row>
//     //                         </Col>
//     //                         <Col>
//     //                             <Row style={{ marginBottom: '20px' }}>
//     //                                 <Col>
//     //                                     <h4 className="color__dark text-center">TDS Compliance</h4>
//     //                                 </Col>
//     //                             </Row>
//     //                             <Row>
//     //                                 <Col>
//     //                                     <Table bordered hover className="w-100">
//     //                                         <thead>
//     //                                             <tr>
//     //                                                 <td>TDS Compliance</td>
//     //                                             </tr>
//     //                                         </thead>
//     //                                         <tbody className="font__15">
//     //                                             <tr>
//     //                                                 <td>TDS Payment</td>
//     //                                             </tr>
//     //                                             <tr>
//     //                                                 <td>TDS Return</td>
//     //                                             </tr>
//     //                                         </tbody>
//     //                                     </Table>
//     //                                 </Col>
//     //                             </Row>
//     //                         </Col>
//     //                     </Row>
//     //                     <Row style={{ marginTop: '50px' }}></Row>

//     //                     <Row style={{ marginBottom: '20px' }}>
//     //                         <Col>
//     //                             <h4 className="color__dark text-center">ROC Compliance</h4>
//     //                         </Col>
//     //                     </Row>
//     //                     <Row>
//     //                         <Col>
//     //                             <Table bordered hover className="w-100">
//     //                                 <thead>
//     //                                     <tr>
//     //                                         <td>ROC Compliance</td>
//     //                                         <td>Due Date</td>
//     //                                     </tr>
//     //                                 </thead>
//     //                                 <tbody className="font__15">
//     //                                     <tr>
//     //                                         <td>Form ADT-1</td>
//     //                                         <td>15 days from the conclusion of AGM</td>
//     //                                     </tr>
//     //                                     <tr>
//     //                                         <td>Form AOC-4 and Form AOC-4 CFS</td>
//     //                                         <td>30 days from the conclusion of the AGM (In case of OPC within 180 days from the close of the financial year)</td>
//     //                                     </tr>
//     //                                     <tr>
//     //                                         <td>Form MGT-7</td>
//     //                                         <td>60 days from the conclusion of AGM</td>
//     //                                     </tr>
//     //                                     <tr>
//     //                                         <td>Form CRA-4</td>
//     //                                         <td>30 days from the receipt of Cost Audit</td>
//     //                                     </tr>
//     //                                     <tr>
//     //                                         <td>Form MGT-14</td>
//     //                                         <td>30 days from the date of Board Meeting</td>
//     //                                     </tr>
//     //                                     <tr>
//     //                                         <td>Form MSME</td>
//     //                                         <td>Within a month for each half of the year</td>
//     //                                     </tr>
//     //                                 </tbody>
//     //                             </Table>
//     //                         </Col>
//     //                     </Row>
//     //                     <Row style={{ marginTop: '50px' }}></Row>
//     //                 </Container>

//     //                 <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
//     //                     <Col>
//     //                         <Container>
//     //                             <LineConvert product={'compliance'}></LineConvert>
//     //                         </Container>
//     //                     </Col>
//     //                 </Row>
//     //             </Layout>
//     //         </>
//     //     );
//     // }
// }

// export default Compliances;
