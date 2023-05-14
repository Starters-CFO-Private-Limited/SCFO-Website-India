import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../components/site/layout';
import PopConvert from '../components/leadPages/popConvert';
import LineConvert from '../components/leadPages/lineConvert';
import ExitConvert from '../components/leadPages/exitConvert';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import HeaderConvert from '../components/leadPages/headerConvert';
import Meta from '../components/site/meta';
import FAQ from '../components/leadPages/faq';
import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGE_NUMBER } from '../constants';
import { GST_FAQ } from '../content/gst_faq';


class GST extends React.Component {

    state = {
        'showPopConvert': false,
        'buttonText': 'Submit',
        'convertSuccess': ''
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
                <Meta title="GST Registration in India" description="GST Registration at just Rs. 1,999, 5 day turn around time. Submit application online."></Meta>

                <Layout promobanner={true}>

                    <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert} product={'gst'} mobile={this.state.mobile}></PopConvert>
                    <ExitConvert></ExitConvert>


                    <div className="w-100">
                        <div className="-white">
                            <HeaderConvert title="GST Registration at ₹1,999" />
                        </div>
                    </div>


                    <div className="w-100">
                        <Container>
                            <Row className="hero__text">
                                <Col>
                                    <h4 className="color__dark text-center font__40">Frequently Asked Questions</h4>
                                    <br></br>
                                </Col>
                            </Row>

                            <Row style={{ marginTop: '10px' }}>
                                <Col sm={12} md={12}>
                                    <FAQ faq={GST_FAQ}></FAQ>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '50px' }}></Row>
                        </Container>
                    </div>

                    <Row style={{ backgroundColor: '#f4f8fb', paddingTop: '40px', paddingBottom: '40px' }}>
                        <Col>
                            <Container>
                                <LineConvert product={'gst'}></LineConvert>
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

export default GST;
