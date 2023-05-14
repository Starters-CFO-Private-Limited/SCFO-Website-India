import React from "react";

import Container from "scfonext/pages/components/site/container";
import Row from "scfonext/pages/components/site/row";
import Col from "scfonext/pages/components/site/col";

export default class Partners extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row className="items-center justify-center mt-10 mb-3">
                        <Col className="items-center justify-center text-2xl font-medium">
                            <h2>We partner with India's best</h2>
                        </Col>
                    </Row>
                    <Row className="grid grid-cols-2 md:flex md:flex-row md:justify-between items-center mt-10">
                        <a href="" target="_blank" className="flex items-center justify-center">
                            <img src="/static/images/logos/logo_1.png" className="mt-2 md:mt-0 h-14 grayscale cursor-pointer"></img>
                        </a>
                        <a href="" target="_blank" className="flex items-center justify-center">
                            <img src="/static/images/logos/logo_2.png" className="mt-2 md:mt-0 h-10 grayscale cursor-pointer"></img>
                        </a>
                        <a href="" target="_blank" className="flex items-center justify-center">
                            <img src="/static/images/logos/logo_3.png" className="mt-2 md:mt-0 h-14 grayscale cursor-pointer"></img>
                        </a>
                        <a href="" target="_blank" className="flex items-center justify-center">
                            <img src="/static/images/logos/logo_7.jpg" className="mt-2 md:mt-0 h-14 grayscale cursor-pointer"></img>
                        </a>
                        <a href="" target="_blank" className="flex items-center justify-center">
                            <img src="/static/images/logos/logo_5.png" className="mt-2 md:mt-0 h-14 grayscale cursor-pointer"></img>
                        </a >
                        <a href="" target="_blank" className="flex items-center justify-center">
                            <img src="/static/images/logos/logo_9.png" className="mt-2 md:mt-0 h-14 grayscale cursor-pointer"></img>
                        </a >
                    </Row >
                </Container >
            </React.Fragment >
        )
    }
}