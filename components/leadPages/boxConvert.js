import React, { Fragment } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormValidation } from 'calidation';
import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGE_NUMBER } from "../../constants";
import FormIframe from './formIframe';


export default class BoxConvert extends React.Component {

    state = {
        'showPopConvert': false,
        'buttonText': 'Submit',
        'convertSuccess': ''
    }

    
    render() {
        const {
            title
        } = this.props;

        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={12} md={12}>
                            <Card>
                                <Card.Body style={{ 'backgroundColor': '#f3f8fb' }}>
                                    {
                                        this.state.convertSuccess ? <>
                                            <p>
                                                <Row className="text-center">
                                                    <Col>
                                                        <h4 className="color__dark font__15">WhatsApp us directly at</h4>
                                                        <span className="color__scfo font__30 mobile_font__15"><i className="fab fa-whatsapp"></i>&nbsp; {WHATSAPP_DISPLAY_NUMBER}</span>
                                                        <br></br>
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                We've received your message. We can't wait to get started!
                                                We will reach out in the next 30 - 90 minutes. You can call us if you need a faster response.
                                                <br></br><br></br>
                                                <span className="color__grey">
                                                    WhatsApp us at <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_MESSAGE_NUMBER}&text=Hi%21%20I%20just%20submitted%20a%20request%20form%20on%20your%20website.%0d%0aI%20am%20interested%20in%20your%20product.&source=&data=`} target="_blank" rel="noreferrer"><i className="fab fa-whatsapp color__whatsapp"></i>{WHATSAPP_DISPLAY_NUMBER}</a>
                                                    <br></br>
                                                    Email us at info@starterscfo.in
                                                    <br></br>
                                                    Chat with us, look for chat bubble in the bottom right corner of the screen.
                                                </span>
                                            </p>
                                        </> :
                                        <>
                                        <FormIframe 
                                        title={this.props.title}
                                        whatsapp="true"
                                        footerText="" />
   
                                       </>
                                            
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}