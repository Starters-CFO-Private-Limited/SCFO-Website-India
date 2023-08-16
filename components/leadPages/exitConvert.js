import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import { FormValidation } from 'calidation';
// import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGE_NUMBER } from '../../constants';

class ExitConvert extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            'buttonText': 'Submit',
            'convertSuccess': '',
            'showExitConvert': false
        };
    }

    componentDidMount() {

        function addEvent(obj, evt, fn) {
            if (obj.addEventListener) {
                obj.addEventListener(evt, fn, false);
            }
            else if (obj.attachEvent) {
                obj.attachEvent("on" + evt, fn);
            }
        }

        addEvent(document, 'mouseout', (evt) => {
            if (evt.toElement == null && evt.relatedTarget == null && !Cookies.get("exitConvertDone")) {
                this.setState({
                    "showExitConvert": true
                })
                Cookies.set("exitConvertDone", true);
            }
        });
    }

    _handleClose(e) {
        e.preventDefault();
        this.setState({
            'showExitConvert': false
        })
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
                    id="exit-convert"
                    show={this.state.showExitConvert}
                    onHide={() => { this.setState({ 'showExitConvert': false }) }}
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
                                <p className="pop-convert--modal-title color__dark font__20">
                                    Not sure yet? Talk to us.
                                </p>
                                <span className="color__grey font__12">
                                    Get a free consultation with us. It's costs you nothing, and we can answer all your questions for you. <br></br>
                                    Our advisors are available 12 hours a day, 6 days a week.
                                </span>
                                <br></br>
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

export default ExitConvert;
