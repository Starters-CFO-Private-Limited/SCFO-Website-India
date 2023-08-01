import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FormValidation } from 'calidation';
import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGE_NUMBER } from '../../constants';

class PopConvert extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            'buttonText': 'Submit',
            'convertSuccess': ''
        };
    }

    _handleClose(e) {
        e.preventDefault();
        this.props.onHide();
    }

    render() {

        const formConfig = {
            full_name: {
                isRequired: {
                    message: 'Full name is a required field.'
                },
            },
            mobile: {
                isRequired: {
                    message: 'Mobile is a required field.'
                },
                isExactLength: {
                    message: 'Mobile number must have exactly 10 digits.',
                    length: 10,
                },
                isRegexMatch: {
                    message: 'Mobile numbers can only contain digits.',
                    regex: /^\d{10}$/,
                }
            },
            email: {
                isRequired: {
                    message: 'Email is a required field.'
                },
                isEmail: { message: 'Please enter a valid e-mail address' },
            }
        };

        const onSubmit = async ({ fields, isValid }) => {
            if (isValid) {
                this.setState({ 'buttonText': 'Processing...' });
                const response = await fetch('/api/v1/leads/', {
                    'body': JSON.stringify({
                        "full_name": fields.full_name,
                        "email": fields.email,
                        "mobile": fields.mobile,
                        "product": document.getElementsByName("product")[0].value
                    }),
                    'method': 'POST',
                    'headers': {
                        "cache-control": "no-cache",
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })

                if (response.ok) {
                    gtag_report_conversion("LEAD_FORM", false);
                    window.setTimeout(() => {
                        window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_MESSAGE_NUMBER}&text=Hi%21%20I%20just%20submitted%20a%20request%20form%20on%20your%20website.%0d%0aI%20am%20interested%20in%20your%20product.&source=&data=`)
                    }, 1000)
                } else {
                    response.text().then(result => { console.log(result) });
                }

                console.log('test')
                this.setState({
                    'convertSuccess': 'x',
                })
            }
        };

        return (
            <>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    dialogClassName="pop-convert--modal"
                    backdrop="static"
                    backdropClassName="pop-convert--modal-backdrop"
                    centered
                >
                    <Modal.Body>
                     {/* <Row style={{ marginTop: '50px' }}></Row> */}
                        <div class="modal_header">
                                <button type="button" class="close" onClick={(e) => { this._handleClose(e) }} aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
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
                                                WhatsApp us at <a href={`https://api.whatsapp.com/send?phone={WHATSAPP_MESSAGE_NUMBER}&text=Hi%21%20I%20just%20submitted%20a%20request%20form%20on%20your%20website.%0d%0aI%20am%20interested%20in%20your%20product.&source=&data=`} target="_blank" rel="noreferrer"><i className="fab fa-whatsapp color__whatsapp"></i> {WHATSAPP_DISPLAY_NUMBER}</a>
                                                <br></br>
                                                Email us at info@starterscfo.in
                                                <br></br>
                                                Chat with us, look for chat bubble in the bottom right corner of the screen.
                                            </span>
                                        </p>
                                        <Button variant="primary" className="btn__primary btn-sm" onClick={(e) => { this._handleClose(e) }}>Continue browing</Button>
                                    </> : <>
                                        <FormValidation className="pop-convert--form" config={formConfig} onSubmit={onSubmit}>
                                            {({ errors, fields, submitted }) => (
                                                <>
                                                    <Fragment>
                                                        <Form.Group controlId="formBasicName">
                                                            <Form.Control type="text" placeholder="Full Name" required name="full_name" value={fields.full_name} onChange={() => { }} />
                                                            {submitted && errors.full_name && <small className="text-danger">{errors.full_name}</small>}
                                                        </Form.Group>

                                                        <Form.Group controlId="formBasicEmail">
                                                            <Form.Control type="email" placeholder="Email *" required name="email" value={fields.email} onChange={() => { }} />
                                                            {submitted && errors.email && <small className="text-danger">{errors.email}</small>}
                                                        </Form.Group>

                                                        <Form.Group controlId="formBasicMobile">
                                                            <Form.Control type="tel" placeholder="Mobile *" required name="mobile" value={fields.mobile} onChange={() => { }} maxLength={'10'} minLength={'10'} />
                                                            {submitted && errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                                                        </Form.Group>
                                                        <input name="product" value={this.props.product || "N/A"} onChange={() => { }} style={{ 'display': 'none' }}></input>
                                                    </Fragment>

                                                    <Button variant="primary" type="submit">
                                                        {this.state.buttonText}
                                                    </Button>
                                                </>
                                            )}
                                        </FormValidation>
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
