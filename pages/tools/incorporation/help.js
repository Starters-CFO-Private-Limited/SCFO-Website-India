import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../../../components/site/layout';
import PopConvert from '../../../components/leadPages/popConvert';
import LineConvert from '../../../components/leadPages/lineConvert';
import ExitConvert from '../../../components/leadPages/exitConvert';
import Table from 'react-bootstrap/Table';
import CompanyQuiz from '../../../components/company-quiz';
import Meta from '../../../components/site/meta';
import Card from 'react-bootstrap/Card';

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
                        "product": "gst"
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
                <Meta title="Starters' CFO | Company Incorporation Tools" description="Pros and Cons of different company structures - India - Free Tool"></Meta>

                <Layout promobanner={true}>

                    <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert} product={'ci'} mobile={this.state.mobile}></PopConvert>
                    <ExitConvert></ExitConvert>

                    <div className="d-none d-md-block d-lg-block d-xl-block w-100">
                        <div className="hero--wrapper -white" style={{ 'height': '800px' }}>
                            <div className="hero__background">
                                <div className="-white">
                                    <Container>
                                        <Row className="hero__text">
                                            <Col>
                                                <h4 className="title color__dark text-center">Compare company structures</h4>
                                                <br></br>
                                                <p className="font__20 text-center color__dark">
                                                    Compare different company structures in detail, browse pros and cons of each.
                                                    <br></br>
                                                    Use our free tool to get recommendations.
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row style={{ 'marginBottom': '20px' }}>
                                            <Col md={4} style={{ marginTop: '20px' }}>
                                                <Card onClick={() => { window.location = '#quiz' }}>
                                                    <Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
                                                        <Row className="text-center">
                                                            <Col>
                                                                <img src="/static/images/illustrations/1.svg" height="100px"></img>
                                                                <br></br><br></br>
                                                                <h4 className="color__dark"><b>Take questionnaire</b></h4>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4} style={{ marginTop: '20px' }}>
                                                <Card onClick={() => { this.togglePopConvert() }}>
                                                    <Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
                                                        <Row className="text-center">
                                                            <Col>
                                                                <img src="/static/images/illustrations/service.svg" height="100px"></img>
                                                                <br></br><br></br>
                                                                <h4 className="color__dark"><b>Consult with us</b></h4>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4} style={{ marginTop: '20px' }}>
                                                <Card>
                                                    <Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
                                                        <Row className="text-center">
                                                            <Col onClick={() => { window.location = "#options" }}>
                                                                <img src="/static/images/illustrations/compliance.webp" height="100px"></img>
                                                                <br></br><br></br>
                                                                <h4 className="color__dark"><b>Read & Decide</b></h4>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="d-xs-block d-sm-block d-md-none w-100">
                        <div className="hero--wrapper -white" style={{ 'height': '100%' }}>
                            <div className="hero__background -mobile">
                                <div className="-white">
                                    <Container>
                                        <Row className="hero__text">
                                            <Col>
                                                <h4 className="title color__dark text-center">Compare company structures</h4>
                                                <br></br>
                                                <p className="font__20 text-center color__dark">
                                                    Compare different company structures in detail, browse pros and cons of each.
                                                    <br></br>
                                                    Use our free tool to get recommendations.
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row style={{ 'marginBottom': '20px' }}>
                                            <Col md={4} style={{ marginTop: '20px' }}>
                                                <Card onClick={() => { window.location = '#quiz' }}>
                                                    <Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
                                                        <Row className="text-center">
                                                            <Col>
                                                                <img src="/static/images/illustrations/1.svg" height="100px"></img>
                                                                <br></br><br></br>
                                                                <h4 className="color__dark"><b>Take questionnaire</b></h4>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4} style={{ marginTop: '20px' }}>
                                                <Card onClick={() => { this.togglePopConvert() }}>
                                                    <Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
                                                        <Row className="text-center">
                                                            <Col>
                                                                <img src="/static/images/illustrations/service.svg" height="100px"></img>
                                                                <br></br><br></br>
                                                                <h4 className="color__dark"><b>Consult with us</b></h4>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4} style={{ marginTop: '20px' }}>
                                                <Card>
                                                    <Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
                                                        <Row className="text-center">
                                                            <Col onClick={() => { window.location = "#options" }}>
                                                                <img src="/static/images/illustrations/compliance.webp" height="100px"></img>
                                                                <br></br><br></br>
                                                                <h4 className="color__dark"><b>Read & Decide</b></h4>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-100" id="quiz">
                        <Container>
                            <Row className="mt-5">
                                <Col>
                                    <h4 className="color__dark text-center">Take the quiz.</h4>
                                    <p className="color__dark text-center">Choose the best company structure for you.</p>
                                </Col>
                            </Row>

                            <Row className="mt-3 mb-5">
                                <Col>
                                    <Card className="-no-hover">
                                        <Card.Body>
                                            <CompanyQuiz></CompanyQuiz>
                                            {/* <img src="/static/images/people/team1.jpeg" width="60%" className="text-center"></img>                                 */}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
                        <Col>
                            <Container>
                                <Row style={{ marginBottom: '20px' }} id="options">
                                    <Col>
                                        <h4 className="color__dark text-center">What are my options?</h4>
                                        <p className="color__dark text-center">Company structures available in India</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#common-company-structures' }}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    One Person Company
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for large scale businesses, with high investment needs
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#common-company-structures' }}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Private Limited Company
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for large scale businesses, with high investment needs
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#common-company-structures' }}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Limited Liability Partnership
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for large scale businesses, with high investment needs
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: '50px' }}></Row>
                                <Row style={{ marginBottom: '20px' }}>
                                    <Col>
                                        <h4 className="color__dark text-center">More options</h4>
                                        <p className="color__dark text-center">Other Common Options in India</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#more-company-structures' }}>
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
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#more-company-structures' }}>
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
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#more-company-structures' }}>
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
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#more-company-structures' }}>
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
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#more-company-structures' }}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Cooperative
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for large scale businesses, with high investment needs
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#more-company-structures' }}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Dormant Company
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for large scale businesses, with high investment needs
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#more-company-structures' }}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Hindu Undivided Family ( HUF )
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for large scale businesses, with high investment needs
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: '50px' }}></Row>
                                <Row style={{ marginBottom: '20px' }}>
                                    <Col>
                                        <h4 className="color__dark text-center">For Non Profit Organisations</h4>
                                        <p className="color__dark text-center">Usually used by NGOs, etc</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#non-profit-structures' }}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Section 8 Company
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for non profit organisations or social ventures
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#non-profit-structures' }}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Trust
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for non profit organisations or social ventures
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#non-profit-structures' }}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Society
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for non profit organisations or social ventures
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: '50px' }}></Row>
                                <Row style={{ marginBottom: '20px' }}>
                                    <Col>
                                        <h4 className="color__dark text-center">For foreign companies</h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#foreign-company-structures' }}>
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
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#foreign-company-structures' }}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Branch Office
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for organisations looking to venture into new domains
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#foreign-company-structures' }}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Project Office
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for foreign organisations looking to venture into India
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} xs={12} md={4}>
                                        <Card className="card__fancy" style={{ marginBottom: '10px' }} onClick={() => { window.location = '#foreign-company-structures' }}>
                                            <Card.Header>
                                                <Card.Title className="sans-serif">
                                                    Liason / Representative Office
                                                </Card.Title>
                                                <p className="card__fancy--title-description sans-serif text-center">
                                                    Ideal for large scale businesses, with high investment needs
                                                </p>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: '20px' }}></Row>
                            </Container>
                        </Col>
                    </Row>

                    <div className="w-100 mt-5">
                        <Container>
                            <Row style={{ marginBottom: '50px' }}></Row>
                            <Row style={{ marginBottom: '20px' }}>
                                <Col>
                                    <h4 className="color__dark text-center">Common company structures</h4>
                                    <p className="color__dark text-center">3 most popular choices</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Table striped bordered hover style={{ 'overflow': 'scroll', 'scroll': 'auto', 'display': 'block' }} className="w-100 fixed-col fixed-row" id="common-company-structures">
                                        <thead>
                                            <tr>
                                                <td>Company Structure</td>
                                                <td>Ideal for</td>
                                                <td>Liability</td>
                                                <td>Taxation</td>
                                                <td>Capital Contribution</td>
                                                <td>Share holders & directors</td>
                                                <td>Foreign Direct Investment</td>
                                            </tr>
                                        </thead>
                                        <tbody className="font__15">
                                            <tr>
                                                <td><b>One Person Company</b></td>
                                                <td style={{ 'minWidth': '300px' }}>Best suited for start-ups and SMEs, such as retail, trade, small manufacturing operations, one man operations, etc.</td>
                                                <td style={{ 'minWidth': '300px' }}>Liability is limited to the company.</td>
                                                <td style={{ 'minWidth': '300px' }}>
                                                    <ul className="card__list">
                                                        <li><i className="fa fa-check"></i>&nbsp;Gross Turnover in PY 16-17 &lt;= 250 crores-25% Otherwise 30% +</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Surcharge: If Total income &gt; 1 crore but upto 10 crores-7% If Total income &gt; 10 crore-12% +</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Health and education Cess 4%(compulsory)</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    No minimum limit. Maximum Rs. 50 Lakh.
                                                </td>
                                                <td style={{ 'minWidth': '300px' }}>Only one. No directors needed. </td>
                                                <td style={{ 'minWidth': '300px' }}>
                                                    FDI is not allowed with OPC.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>Private Limited Company</b></td>
                                                <td>Best suited for start ups, large businesses, industrial establishments, etc.</td>
                                                <td>Liability is limited to the company.</td>
                                                <td>
                                                    <ul className="card__list">
                                                        <li><i className="fa fa-check"></i>&nbsp;Gross Turnover in PY 16-17 &lt;= 250 crores-25% Otherwise 30% +</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Surcharge: If Total income &gt; 1 crore but upto 10 crores-7% If Total income &gt; 10 crore-12% +</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Health and education Cess 4% (compulsory)</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Dividend distribution @ 15% (grossing up applicable) + 12% surcharge + HEC 4%(compulsory)</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    No minimum limit of paid up capital.
                                                </td>
                                                <td>
                                                    Minimum of 2 shareholders. Maximum of 200 shareholders.
                                                    Atleast two directors needed.
                                                </td>
                                                <td>
                                                    Permitted
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>Limited Liability Company</b></td>
                                                <td>Best suited for professionals like CAs, Lawyers, Associates, etc in the service sector.</td>
                                                <td>An LLP is partnership in which some or all partners (depending on the jurisdiction) have limited liabilities. Partners are not liable for mis conduct by other partners.</td>
                                                <td>
                                                    <ul className="card__list">
                                                        <li><i className="fa fa-check"></i>&nbsp;Flat rate - 30% +</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Surcharge@12% of tax if Net Total Income &gt; 1 crore + HEC- 4%(compulsory)</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    No requirement.
                                                </td>
                                                <td>
                                                    Minimum 2 partners, no limit on maximum.
                                                </td>
                                                <td>
                                                    LLPs with FDI will be allowed, through the Government approval route, in those sectors/activities where 100% FDI is allowed, through the automatic route and there are no FDI-linked performance related conditions.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '20px', marginTop: '40px' }}>
                                <Col>
                                    <h4 className="color__dark text-center">More company structures</h4>
                                    <p className="color__dark text-center">More ways to incorporate in India</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Table striped bordered hover style={{ 'overflow': 'scroll', 'scroll': 'auto', 'display': 'block' }} className="w-100 fixed-col fixed-row" id="more-company-structures">
                                        <thead>
                                            <tr>
                                                <td>Company Structure</td>
                                                <td>Ideal for</td>
                                                <td>Liability</td>
                                                <td>Taxation</td>
                                                <td>Capital Contribution</td>
                                                <td>Share holders & directors</td>
                                                <td>Foreign Direct Investment</td>
                                            </tr>
                                        </thead>
                                        <tbody className="font__15">
                                            <tr>
                                                <td><b>Partnership Firm</b></td>
                                                <td style={{ 'minWidth': '300px' }}>Best suited for start-ups and SMEs with more than one owner.</td>
                                                <td style={{ 'minWidth': '300px' }}>Partners liability is unlimited. </td>
                                                <td style={{ 'minWidth': '300px' }}>
                                                    <ul className="card__list">
                                                        <li><i className="fa fa-check"></i>&nbsp;Flat rate of 30% +</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Surcharge@12% of tax if NTI > 1 Crore +</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;4% HEC (compulsory)</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Paid in 4 installments.</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    No requirement.
                                                </td>
                                                <td style={{ 'minWidth': '300px' }}>
                                                    Minimum 2 share holders, no limit on maximum.
                                                </td>
                                                <td style={{ 'minWidth': '300px' }}>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>Proprietorship Firm</b></td>
                                                <td>Best suited for start-ups and SMEs with one owner.</td>
                                                <td>Proprieter's liability is unlimited. </td>
                                                <td>
                                                    Same rates as applicable with individuals.
                                                </td>
                                                <td>
                                                    No requirement.
                                                </td>
                                                <td>
                                                    Minimum 1 member.
                                                </td>
                                                <td>
                                                    Not Applicable.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>Subsidiary of a company</b></td>
                                                <td>Suited for businesses who want to diversify into new domains.</td>
                                                <td>Liability is limited to the company. </td>
                                                <td>
                                                    <ul className="card__list">
                                                        <li><i className="fa fa-check"></i>&nbsp;Gross Turn over in PY 16-17 &lt;= 250 crores- 25% Otherwise 30% +</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Surcharge : If Total income &gt;1 crore but upto 10 crores- 7% If Total income &gt;10 crore- 12% +</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Health and education Cess 4% (compulsory)</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    No requirement.
                                                </td>
                                                <td>
                                                    Minimum 2 share holders, no limit on maximum.
                                                    At least 2 directors needed.
                                                </td>
                                                <td>
                                                    Permitted
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>Public Limited Company</b></td>
                                                <td>Suited for very large busineses.</td>
                                                <td>Liability is limited to the company. </td>
                                                <td>
                                                    <ul className="card__list">
                                                        <li><i className="fa fa-check"></i>&nbsp;Gross Turnover in PY 16-17 &lt;= 250 crores- 25% Otherwise 30% +</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Surcharge : If Total income &gt;1 crore but upto 10 crores- 7% If Total income &gt;10 crore- 12% +</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Health and education Cess 4% (compulsory)</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    No requirement.
                                                </td>
                                                <td>
                                                    Minimum 7 share holders, no limit on maximum.
                                                    At least 3 directors needed.
                                                </td>
                                                <td>
                                                    Permitted
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>Cooperative</b></td>
                                                <td>Voluntary association of persons, who's motive is the welfare of the members.</td>
                                                <td>Liability of members is limited to their shares in the organisation. </td>
                                                <td>
                                                    <ul className="card__list">
                                                        <li><i className="fa fa-check"></i>&nbsp;Flat rate of 10% for income upto ₹10,000</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;₹1,000 + 20% between ₹10,001 and ₹20,000</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;₹3,000 + 30% over ₹20,000 + surcharge@12% of Tax if NTI &gt; 1 Crore + 4% HEC(compulsory)</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    No requirement.
                                                </td>
                                                <td>
                                                    Minimum 10 members, no limit on maximum.
                                                </td>
                                                <td>
                                                    N / A
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>Dormant Company</b></td>
                                                <td>An existing company can be filed as dormant if it's not operational.</td>
                                                <td>N/A </td>
                                                <td>
                                                    N/A
                                                </td>
                                                <td>
                                                    N/A
                                                </td>
                                                <td>
                                                    N/A
                                                </td>
                                                <td>
                                                    N/A
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>Hindu Undivided Family</b></td>
                                                <td>Best suited for a Hindu unified family.</td>
                                                <td>The liability of the members are limited to their shares. However, the Karta, or the head of the family has unlimited liability.</td>
                                                <td>
                                                    Same as those applicable to individuals
                                                </td>
                                                <td>
                                                    No requirement.
                                                </td>
                                                <td>
                                                    Minimum 2 members, no limit on maximum.
                                                </td>
                                                <td>
                                                    N / A
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '20px', marginTop: '40px' }}>
                                <Col>
                                    <h4 className="color__dark text-center">Non Profit structures</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Table striped bordered hover style={{ 'overflow': 'scroll', 'scroll': 'auto', 'display': 'block' }} className="w-100 fixed-col fixed-row" id="non-profit-structures">
                                        <thead>
                                            <tr>
                                                <td>Company Structure</td>
                                                <td>Ideal for</td>
                                                <td>Liability</td>
                                                <td>Taxation</td>
                                                <td>Capital Contribution</td>
                                                <td>Share holders & directors</td>
                                                <td>Foreign Direct Investment</td>
                                            </tr>
                                        </thead>
                                        <tbody className="font__15">
                                            <tr>
                                                <td><b>NGO ( Section 8 )</b></td>
                                                <td style={{ 'minWidth': '300px' }}>Best suited for professionals like CAs, Lawyers, Associates, etc in the service sector.</td>
                                                <td style={{ 'minWidth': '300px' }}>Liability is limited to the organisation. </td>
                                                <td style={{ 'minWidth': '300px' }}>
                                                    If section 8 companies are covered under section 12 AA then tax is exempt otherwise tax will be applicable as Total turnover or gross reciept of PY-16-17 is upto 250 crore. @ 25% otherwise @ 30% and 4% cess
                                                </td>
                                                <td style={{ 'minWidth': '300px' }}>
                                                    No requirement.
                                                </td>
                                                <td style={{ 'minWidth': '300px' }}>
                                                    Minimum 2 share holders, no limit on maximum.
                                                    At least 3 directors needed.
                                                </td>
                                                <td style={{ 'minWidth': '300px' }}>
                                                    LLPs with FDI will be allowed, through the Government approval route, in those sectors/activities where 100% FDI is allowed, through the automatic route and there are no FDI-linked performance related conditions.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>NGO ( Trust )</b></td>
                                                <td>Best suited for professionals like CAs, Lawyers, Associates, etc in the service sector.</td>
                                                <td>Liability is limited to the company. </td>
                                                <td>
                                                    If section 8 companies are covered under section 12 AA then tax is exempt otherwise tax will be applicable Flat rate of 30% 4% cess
                                                </td>
                                                <td>
                                                    No requirement.
                                                </td>
                                                <td>
                                                    N/A
                                                </td>
                                                <td>
                                                    Permitted
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>NGO ( Society )</b></td>
                                                <td>Best suited for professionals like CAs, Lawyers, Associates, etc in the service sector.</td>
                                                <td>Liability is limited to the company. </td>
                                                <td>
                                                    <ul className="card__list">
                                                        <li><i className="fa fa-check"></i>&nbsp;Flat rate of 30%</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Surcharge of 5%</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;3% cess</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Paid in 3 installments.</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;No dividend distribution tax.</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    No requirement.
                                                </td>
                                                <td>
                                                    Minimum 2 share holders, no limit on maximum.
                                                    At least 2 directors needed.
                                                </td>
                                                <td>
                                                    LLPs with FDI will be allowed, through the Government approval route, in those sectors/activities where 100% FDI is allowed, through the automatic route and there are no FDI-linked performance related conditions.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '20px', marginTop: '40px' }}>
                                <Col>
                                    <h4 className="color__dark text-center">Strucutures for foreign bodies</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Table striped bordered hover style={{ 'overflow': 'scroll', 'scroll': 'auto', 'display': 'block' }} className="w-100 fixed-col fixed-row" id="foreign-company-structures">
                                        <thead>
                                            <tr>
                                                <td>Company Structure</td>
                                                <td>Ideal for</td>
                                                <td>Liability</td>
                                                <td>Taxation</td>
                                                <td>Capital Contribution</td>
                                                <td>Share holders & directors</td>
                                                <td>Foreign Direct Investment</td>
                                            </tr>
                                        </thead>
                                        <tbody className="font__15">
                                            <tr>
                                                <td><b>Subsidiary of a foreign company</b></td>
                                                <td style={{ 'minWidth': '300px' }}>Best suited for foreign entities looking to venture into India.</td>
                                                <td style={{ 'minWidth': '300px' }}>Liability is limited to the company. </td>
                                                <td style={{ 'minWidth': '300px' }}>
                                                    <ul className="card__list">
                                                        <li><i className="fa fa-check"></i>&nbsp;Flat rate of 30%</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Surcharge of 7% for income over 1 Cr upto 10 crores.</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Surcharge of 12% for income over 10 Cr.</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;4% cess</li>
                                                    </ul>
                                                </td>
                                                <td style={{ 'minWidth': '300px' }}>
                                                    No requirement.
                                                </td>
                                                <td style={{ 'minWidth': '300px' }}>
                                                    Minimum 2 share holders, no limit on maximum.
                                                    At least 2 directors needed.
                                                </td>
                                                <td style={{ 'minWidth': '300px' }}>
                                                    LLPs with FDI will be allowed, through the Government approval route, in those sectors/activities where 100% FDI is allowed, through the automatic route and there are no FDI-linked performance related conditions.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>Branch Office</b></td>
                                                <td>Best suited for professionals like CAs, Lawyers, Associates, etc in the service sector.</td>
                                                <td>Liability is limited to the company. </td>
                                                <td>
                                                    <ul className="card__list">
                                                        <li><i className="fa fa-check"></i>&nbsp;Flat rate of 30%</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Surcharge of 7% if NTI > 1 crore and upto 10 Crores</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;4% cess</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Paid in 4 installments.</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;No dividend distribution tax.</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    No requirement.
                                                </td>
                                                <td>
                                                    Minimum 2 share holders, no limit on maximum.
                                                    At least 2 directors needed.
                                                </td>
                                                <td>
                                                    LLPs with FDI will be allowed, through the Government approval route, in those sectors/activities where 100% FDI is allowed, through the automatic route and there are no FDI-linked performance related conditions.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>Project Office</b></td>
                                                <td>Best suited when a company needs to set up offices for a particular project only.</td>
                                                <td>N/A </td>
                                                <td>
                                                    <ul className="card__list">
                                                        <li><i className="fa fa-check"></i>&nbsp;Flat rate of 40%</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Surcharge of 2% over 1cr</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Surcharge of 5% over 10cr</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;4% cess</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    N/A
                                                </td>
                                                <td>
                                                    N/A
                                                </td>
                                                <td>
                                                    Permitted
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>Liason / Representative Office</b></td>
                                                <td>Suitable when a company needs just a representative in India</td>
                                                <td>N/A</td>
                                                <td>
                                                    <ul className="card__list">
                                                        <li><i className="fa fa-check"></i>&nbsp;Flat rate of 30%</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Surcharge of 5%</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;3% cess</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;Paid in 3 installments.</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;No dividend distribution tax.</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    N/A
                                                </td>
                                                <td>
                                                    N/A
                                                </td>
                                                <td>
                                                    Permitted
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row className="hero__text">
                                <Col>
                                    <h4 className="color__dark text-center font__40">Not Sure Yet?</h4>
                                    <p className="color__dark text-center">Leave us your contact information and we will help. No charges apply!</p>
                                    <LineConvert product={'ci'} title={''} subTitle={''}></LineConvert>
                                </Col>
                            </Row>

                            <Row style={{ marginTop: '20px' }}></Row>
                        </Container>
                    </div>
                </Layout>
            </>
        );
    }
}

export default CompanyIncorporation;
