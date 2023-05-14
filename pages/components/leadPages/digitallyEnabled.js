import React from "react";
import Container from "scfonext/pages/components/site/container";
import Row from "scfonext/pages/components/site/row";
import Col from "scfonext/pages/components/site/col";
import Button from "scfonext/pages/components/site/button";

export default class DigitallyEnabled extends React.Component {

    render() {

        const {
            line_1,
            line_2,
            redirectLocation
        } = this.props;

        return (
            <div className="w-100" style={{ backgroundColor: '#f4f8fb' }}>
                <Container>
                    <Row style={{ height: '350px', marginTop: '50px', paddingTop: '50px' }}>

                        <Col className="text-center" md={{ 'span': '8', 'offset': '2' }}>
                            <h3 className="color__blue"><b>Digitally Enabled, Online Processes</b></h3>
                            <br></br>
                            <p className="color__grey">
                                {line_1 || "Starters' CFO differs from the competition in the simple online processes it has built to help you achieve your businsess accounting needs."}<br></br><br></br>
                                {line_2 || "You can stop struggling through lists of email attachments sent back and forth for ever! Our digital partners include Zoho Books, Tally, Quickbooks & Razorpay amongst others."}
                            </p>
                            <br></br>
                            <a href={redirectLocation || "/contact"} className="btn__transparent border-color__dark color__dark btn__secondary" size="lg">Learn more</a>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}