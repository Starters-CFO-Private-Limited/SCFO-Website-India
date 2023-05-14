import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PartnerLogos extends React.Component {
    render() {
        return (
            <>
                <Row style={{ marginTop: '50px' }}>
                    <Col>
                        <h3 className="text-center">We partner with India's best</h3>
                    </Col>
                </Row>
                <Row style={{ marginTop: '50px' }} className="align-items-center partner-set d-none d-md-flex">
                    <Col className="text-center">
                        <img src="/static/images/logos/logo_1.png" className="partner--logo"></img>
                    </Col>
                    <Col className="text-center">
                        <img src="/static/images/logos/logo_2.png" className="partner--logo" height="35px"></img>
                    </Col>
                    <Col className="text-center">
                        <img src="/static/images/logos/logo_3.png" className="partner--logo"></img>
                    </Col>
                    <Col className="text-center">
                        <img src="/static/images/logos/logo_7.jpg" className="partner--logo"></img>
                    </Col>
                    <Col className="text-center">
                        <img src="/static/images/logos/logo_5.png" className="partner--logo"></img>
                    </Col>
                    <Col className="text-center">
                        <img src="/static/images/logos/logo_9.png" className="partner--logo"></img>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center partner-set d-md-none -mobile">
                    <Col className="text-center">
                        <img src="/static/images/logos/logo_1.png" className="partner--logo"></img><br></br>
                        <img src="/static/images/logos/logo_3.png" className="partner--logo"></img><br></br>
                        <img src="/static/images/logos/logo_5.png" className="partner--logo"></img><br></br>
                    </Col>
                    <Col className="text-center">
                        <img src="/static/images/logos/logo_2.png" className="partner--logo" height="25px"></img><br></br>
                        <img src="/static/images/logos/logo_7.jpg" className="partner--logo"></img><br></br>
                        <img src="/static/images/logos/logo_9.png" className="partner--logo"></img><br></br>
                    </Col>
                </Row>

                <Row style={{ marginTop: '20px' }}></Row>
            </>
        )
    }
}

export default PartnerLogos;