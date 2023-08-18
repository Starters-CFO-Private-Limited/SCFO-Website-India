import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormValidation } from 'calidation';
import { WHATSAPP_MESSAGE_NUMBER, WHATSAPP_DISPLAY_NUMBER } from '../../constants';



class LineConvert extends React.Component {

    state = {
        'buttonText': 'Submit',
        'convertSuccess': ''
    }

    _handleClose = (e) => {
        e.preventDefault();
        this.props.onHide();
    }

    render() {

        const {
            title = 'Ready to get started?',
            subTitle = 'Hear back in 24 hours, or Whatsapp +91 81128 11268 now.',
        } = this.props;

    
        return (
            <>
                {
                    this.state.convertSuccess ? <>
                        <p className="color__grey">
                            <Row className="text-center">
                                <Col>
                                    <h4 className="color__dark font__15">WhatsApp us directly at</h4>
                                    <span className="color__scfo font__30 mobile_font__15"><i className="fab fa-whatsapp"></i>&nbsp; {WHATSAPP_DISPLAY_NUMBER}</span>
                                    <br></br>
                                </Col>
                            </Row>
                            <br></br>
                            We've received your message. We can't wait to get started.
                            We will reach out in the next 30 - 90 minutes. You can call us if you need a faster response.
                            <br></br><br></br>
                            <span className="color__grey">
                                WhatsApp us at <a href={`https://api.whatsapp.com/send?phone={WHATSAPP_MESSAGE_NUMBER}&text=Hi%21%20I%20just%20submitted%20a%20request%20form%20on%20your%20website.%0d%0aI%20am%20interested%20in%20your%20product.&source=&data=`} target="_blank" rel="noreferrer"><i className="fab fa-whatsapp color__whatsapp"></i> {WHATSAPP_DISPLAY_NUMBER}</a>
                                <br></br>
                                Email us at info@starterscfo.in
                                <br></br>
                                Chat with us, look for chat bubble in the bottom right corner of the screen.
                            </span>
                        </p>
                    </> : <>
                        <Fragment>
                        <Row style={{ marginBottom: '5px' }}>
                            <Col>
                                <h4 className="color__dark">{title}</h4>
                                <p className="color__dark">{subTitle}</p>
                            </Col>
                        </Row> 
                         <Row>
                         <Col>
                         <iframe 
                                width="100%"
                                height="300" 
                                src="https://crm.starterscfo.com/forms/wtl/d3938263727cd88e397764e4c01c291a" 
                                frameborder="0" sandbox="allow-top-navigation allow-forms allow-same-origin allow-scripts allow-popups"
                                allowfullscreen>
                            </iframe>
                         </Col>
                         </Row> 

                        </Fragment>
                        <p className="color__light-grey font__10">
                            By creating an account with Starter's CFO, you agree to our <a href="/terms-of-service">terms</a> and <a href="">privacy policy</a>.
                        </p>
                        

                    </>
                }
            </>
        )
    }

}

export default LineConvert;
