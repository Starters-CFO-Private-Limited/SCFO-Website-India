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
                },
            },
            email: {
                isRequired: {
                    message: 'Email is a required field.'
                },
                isEmail: { message: 'Please enter a valid e-mail address' },
            },
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

                this.setState({
                    'convertSuccess': 'x',
                })
            }
        };

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
                        <FormValidation className="pop-convert--form" config={formConfig} onSubmit={onSubmit}>
                            {({ errors, fields, submitted }) => (
                                <>
                                    <Fragment>
                                        <Row style={{ marginBottom: '5px' }}>
                                            <Col>
                                                <h4 className="color__dark">{title}</h4>
                                                <p className="color__dark">{subTitle}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group controlId="formBasicName">
                                                    <Form.Control type="text" placeholder="Full Name" required name="full_name" value={fields.full_name} onChange={() => { }} />
                                                    {submitted && errors.full_name && <small className="text-danger">{errors.full_name}</small>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Control type="email" placeholder="Email *" required name="email" value={fields.email} onChange={() => { }} />
                                                    {submitted && errors.email && <small className="text-danger">{errors.email}</small>}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={1} sm={2} xs={2} style={{ paddingRight: '0px', marginRight: '0px' }}>
                                                <Form.Group controlId="formMobile">
                                                    <Form.Control type="text" value="+91" disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col md={9} sm={10} xs={10}>
                                                <Form.Group controlId="formMobile">
                                                    <Form.Control type="tel" placeholder="Mobile Number *" required name="mobile" value={fields.mobile} onChange={() => { }} maxLength={'10'} minLength={'10'} />
                                                    {submitted && errors.full_name && <small className="text-danger">{errors.mobile}</small>}
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Button variant="primary" type="submit">
                                                    {this.state.buttonText}
                                                </Button>
                                            </Col>
                                        </Row>
                                        <input name="product" value={this.props.product} onChange={() => { }} style={{ 'display': 'none' }}></input>
                                    </Fragment>
                                    <p className="color__light-grey font__10">
                                        By creating an account with Starter's CFO, you agree to our <a href="/terms-of-service">terms</a> and <a href="">privacy policy</a>.
                                    </p>
                                </>
                            )}
                        </FormValidation>
                    </>
                }
            </>
        )
    }

}

export default LineConvert;
