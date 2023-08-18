import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import { FormValidation } from 'calidation';
// import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGE_NUMBER } from '../../constants';

class PopConvert extends React.Component {

    // constructor(props, context) {
    //     super(props, context);

    //     this.state = {
    //         'buttonText': 'Submit',
    //         'convertSuccess': ''
    //     };
    // }

    _handleClose(e) {
        e.preventDefault();
        this.props.onHide();
    }

    render() {
        return (
            <>
                <Modal
                    {...this.props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    dialogClassName="pop-convert--modal"
                    backdrop="static"
                    backdropClassName="pop-convert--modal-backdrop"
                    centered
                >
                    <Modal.Body>
                     {/* <Row style={{ marginTop: '50px' }}></Row> */}
                        <div className="modal_header">
                                <Button type="button" className="close" onClick={(e) => { this._handleClose(e) }} aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </Button>
                        </div>
                        <Row className="d-flex justify-content-center align-items-center">
                            <Col md={{ 'span': '11' }} className="d-flex justify-content-center flex-column align-items-start">


                                <a href="" onClick={(e) => { this._handleClose(e) }}>
                                    <img src="/static/images/logos/scfo/no-cap.png" className="pop-convert--modal-logo"></img>
                                </a>

                                <br></br><br></br>
                                <p className="pop-convert--modal-title color__dark">
                                    Get started with India's fastest growing<br></br> finance organisation.
                                </p>
                                <span className="color__grey font__12">
                                    You run your business. We will do the bookkeeping. <br></br>India's first Virtual CFO Service for start-ups and SMEs.
                                </span>
                                <br></br><br></br>
                                {
                                     <>
                                        <iframe
                                            width="100%" 
                                            height="300"
                                            src="https://crm.starterscfo.com/forms/wtl/b56e9ff27f8b8b45c8be967db7edc920"
                                            frameborder="0"
                                            sandbox="allow-top-navigation allow-forms allow-same-origin allow-scripts allow-popups" 
                                            allowfullscreen>
                                        </iframe>	

                                        <br></br>
                                        <p className="color__light-grey font__10">
                                            By creating an account with Starter's CFO, you agree to our <a href="/terms-of-service">terms</a> and <a href="/privacy-policy">privacy policy</a>.
                                        </p>
                                    </>
                                }
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}

export default PopConvert;
