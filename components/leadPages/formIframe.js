import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGE_NUMBER } from "../../constants";

class FormConvert extends React.Component {

    render() {

        const {
            title = "Consult with us for free",
            footerText =false,
            whatsapp=false,
        } = this.props;

        return (
            <>
                <Fragment>
                <Row style={{ marginBottom: '5px' }}>
                    <Col>
                    {/* Request Call Back */}
                    <h4 className="color__dark">{title} </h4>
                    {
                       whatsapp?
                       <p className="color__dark">Hear back in 24 hours, or <a href={`tel:${WHATSAPP_MESSAGE_NUMBER}`} className="color__dark font__15">Whatsapp {WHATSAPP_DISPLAY_NUMBER} now</a>.</p>
                        :''
                    }
                    </Col>
                </Row>
                <Row>
                <Col md={12}>
                  
                    <iframe
                        width="100%" 
                        height="300"
                        src="https://crm.starterscfo.com/forms/wtl/b56e9ff27f8b8b45c8be967db7edc920"
                        frameborder="0"
                        sandbox="allow-top-navigation allow-forms allow-same-origin allow-scripts allow-popups" 
                        allowfullscreen>
                    </iframe>	
                    </Col>
                </Row>
                </Fragment>
                {
                footerText?
                <p className="color__light-grey font__10">
                By creating an account with Starter's CFO, you agree to our <a href="">terms</a> and <a href="">privacy policy</a>.
                </p>
                :''
                }
                
            </>
        )
    }

}

export default FormConvert;
