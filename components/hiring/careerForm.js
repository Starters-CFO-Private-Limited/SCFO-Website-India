import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FormValidation } from 'calidation';

class CareerForm extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            'buttonText': 'Submit',
            'convertSuccess': '',
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
                isEmail: { message: 'Please enter a valid e-mail address.' },
            },
            myfile: {
                isRequired: {
                    message: 'Email is a required field.'
                },
                ismyfile: { message: 'Please select a file. ' },
            }
        };

        const onSubmit = async ({ fields, isValid }) => {
            if (isValid) {
                this.setState({ 'buttonText': 'Processing...' });
                const response = await fetch('/api/v1/career_leads/', {
                    'body': JSON.stringify({
                        "full_name": fields.full_name,
                        "email": fields.email,
                        "mobile": fields.mobile,
                        "resume": fields.myfile,
                        "product": document.getElementsByName("product")[0].value
                    }),
                    'method': 'POST',
                    'headers': {
                        "cache-control": "no-cache",
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                console.log(response);

                if (response.ok) {

                    this.setState({
                        'convertSuccess': 'x',
                    })

                } else {
                    response.text().then(result => { console.log(result) });
                }

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
                        <a onClick={(e) => { this._handleClose(e) }}><i className="fa fa-times float-right color__grey hover-ponter"></i></a>
                        {this.state.convertSuccess === "" ?
                            <>
                                <Row style={{ marginTop: '50px' }}></Row>
                                <Row className="d-flex justify-content-center align-items-center">
                                    <Col md={{ 'span': '5' }} className="d-flex justify-content-center flex-column align-items-start">
                                        <FormValidation className="pop-convert--form" config={formConfig} onSubmit={onSubmit}>
                                            {({ errors, fields, submitted }) => (
                                                <>
                                                    <Fragment>
                                                        <Row style={{ marginBottom: '5px' }}>
                                                            <Col>
                                                                <a href="" onClick={(e) => { this._handleClose(e) }}>
                                                                    <img src="/static/images/logos/scfo/scfo-logo.png" alt='starters scfo' className="pop-convert--modal-logo"></img>
                                                                </a>
                                                                <br></br><br></br>
                                                                <p className="pop-convert--modal-title color__dark">
                                                                    Get employment with in SCFO India's fastest growing<br></br> finance organisation.
                                                                </p>
                                                                <span className="color__grey font__12">
                                                                    You fill your Details. We will do the bookkeeping. <br></br>India's first Virtual CFO Service for start-ups and SMEs.
                                                                </span>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={12}>
                                                                <Form.Group controlId="formBasicName">
                                                                    <Form.Control type="text" placeholder="Full Name" required name="full_name" value={fields.full_name} onChange={() => { }} />
                                                                    {submitted && errors.full_name && <small className="text-danger">{errors.full_name}</small>}
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md={12}>
                                                                <Form.Group controlId="formBasicEmail">
                                                                    <Form.Control type="email" placeholder="Email *" required name="email" value={fields.email} onChange={() => { }} />
                                                                    {submitted && errors.email && <small className="text-danger">{errors.email}</small>}
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={2} sm={2} xs={3} style={{ paddingRight: '0px', marginRight: '0px' }}>
                                                                <Form.Group controlId="formMobile">
                                                                    <Form.Control type="text" value="+91" disabled />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md={10} sm={10} xs={9}>
                                                                <Form.Group controlId="formMobile">
                                                                    <Form.Control type="tel" placeholder="Mobile Number *" required name="mobile" value={fields.mobile} onChange={() => { }} maxLength={'10'} minLength={'10'} />
                                                                    {submitted && errors.full_name && <small className="text-danger">{errors.mobile}</small>}
                                                                </Form.Group>
                                                            </Col>
                                                            <Col>
                                                                {/* <div className="upload-btn-wrapper"> */}
                                                                {/* <button className="btn">Upload file</button>  */}
                                                                <input type="file" name="myfile" value={fields.myfile} onChange={() => { }} />
                                                                {/* </div> */}
                                                            </Col>
                                                        </Row>
                                                        <Row>
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
                                    </Col>
                                </Row>
                            </>
                            :
                            <Row className="d-flex height__100 justify-content-center">
                                <Col className="text-center align-self-center">
                                    <a href="" onClick={(e) => { this._handleClose(e) }}>
                                        <i className="fa fa-check-circle fa-5x text-success"></i>
                                    </a>
                                    <p className="font-weight-bold font__30 mb-0 mt-3">Your form has been submitted</p>
                                    <p className="font__20">Please wait for the Interview Call.</p>
                                </Col>
                            </Row>
                        }
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}

export default CareerForm;