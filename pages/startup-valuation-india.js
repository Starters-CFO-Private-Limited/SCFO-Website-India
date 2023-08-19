import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../components/site/layout';
import PopConvert from '../components/leadPages/popConvert';
import Trust from '../components/leadPages/trust';
import ExitConvert from '../components/leadPages/exitConvert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Meta from '../components/site/meta';
import FAQ from '../components/leadPages/faq';
import PerksV2 from '../components/leadPages/perksV2';
import { WHATSAPP_DISPLAY_NUMBER } from '../constants';
import { VALUATION_FAQ } from "../content/valuation_faq";
import DigitallyEnabled from "../components/leadPages/digitallyEnabled";
import NumbersSpeak from '../components/leadPages/numbersSpeak';

import LineConvert from '../components/leadPages/lineConvertValuation';
import BoxCovert from '../components/leadPages/boxConvertValuation';


class Valuation extends React.Component {

    state = {
        'showPopConvert': false,
        'buttonText': 'Submit',
        'convertSuccess': '',
    }

    togglePopConvert() {
        this.setState({
            'showPopConvert': !this.state.showPopConvert,
            'mobile': '',
        })
    }

    constructor(props, context) {
        super(props, context);
        this.togglePopConvert = this.togglePopConvert.bind(this);
    }

    render() {

        return (

            <>
                <Meta title="Start up Valuation in India" description="Find out your Startup Valuation / Business Valuation with help of our business valuation services."></Meta>


                <Layout promobanner={false}>

                    <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert} product={'valuation'} mobile={this.state.mobile}></PopConvert>
                    <ExitConvert></ExitConvert>

                    <div className="d-none d-md-block d-lg-block d-xl-block w-100">
                        <div className="hero--wrapper">
                            <div className="d-flex align-items-start h-100">
                                <Container className="h-100">
                                    <Row className="hero__text -no-margin h-100">
                                        <Col>
                                            <div style={{ marginTop: "50px;" }}>
                                                <h4 className="title">What is your startup worth?</h4>
                                                <h4 className="color__white">Seamless valuation services from Starters' CFO <br></br><br></br></h4>
                                                <p className="description">
                                                    <ul className="card__list">
                                                        <li><i className="fa fa-check"></i>&nbsp; Valuation for regulatory purposes</li>
                                                        <li><i className="fa fa-check"></i>&nbsp; Valuation for investment pitches</li>
                                                        <li><i className="fa fa-check"></i>&nbsp; Clear & details valuation reports for negotiations</li>
                                                        <li><i className="fa fa-check"></i>&nbsp; Trusted by 1000+ happy customers</li>
                                                    </ul>
                                                </p>
                                                <Button className="btn__primary large" onClick={this.togglePopConvert}>Get started</Button>
                                            </div>
                                        </Col>
                                        <Col className="d-flex align-items-center h-100">
                                            <BoxCovert product={'valuation'} title={'Consult with us for free'} />
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="grass"></div>
                    </div>

                    <div className="d-xs-block d-sm-block d-md-none w-100">
                        <div className="hero--wrapper -mobile">
                            <div className="hero__background d-flex align-items-start -mobile">
                                <Container>
                                    <Row className="hero__text">
                                        <Col>
                                            <h4 className="title">What is your startup worth?</h4>
                                            <h4 className="color__white">Seamless valuation services from Starters' CFO <br></br><br></br></h4>
                                            <p className="description">
                                                <ul className="card__list">
                                                    <li><i className="fa fa-check"></i>&nbsp; Valuation for regulatory purposes</li>
                                                    <li><i className="fa fa-check"></i>&nbsp; Valuation for investment pitches</li>
                                                    <li><i className="fa fa-check"></i>&nbsp; Clear & details valuation reports for negotiations</li>
                                                    <li><i className="fa fa-check"></i>&nbsp; Trusted by 1000+ happy customers</li>
                                                </ul>
                                            </p>
                                            <Button className="btn__primary large" onClick={this.togglePopConvert}>Get started</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="grass"></div>
                    </div>

                    <div className="w-100">
                        <div className="-white">
                            <Container>
                                <Row className="hero__text text-center">
                                    <Col>
                                        <h4 className="color__dark text-center font__40 weight__700">Business Valuation Services</h4>
                                        <br></br>
                                        <Row>
                                            <Col md={{ 'span': '8', 'offset': '2' }}>
                                                <p className="font__20 text-center color__dark">"Yesterday" was the right time to have an independent business valuation for your company by an independent business valuer. And tomorrow will be late. The need for a business valuation arises for several reasons: incoming investors, financial strategy, business planning, business sale, founder exit, public offering, or net worth certification.</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                    <Container>
                        <Row style={{ marginTop: '50px' }}></Row>

                        <Row style={{ marginTop: '30px' }}></Row>

                        <Row>
                            <Col sm={12} md={4} className="text-center">
                                <img src="/static/images/illustrations/fund-raise.png" alt="Fund Raise" style={{ height: "170px" }}></img>
                                <br></br><br></br>
                                <h3>Fund Raise</h3>
                                <p className="color__grey">
                                    Raising money is a cumbersome multi-stage process while establishing a valuation is one of the most important steps along the way. Valuation matters to entrepreneurs as it determines the dilution in the company in exchange for fund raise.
                                </p>
                            </Col>
                            <Col sm={12} md={4} className="text-center">
                                <img src="/static/images/illustrations/sale-of-the-business.svg" alt='Sale of the business' style={{ height: "170px" }}></img>
                                <br></br><br></br>
                                <h3>Sale of the business</h3>
                                <p className="color__grey">
                                    As an entrepreneur, if you are considering selling your venture to a third party, a valuation that is prepared before the beginning of the negotiation will put you in a position of power. When you have a good idea of the value of a business, you can avoid wasting time looking at deals that do not make financial sense.
                                </p>
                            </Col>
                            <Col sm={12} md={4} className="text-center">
                                <img src="/static/images/illustrations/mergers_acquisition_amalgamation.webp" alt='Mergers, Acquisition & Amalgamation' style={{ height: "170px" }}></img>
                                <br></br><br></br>
                                <h3>Mergers, Acquisition &amp; Amalgamation</h3>
                                <p className="color__grey">
                                    Having a buy-sell agreement in place between multiple owners ensures a smooth transition of a business in events such as death or disputes among the owners. Entrepreneur needs to understand the value of the business to determine the dilution of equity shares.
                                </p>
                            </Col>
                        </Row>
                        <Row className="mt-md-4 text-center">
                            <Col sm={12} md={4} className="text-center">
                                <img src="/static/images/illustrations/ESOP-plans.svg" alt='ESOP plans' style={{ height: "170px" }}></img>
                                <br></br><br></br>
                                <h3>ESOP plans</h3>
                                <p className="color__grey">
                                    If the company is considering establishing an ESOP, a feasibility study is needed and a key part of that study is the valuation of the business. While publicly-traded companies can use their market values for the ESOP, privately-held corporations need an appraisal to know how much they can deduct for the contribution of shares to the plan.
                                </p>
                            </Col>
                            <Col sm={12} md={4} className="text-center">
                                <img src="/static/images/illustrations/regulatory_purposes.svg" alt="Regulatory purposes" style={{ height: "170px" }}></img>
                                <br></br><br></br>
                                <h3>Regulatory purposes</h3>
                                <p className="color__grey">
                                    Regulatory Valuations are required under Companies Act, Income Tax Act, FEMA, SEBI Regulations, Insolvency & Bankruptcy Code, IND-AS (Financial Reporting). Starters' CFO helps companies to navigate this environment of changing laws and regulations by offering skilled expertise for forming strategy and defending valuation positions.
                                </p>
                            </Col>
                            <Col sm={12} md={4} className="text-center">
                                <img src="/static/images/illustrations/decision_making.png" alt='Decision Making' style={{ height: "170px" }}></img>
                                <br></br><br></br>
                                <h3>Decision Making</h3>
                                <p className="color__grey">
                                    An owner may want a business appraisal to help decide the near- and long-term strategies. While the investment in an appraisal is meaningful and not undertaken lightly, an owner at an inflection point in the business or his/her personal life may need the information to decide whether to sell, expand, gift, strategically plan or go in another direction.
                                </p>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }}></Row>
                    </Container>

                    <DigitallyEnabled line_1={"Starters' CFO differs from the competition in the simple online processes it has built to help you achieve your valuation needs."} />

                    <Container>
                        <Row className="hero__text">
                            <Col>
                                <h4 className="color__dark text-center font__40">Valuation for regulatory purposes</h4>
                                <br></br>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '10px' }}>
                            <Col sm={12} md={6}>
                                <div>
                                    <ul className="card__list font__20">
                                        <li style={{ marginTop: "5px" }}><i className="fa-solid fa-circle-check color__scfo"></i>&nbsp; IBBI Registered Valuer Valuation</li>
                                        <li style={{ marginTop: "5px" }}><i className="fa-solid fa-circle-check color__scfo"></i>&nbsp; Merchant Banker Valuation</li>
                                        <li style={{ marginTop: "5px" }}><i className="fa-solid fa-circle-check color__scfo"></i>&nbsp; CA Valuation</li>
                                        <li style={{ marginTop: "5px" }}><i className="fa-solid fa-circle-check color__scfo"></i>&nbsp; ESOP Valuation</li>
                                        <li style={{ marginTop: "5px" }}><i className="fa-solid fa-circle-check color__scfo"></i>&nbsp; Accounting Standard Valuation</li>
                                    </ul>
                                </div>
                                <img src="/static/svg/valuation-for-regulatory-purposes.svg" alt='Valuation for regulatory purposes' className="h-18" style={{ marginTop: "60px" }}></img>
                            </Col>
                            <Col sm={12} md={6}>
                                <p className="font__20 color__dark">
                                    Regulatory Valuations are required under Companies Act, Income Tax Act, FEMA, SEBI Regulations, Insolvency & Bankruptcy Code, IND-AS (Financial Reporting).
                                    <br></br>
                                    <br></br>
                                    Different regulators in India have prescribed different, and at some places even contradictory, valuation requirements to be applied in specific situations. In addition to applicable laws & regulations, more recently, some regulators have also prescribed valuation to be conducted as per internationally accepted valuation guidelines.
                                    <br></br>
                                    <br></br>
                                    Starters' CFO  helps companies to navigate this environment of changing laws and regulations by offering skilled expertise for forming strategy and defending valuation positions by working in closely with Companies’ Board and Management and their tax and legal advisors to provide valuations services required under various laws and regulations.
                                </p>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '30px' }}></Row>

                        <Row style={{ marginTop: '50px' }}></Row>
                    </Container>

                    <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
                        <Col>
                            <Container>
                                <LineConvert product={'valuation'}></LineConvert>
                            </Container>
                        </Col>
                    </Row>


                    <Container>
                        <Row className="hero__text">
                            <Col>
                                <h4 className="color__dark text-center font__40">Valuation for investment pitching</h4>
                                <br></br>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '10px' }}>
                            <Col sm={12} md={6}>
                                <div>
                                    <ul className="card__list font__20">
                                        <li style={{ marginTop: "5px" }}><i className="fa-solid fa-circle-check color__scfo"></i>&nbsp; Financial modelling for valuation through DCF</li>
                                        <li style={{ marginTop: "5px" }}><i className="fa-solid fa-circle-check color__scfo"></i>&nbsp; Comparable transactions for valuation through market multiple method</li>
                                        <li style={{ marginTop: "5px" }}><i className="fa-solid fa-circle-check color__scfo"></i>&nbsp; Valuation by stage / VC method</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <p className="font__20 color__dark">
                                    How much should an investor pay for an interest in your company? It depends on what the company is worth. In order to set a price for an investor to buy into your company, a business valuation must be made.
                                    <br></br>
                                    <br></br>
                                    While value can be set using certain key metrics (e.g., a multiple of earnings), an appraisal may be preferable (e.g., if you’re bringing in investors who are acquiring a substantial interest in the company).
                                </p>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '50px' }}></Row>
                    </Container>

                    <NumbersSpeak />

                    <PerksV2 />

                    <Container>
                        <Row className="hero__text">
                            <Col>
                                <h4 className="color__dark text-center font__40">Frequently Asked Questions</h4>
                                <br></br>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '10px' }}>
                            <Col sm={12} md={12}>
                                <FAQ faq={VALUATION_FAQ}></FAQ>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '50px' }}></Row>
                    </Container>

                    <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
                        <Col>
                            <Container>
                                <LineConvert product={'valuation'}></LineConvert>
                            </Container>
                        </Col>
                    </Row>

                    <div id="fb-root"></div>
                    <div className="fb-customerchat"
                        attribution="setup_tool"
                        page_id="827013777421580">
                    </div>

                </Layout>
            </>
        );
    }
}

export default Valuation;
