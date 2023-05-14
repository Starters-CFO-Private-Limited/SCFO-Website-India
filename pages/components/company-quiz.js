import React, { Fragment } from 'react';
import MainWrapper from 'react';
import Button from "scfonext/pages/components/site/button";
import Modal from "scfonext/pages/components/site/modal";
import Row from "scfonext/pages/components/site/row";
import Col from "scfonext/pages/components/site/col";
import Form from "scfonext/pages/components/site/form";
import { FormValidation } from 'calidation';
import LineConvert from 'scfonext/pages/components/leadPages/lineConvert';

class CompanyQuiz extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            step: 1,
            scores: {
                'plc': 0,
                'llp': 0,
                'opc': 0,
                'soleprop': 0,
                'partnership': 0
            }
        };
    }

    incrementScore = (player, increment) => {
        let scores = this.state.scores;
        scores[player] = scores[player] + increment
        this.setState({
            'scores': scores
        })
    }

    consumeAnswer = () => {
        this.setState({
            "step": this.state.step + 1
        });
    }

    digestAnswers = () => {
        const scores = this.state.scores;
        const verdict = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        this.setState({ "step": verdict });
    }

    render() {

        return (
            <>

                {/* step 1 */}
                {
                    this.state.step == 1 ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <p className="company-quiz__question">What type of company are you looking to incorporate?</p>
                                            </Col>
                                        </Row>

                                        <Row className="company-quiz__answers-row">
                                            <Col className="d-flex flex-col">
                                                <div className="company-quiz__answer" onClick={() => { this.consumeAnswer() }}>
                                                    A. Profit
                                                </div>
                                                <div className="company-quiz__answer" onClick={() => { this.setState({ 'step': 'ngo' }) }}>
                                                    B. Non Profit
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <div className="company-quiz__help">
                                                    A Non Profit is an organization that uses its surplus of the revenues to further achieve its ultimate objective, rather than distributing its income to the organization's shareholders, leaders, or members.
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="scfo-square-bg">
                                    </Col>
                                </Row>

                            </div>
                        </>
                        :
                        <></>
                }

                {/* step 2 */}
                {
                    this.state.step == 2 ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <p className="company-quiz__question">Which of the following best describes your business?</p>
                                    </Col>
                                </Row>

                                <Row className="company-quiz__answers-row">
                                    <Col className="d-flex flex-col">
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('llp', 1) }}>
                                            A. Services / Consultancy Business / Small Retail
                                        </div>
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('plc', 2); this.incrementScore('llp', 1) }}>
                                            B. Retail / Manufacturing Business
                                        </div>
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('plc', 1) }}>
                                            C. Software as a service / Software product
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="company-quiz__help">

                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* step 3 */}
                {
                    this.state.step == 3 ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <p className="company-quiz__question">Will your business source finances from friends and family as loans?</p>
                                    </Col>
                                </Row>

                                <Row className="company-quiz__answers-row">
                                    <Col className="d-flex flex-col">
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('llp', 2) }}>
                                            A. Yes
                                        </div>
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('plc', 1) }}>
                                            B. No
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="company-quiz__help">
                                            LLPs are much better suited if you plan to source finances from friends and family. If this is not a strict requirement, we will recommend other options.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* step 4 */}
                {
                    this.state.step == 4 ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <p className="company-quiz__question">Will you withdraw profits generated by your company in forms other than salaries?</p>
                                    </Col>
                                </Row>

                                <Row className="company-quiz__answers-row">
                                    <Col className="d-flex flex-col">
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('llp', 2) }}>
                                            A. Yes
                                        </div>
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('plc', 1) }}>
                                            B. No
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="company-quiz__help">
                                            With most start ups, founders only withdraw profits in the form of salaries. Payouts to directors of a company otherwise attract taxes, with varying rates in different structures.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* step 5 */}
                {
                    this.state.step == 5 ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <p className="company-quiz__question">Do you foresee yourself listing your company in the future?</p>
                                    </Col>
                                </Row>

                                <Row className="company-quiz__answers-row">
                                    <Col className="d-flex flex-col">
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('plc', 2) }}>
                                            A. Yes
                                        </div>
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer() }}>
                                            B. No
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="company-quiz__help">
                                            In corporate finance, a listing refers to the company's shares being on the list (or board) of stock that are officially traded on a stock exchange.
                                            You should take this account if you're registering a new entity for a very large business.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* step 6 */}
                {
                    this.state.step == 6 ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <p className="company-quiz__question">Which of the following best describes your business?</p>
                                    </Col>
                                </Row>

                                <Row className="company-quiz__answers-row">
                                    <Col className="d-flex flex-col">
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('plc', 1) }}>
                                            A. B2B
                                        </div>
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('llp', 1) }}>
                                            B. B2C
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="company-quiz__help">
                                            B2B stands for business to business. If you are selling to other businesses, select this option. <br></br>
                                            B2C stands for business to client. If you are selling to individuals, select this option. <br></br>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* step 7 */}
                {
                    this.state.step == 7 ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <p className="company-quiz__question">Do you want 100% control over your company and be the sole proprieter?</p>
                                    </Col>
                                </Row>

                                <Row className="company-quiz__answers-row">
                                    <Col className="d-flex flex-col">
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('opc', 5); this.incrementScore('soleprop', 5) }}>
                                            A. Yes
                                        </div>
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('plc', 1); this.incrementScore('llp', 1); this.incrementScore('partnership', 1) }}>
                                            B. No
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="company-quiz__help">
                                            Choose yes if you do not want any investors, any partners, any other directors or share holders, right now, or any time in the future. You are also <b>the only employee</b> of your company.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* step 8 */}
                {
                    this.state.step == 8 ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <p className="company-quiz__question">What are the chances of litigation in your organisation?</p>
                                    </Col>
                                </Row>

                                <Row className="company-quiz__answers-row">
                                    <Col className="d-flex flex-col">
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('plc', 1); this.incrementScore('opc', 1); this.incrementScore('llp', 1) }}>
                                            A. High
                                        </div>
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('soleprop', 5); this.incrementScore('partnership', 5) }}>
                                            B. Low
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="company-quiz__help">
                                            It is better to have your liabilities limited when there are chances of litigation or loss.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* step 9 */}
                {
                    this.state.step == 9 ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <p className="company-quiz__question">How important is your brand to your business?</p>
                                    </Col>
                                </Row>

                                <Row className="company-quiz__answers-row">
                                    <Col className="d-flex flex-col">
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('plc', 5); this.incrementScore('llp', 3) }}>
                                            A. High
                                        </div>
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('soleprop', 2); this.incrementScore('partnership', 2) }}>
                                            B. Low
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="company-quiz__help">
                                            Private Limited firms have strong brand presence as compared to OPC or LLPS.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* step 10 */}
                {
                    this.state.step == 10 ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <p className="company-quiz__question">Will your company raise funds from external investors / angel investors / accelerators? </p>
                                    </Col>
                                </Row>

                                <Row className="company-quiz__answers-row">
                                    <Col className="d-flex flex-col">
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer(); this.incrementScore('plc', 10) }}>
                                            A. Yes
                                        </div>
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer() }}>
                                            B. No
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="company-quiz__help">
                                            Most investors will insist ( and it is almost always legally required ) that you register as a Private Limited Company before investing in your business. For these reasons, it is the smartest to register as one beforehand.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* step 11 */}
                {
                    this.state.step == 11 ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <p className="company-quiz__question">Please describe your company (optional)</p>
                                    </Col>
                                </Row>

                                <Row className="company-quiz__answers-row">
                                    <Col>
                                        <Form.Group>
                                            <Form.Control type="text"></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="company-quiz__answers-row">
                                    <Col className="d-flex flex-col">
                                        <div className="company-quiz__answer" onClick={() => { this.consumeAnswer() }}>
                                            Continue
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="company-quiz__help">
                                            We will use this description to help make the right recommendations for you if you decide to consult with us. We do not charge for consulations.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* step 12 */}
                {
                    this.state.step == 12 ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <div className="text-center">
                                            <h4>We have your results! 🚀</h4>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="company-quiz__answers-row">
                                    <Col className="d-flex flex-row justify-content-center">
                                        <Button variant="primary" onClick={() => { this.digestAnswers() }}>
                                            View Results
                                        </Button>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="company-quiz__help">
                                            Please do not consider the response shared by this automated tool as legal advise. Please consult a professional, or speak to our advisors for help.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* private limited */}
                {
                    this.state.step == 'plc' ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <div className="text-center">
                                            <h4>Our recommendation</h4>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="mt-5">
                                    <Col>
                                        <h4>Primary Recommendation</h4>
                                        <p>
                                            We recommend that you start a <b>Private Limited Company (PLC).</b>
                                            <br></br>
                                            <br></br>
                                            We recommend this for the following reasons:
                                            <ul className="card__list">
                                                <li><i className="fa fa-check"></i>&nbsp; Investment is only possible when you're registered as a PLC.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; An PLC is better suited for large scale businesses or for businesses with larger potential of growth.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; It is easier to go public and list your company when registered as an PLC.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; It is the most commonly used form of incorporation, and the most trusted, by vendors, customers and employees alike.</li>
                                            </ul>
                                        </p>
                                    </Col>
                                </Row>

                                <Row className="mt-5">
                                    <Col>
                                        <LineConvert product={'ci-plc'}></LineConvert>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="company-quiz__help">
                                            Please do not consider the response shared by this automated tool as legal advise. Please consult a professional, or speak to our advisors for help.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* llp */}
                {
                    this.state.step == 'llp' ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <div className="text-center">
                                            <h4>Our recommendation</h4>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="mt-5">
                                    <Col>
                                        <h4>Primary Recommendation</h4>
                                        <p>
                                            We recommend that you start a <b>Limited Liability Partnership (LLP).</b>
                                            <br></br>
                                            <br></br>
                                            We recommend this for the following reasons:
                                            <ul className="card__list">
                                                <li><i className="fa fa-check"></i>&nbsp; You indicated that you want to raise funds from friends and family.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; You're running a start-ups or SME such as a consultancy, better suited when incorporated as LLPs.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; You do not want to list or raise funds from investors.</li>
                                            </ul>
                                        </p>
                                    </Col>
                                </Row>

                                <Row className="mt-5">
                                    <Col>
                                        <LineConvert product={'ci-llp'}></LineConvert>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="company-quiz__help">
                                            Please do not consider the response shared by this automated tool as legal advise. Please consult a professional, or speak to our advisors for help.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* opc */}
                {
                    this.state.step == 'opc' ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <div className="text-center">
                                            <h4>Our recommendation</h4>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="mt-5">
                                    <Col>
                                        <h4>Primary Recommendation</h4>
                                        <p>
                                            We recommend that you start a <b>One Person Company (OPC).</b>
                                            <br></br>
                                            <br></br>
                                            We recommend this for the following reasons:
                                            <ul className="card__list">
                                                <li><i className="fa fa-check"></i>&nbsp; You are not looking for any partners or employees, now or in the future.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; You want 100% control over your company.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; You are not looking for investment.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; You are okay with "(OPC) Private Limited" attached after the legal name of your company.</li>
                                            </ul>
                                        </p>
                                    </Col>
                                </Row>

                                <Row className="mt-5">
                                    <Col>
                                        <LineConvert product={'ci-opc'}></LineConvert>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="company-quiz__help">
                                            Please do not consider the response shared by this automated tool as legal advise. Please consult a professional, or speak to our advisors for help.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* soleprop */}
                {
                    this.state.step == 'soleprop' ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <div className="text-center">
                                            <h4>Our recommendation</h4>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="mt-5">
                                    <Col>
                                        <h4>Primary Recommendation</h4>
                                        <p>
                                            We recommend that you start a <b>Sole Proprietorship.</b>
                                            <br></br>
                                            <br></br>
                                            {/* We recommend this for the following reasons: 
                                        <ul className="card__list">
                                            <li><i className="fa fa-check"></i>&nbsp; You are not looking for any partners or employees, now or in the future.</li>
                                            <li><i className="fa fa-check"></i>&nbsp; You want 100% control over your company.</li>
                                            <li><i className="fa fa-check"></i>&nbsp; You are not looking for investment.</li>
                                            <li><i className="fa fa-check"></i>&nbsp; You are okay with "Sole Proprietorship" attached after the legal name of your company.</li>
                                        </ul> */}
                                        </p>
                                    </Col>
                                </Row>

                                <Row className="mt-5">
                                    <Col>
                                        <LineConvert product={'ci-soleprop'}></LineConvert>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        {/* <div className="company-quiz__help">
                                        Please do not consider the response shared by this automated tool as legal advise. Please consult a professional, or speak to our advisors for help.
                                    </div> */}
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* partnership */}
                {
                    this.state.step == 'partnership' ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <div className="text-center">
                                            <h4>Our recommendation</h4>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="mt-5">
                                    <Col>
                                        <h4>Primary Recommendation</h4>
                                        <p>
                                            We recommend that you start a <b>Partnership.</b>
                                            <br></br>
                                            <br></br>
                                            {/* We recommend this for the following reasons: 
                                        <ul className="card__list">
                                            <li><i className="fa fa-check"></i>&nbsp; You are not looking for any partners or employees, now or in the future.</li>
                                            <li><i className="fa fa-check"></i>&nbsp; You want 100% control over your company.</li>
                                            <li><i className="fa fa-check"></i>&nbsp; You are not looking for investment.</li>
                                            <li><i className="fa fa-check"></i>&nbsp; You are okay with "Partnership" attached after the legal name of your company.</li>
                                        </ul> */}
                                        </p>
                                    </Col>
                                </Row>

                                <Row className="mt-5">
                                    <Col>
                                        <LineConvert product={'ci-partnership'}></LineConvert>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        {/* <div className="company-quiz__help">
                                        Please do not consider the response shared by this automated tool as legal advise. Please consult a professional, or speak to our advisors for help.
                                    </div> */}
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {/* ngo */}
                {
                    this.state.step == 'ngo' ?
                        <>
                            <div className="company-quiz">

                                <Row>
                                    <Col>
                                        <div className="text-center">
                                            <h4>Our recommendations</h4>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="mt-5">
                                    <Col>
                                        <h4>Primary Recommendation</h4>
                                        <p>
                                            NGO as a <b>Section 8 organisation.</b>
                                            <br></br>
                                            <br></br>
                                            We recommend this for the following reasons:
                                            <ul className="card__list">
                                                <li><i className="fa fa-check"></i>&nbsp; Investment is only possible when you're registered as a PLC.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; An PLC is better suited for large scale businesses or for businesses with larger potential of growth.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; It is easier to go public and list your company when registered as an PLC.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; It is the most commonly used form of incorporation, and the most trusted, by vendors, customers and employees alike.</li>
                                            </ul>
                                        </p>
                                    </Col>
                                    <Col>
                                        <h4>Secondary Recommendation</h4>
                                        <p>
                                            NGO as a <b>Trust.</b>
                                            <br></br>
                                            <br></br>
                                            We recommend this for the following reasons:
                                            <ul className="card__list">
                                                <li><i className="fa fa-check"></i>&nbsp; Investment is only possible when you're registered as a PLC.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; An PLC is better suited for large scale businesses or for businesses with larger potential of growth.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; It is easier to go public and list your company when registered as an PLC.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; It is the most commonly used form of incorporation, and the most trusted, by vendors, customers and employees alike.</li>
                                            </ul>
                                        </p>
                                    </Col>
                                    <Col>
                                        <h4>Tertiary Recommendation</h4>
                                        <p>
                                            NGO as a <b>Society.</b>
                                            <br></br>
                                            <br></br>
                                            We recommend this for the following reasons:
                                            <ul className="card__list">
                                                <li><i className="fa fa-check"></i>&nbsp; Investment is only possible when you're registered as a PLC.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; An PLC is better suited for large scale businesses or for businesses with larger potential of growth.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; It is easier to go public and list your company when registered as an PLC.</li>
                                                <li><i className="fa fa-check"></i>&nbsp; It is the most commonly used form of incorporation, and the most trusted, by vendors, customers and employees alike.</li>
                                            </ul>
                                        </p>
                                    </Col>
                                </Row>

                                <Row className="mt-5">
                                    <Col>
                                        <LineConvert product={'ci-ngo'}></LineConvert>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="company-quiz__help">
                                            Please do not consider the response shared by this automated tool as legal advise. Please consult a professional, or speak to our advisors for help.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                }

                {
                    this.state.step != 1 ? <div className="text-right">
                        <div className="font__10 color__grey">
                            <a onClick={() => { this.setState({ 'step': 1 }) }} className="hover-pointer">Reset</a>
                        </div>
                    </div> : null
                }
            </>
        )
    }

}

export default CompanyQuiz;
