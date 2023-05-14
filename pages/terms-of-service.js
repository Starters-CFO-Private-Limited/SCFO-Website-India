import React from 'react';

import Layout from 'scfonext/pages/components/site/layout';
import Col from "scfonext/pages/components/site/col";
import Row from "scfonext/pages/components/site/row";
import Container from "scfonext/pages/components/site/container";

import Meta from 'scfonext/pages/components/site/meta';

class TermsOfService extends React.Component {

    render() {
        return (
            <>
                <Layout promobanner={true}>
                    <Meta title="Terms of service"></Meta>
                    <Row>
                        <Col>
                            <div className="seoPage--header d-flex justify-content-center">
                                <p>Terms of Service</p>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '50px' }}></Row>
                    <Container>
                        <Row className="d-flex justify-content-center seoPage--content color__grey mt-5 mb-5">
                            <Col md={12} sm={12}>
                                This page will be published soon.
                                <br></br>
                                Terms of Service is available over email after engagement with clients.
                                <br></br>
                            </Col>
                        </Row>
                    </Container>
                </Layout>
            </>
        )
    }
}

export default TermsOfService;
