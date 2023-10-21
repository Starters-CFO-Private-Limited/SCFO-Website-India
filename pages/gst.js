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
                {/* <Meta title="GST Registration in India" description="GST Registration at just Rs. 1,999, 5 day turn around time. Submit application online."></Meta> */}

                <Meta 
                title="Expert Guidance for Seamless GST Registration with Starters’ CFO"
                description="Starters' CFO offers businesses a complete GST registration service through  which businesses obtain a unique identification number for seamless tax filings."
                keywords="gst registration, gst apply, e way bill registration, register for gst, gst registration online, eway bill registration, gst apply online, new gst registration, gst registration number, gst application, apply for gst number, registration under gst, register for gst number, gstin registration, register for gst online, compulsory registration under gst, gst no apply, gst registration charges, gst registration for proprietorship, register for hst number"
                robots="index,follow"

                og_url="https://starterscfo.com"
                og_type="website"
                og_title="Expert Guidance for Seamless GST Registration with Starters’ CFO"
                og_description="Starters' CFO offers businesses a complete GST registration service through  which businesses obtain a unique identification number for seamless tax filings."
                og_image="https://starterscfo.com/static/images/og/img5.avif"
                twitter_title="Expert Guidance for Seamless GST Registration with Starters’ CFO"
                twitter_card="summary_large_image"
                twitter_description="Starters' CFO offers businesses a complete GST registration service through  which businesses obtain a unique identification number for seamless tax filings."
                twitter_image="https://starterscfo.com/static/images/og/img5.avif"

                ></Meta>

                <Layout promobanner={true}>

                    <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert} product={'gst'} mobile={this.state.mobile}></PopConvert>
                    <ExitConvert></ExitConvert>

                    <h1 className="d-none">GST Registration</h1>
                    <h2 className="d-none">Do I need to register for GST?</h2>

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

         {/* Footer Text */}
        <div className="w-100 background-color__footer_text">
        <Container>
            <Row className="background-color__footer_text footer" style={{ paddingTop: '60px', paddingBottom: '10px' }}>
                <Col>
                    <h5 class="font__14 weight__600 mt-2 mb-2">Most Searched for Starters’ CFO </h5>
                    <p className='font__12'>GST Registration | Documents need in GST Registration | GSTIN | Benefits of GST Registration | gst registration| goods and services tax| gst details| gst number | gst details | gst website | gst filing | gst tax | gst services | gst registration online | gst online </p>

                    <h5 class="font__14 weight__600 mt-2 mb-2">GST Registration</h5>
                    <p className='font__12'>GST registration is a critical step for every business, and Starters' CFO is your trusted partner in this endeavor. Let us handle the complexities while you focus on growing your business. Contact Starters' CFO today to get started on your journey to GST compliance and financial success.</p>

                    <h5 className='font__14 weight__600 mt-2 mb-2'>Documents need in GST Registration</h5>
                    <p className='font__12'>It's important to note that the specific documents required and the application process can vary based on the country you are operating in. It's recommended to check the official GST website or consult with a tax professional in your country for the most accurate and up-to-date information regarding GST registration requirements</p>

                    <h5 className='font__14 weight__600 mt-2 mb-2'>GST Advisory</h5>
                    <p className='font__12'>Our team of seasoned professionals is committed to assisting your organization in optimizing GST compliance, minimizing risks, and maximizing savings. With our tailored solutions, you can focus on your core business while we ensure your GST matters are managed efficiently and effectively.</p>

                    <h5 className='font__14 weight__600 mt-2 mb-2'>Indirect Tax</h5>
                    <p className='font__12'>Indirect taxes are levied on the consumption or use of goods and services rather than on income or profits and our expert professionals Will help to reduce the same. Remember, success begins with the right choices. Choose Starters’ CFO today!</p>

                </Col>
            </Row>
        </Container>
        </div>

                </Layout>
            </>
        );
    }
}

export default GST;
