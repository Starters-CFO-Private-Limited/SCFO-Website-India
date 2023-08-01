import React from 'react';

import Layout from '../components/site/layout';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

import Meta from '../components/site/meta';

class ThankYou extends React.Component {

    render() {
        return (
            <>
                <Layout promobanner={true}>
                    <Meta title="Thank You"></Meta>
                   
                    <Row style={{ marginTop: '50px' }}></Row>
                    <Container>
                    <Row className="d-flex justify-content-center seoPage--content color__grey mt-5 mb-5">
                            <Col md={12} sm={12}>
                            <div className="mb-4 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-success bi bi-check-circle" width="75" height="75"
                            fill="currentColor"  viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path
                            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                            </div>
                            <div className="text-center">
                                <h1>Thank You !</h1>
                                <p>Thanks for contacting us! We will be in touch with you shortly.</p>

                                <Link href="/"><a><Button className="btn__success btn btn-success">Back Home</Button></a></Link>

                            </div>
                             <br></br>
                            </Col>
                        </Row>

                    {/* <Row className="d-flex justify-content-center seoPage--content color__grey mt-5 mb-5">
                    <div className="vh-100 d-flex justify-content-center align-items-center">
                        <div className="card col-md-4 bg-white shadow-md p-5">
                            
                    </div>
                    </div>
                    </Row> */}
                    </Container>
                </Layout>
            </>
        )
    }
}

export default ThankYou;
