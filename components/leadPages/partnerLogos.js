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
                        <img src="/static/images/logos/arthocure.png" alt='Arthocure' className="partner--logo"></img>
                    </Col>
                    <Col className="text-center">
                        <img src="/static/images/logos/bizztor.png" alt='Bizztor' className="partner--logo" height="35px"></img>
                    </Col>
                    <Col className="text-center">
                        <img src="/static/images/logos/india-accelerator.png" alt='india accelerator' className="partner--logo"></img>
                    </Col>
                    <Col className="text-center">
                        <img src="/static/images/logos/saadi.jpg" alt='Saadi.com' className="partner--logo"></img>
                    </Col>
                    <Col className="text-center">
                        <img src="/static/images/logos/IIT-Madras.png" alt='IIT Madras' className="partner--logo"></img>
                    </Col>
                    <Col className="text-center">
                        <img src="/static/images/logos/instaspaces.png" alt='Instaspaces' className="partner--logo"></img>
                    </Col>

                </Row>
                <Row className="d-flex align-items-center partner-set d-md-none -mobile">
                    <Col className="text-center">
                        <img src="/static/images/logos/arthocure.png" alt='arthocure' className="partner--logo"></img><br></br>
                        <img src="/static/images/logos/india-accelerator.png" alt='India accelerator' className="partner--logo"></img><br></br>
                        <img src="/static/images/logos/IIT-Madras.png" alt='IIT Madras' className="partner--logo"></img><br></br>
                    </Col>
                    <Col className="text-center">
                        <img src="/static/images/logos/bizztor.png" alt='Bizztor' className="partner--logo" height="25px"></img><br></br>
                        <img src="/static/images/logos/saadi.jpg" alt='Saadi.com' className="partner--logo"></img><br></br>
                        <img src="/static/images/logos/instaspaces.png" alt='Instaspaces' className="partner--logo"></img><br></br>
                    </Col>
                </Row>

                <Row style={{ marginTop: '20px' }}></Row>
            </>
        )
    }
}

export default PartnerLogos;