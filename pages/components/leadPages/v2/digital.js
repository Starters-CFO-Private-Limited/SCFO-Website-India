import React from "react";

import Container from "scfonext/pages/components/site/container";
import Row from "scfonext/pages/components/site/row";
import Col from "scfonext/pages/components/site/col";
import Button from "scfonext/pages/components/site/button";

export default class Digital extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-300 py-10 my-10">
                    <Container>
                        <Row className="items-center justify-center mb-3 ">
                            <Col className="items-center justify-center text-2xl font-medium">
                                <h2>Digitally Enabled, Online Process</h2>
                            </Col>
                        </Row>
                        <Row className="justify-center items-center mt-10">
                            <p className="text-slate-600 text-center w-full md:w-1/2">
                                Starters' CFO differs from the competition in the simple online processes it has built to help you achieve your businsess accounting needs.
                                <br />
                                <br />
                                You can stop struggling through lists of email attachments sent back and forth for ever! Our digital partners include Zoho Books, Tally, Quickbooks & Razorpay amongst others.
                                <br></br>
                                <br></br>
                                <Button>Get Started</Button>
                            </p>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}