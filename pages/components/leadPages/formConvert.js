import React, { Fragment } from 'react';
import Button from "scfonext/pages/components/site/button";
import Form from "scfonext/pages/components/site/form";
import { FormValidation } from 'calidation';
import { WHATSAPP_DISPLAY_NUMBER } from 'scfonext/constants';

class FormConvert extends React.Component {

    state = {
        'buttonText': 'Submit',
        'convertSuccess': ''
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
            const {
                leadValue = false,
            } = this.props;

            if (isValid) {
                this.setState({ 'buttonText': 'Processing...' });
                const response = await fetch('/api/v1/leads/', {
                    'body': JSON.stringify({
                        "full_name": fields.full_name,
                        "email": fields.email,
                        "mobile": fields.mobile
                    }),
                    'method': 'POST',
                    'headers': {
                        "cache-control": "no-cache",
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })

                if (response.ok) {
                    gtag_report_conversion("LEAD_FORM", leadValue);
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
                                    <span className="color__scfo font__20 mobile_font__15"><i className="fab fa-whatsapp"></i>&nbsp; {WHATSAPP_DISPLAY_NUMBER}</span>
                                    <br></br>
                                </Col>
                            </Row>
                            <br></br>
                            We've received your message. We can't wait to get started.
                            We will reach out in the next 30 - 90 minutes. You can call us if you need a faster response.
                            <br></br><br></br>
                            <span className="color__grey">
                                WhatsApp us at <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_MESSAGE_NUMBER}&text=Hi%21%20I%20just%20submitted%20a%20request%20form%20on%20your%20website.%0d%0aI%20am%20interested%20in%20your%20product.&source=&data=`} target="_blank" rel="noreferrer"><i className="fab fa-whatsapp color__whatsapp"></i> {WHATSAPP_DISPLAY_NUMBER}</a>
                                <br></br>
                                Email us at info@starterscfo.in
                                <br></br>
                                Chat with us, look for chat bubble in the bottom right corner of the screen.
                            </span>
                        </p>
                        <br></br><br></br>
                    </> : <>
                        <FormValidation className="pop-convert--form" config={formConfig} onSubmit={onSubmit}>
                            {({ errors, fields, submitted }) => (
                                <>
                                    <img src="/static/images/banner/banner_1.png" className="seoPage--image"></img>

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
                                    </Fragment>

                                    <Button variant="primary" type="submit">
                                        {this.state.buttonText}
                                    </Button>

                                    <br></br>
                                    <p className="color__light-grey font__10">
                                        By creating an account with Starter's CFO, you agree to our <a href="/terms-of-service">terms</a> and <a href="">privacy policy</a>.
                                    </p>
                                </>
                            )}
                        </FormValidation>
                        <br></br>
                    </>
                }
            </>
        )
    }

}

export default FormConvert;
