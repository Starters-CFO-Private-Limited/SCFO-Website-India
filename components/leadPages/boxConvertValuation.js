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
                                    
                                    
                                        <>
                                        {/* <FormIframe 
                                        title={this.props.title}
                                        whatsapp="true"
                                        footerText="" />
   
                                       </> */}

                <Row style={{ marginBottom: '5px' }}>
                    <Col>
                    <h4 className="color__dark">{this.props.title} </h4>
                 
                       <p className="color__dark">Hear back in 24 hours, or <a href={`tel:${WHATSAPP_MESSAGE_NUMBER}`} className="color__dark font__15">Whatsapp {WHATSAPP_DISPLAY_NUMBER} now</a>.</p>
                       
                    </Col>
                </Row>
                <Row>
                <Col md={12}>
                  <iframe 
                        width="100%"
                        height="300" 
                        src="https://crm.starterscfo.com/forms/wtl/d3938263727cd88e397764e4c01c291a" 
                        frameborder="0"
                        sandbox="allow-top-navigation allow-forms allow-same-origin allow-scripts allow-popups"
                        allowfullscreen>
                    </iframe>	
                    </Col>
                </Row>
                
                  </>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}