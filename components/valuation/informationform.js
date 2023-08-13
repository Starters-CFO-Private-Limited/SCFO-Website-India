import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class INFORMATIONFORM extends React.Component {

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
            title = 'Get the Information you need',
            subTitle = 'Round-the-clock service o whatsapp us at +9110001010 get solutions to your queries,fell free to ask.',
        } = this.props;



        return (
             <>
 <div className='pop-convert--form'>
    <Fragment className="">
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
                                        src="https://crm.starterscfo.com/forms/wtl/b56e9ff27f8b8b45c8be967db7edc920" 
                                        frameBorder="0" 
                                        sandbox="allow-top-navigation allow-forms allow-same-origin allow-popups" 
                                        allowFullScreen>
                                        </iframe>
                                    </Col>
                                    
                                </Row>
                           
                            </Fragment>
                            </div>
        

                {/* <FormValidation className="pop-convert--form" config={formConfig} onSubmit={onSubmit}>
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
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Email *" required name="email" value={fields.email} onChange={() => { }} />
                                            {submitted && errors.email && <small className="text-danger">{errors.email}</small>}
                                        </Form.Group>
                                    </Col>
                                    <Col md={1} sm={2} xs={2} style={{ paddingRight: '0px', marginRight: '0px' }}>
                                        <Form.Group controlId="formMobile">
                                            <Form.Control className='countcode' type="text" value="+91" disabled />
                                        </Form.Group>
                                    </Col>
                                    <Col md={5} sm={10} xs={10}>
                                        <Form.Group controlId="formMobile">
                                            <Form.Control type="tel" placeholder="Mobile Number *" required name="mobile" value={fields.mobile} onChange={() => { }} maxLength={'10'} minLength={'10'} />
                                            {submitted && errors.full_name && <small className="text-danger">{errors.mobile}</small>}
                                        </Form.Group>
                                    </Col>
                                    
                                </Row>
                                <Row>
                                <Col md={6}>
                                        <Form.Group controlId="formBasicName">
                                            <Form.Control type="text" placeholder="Name of organization" required name="full_org" value={fields.full_org} onChange={() => { }} />
                                            {submitted && errors.full_name && <small className="text-danger">{errors.full_name}</small>}
                                        </Form.Group>
                                    </Col>
                                <Col md={3}>
                                        <Form.Group controlId="formBasicName">
                                            <Form.Control type="text" placeholder="First Name" required name="first_name" value={fields.first_name} onChange={() => { }} />
                                            {submitted && errors.full_name && <small className="text-danger">{errors.first_name}</small>}
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group controlId="formBasicName">
                                            <Form.Control type="text" placeholder="Last Name" required name="last_name" value={fields.last_name} onChange={() => { }} />
                                            {submitted && errors.last_name && <small className="text-danger">{errors.last_name}</small>}
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group controlId="formBasicName">
                                            <Form.Control type="text" placeholder="Pose your query" required name="query" value={fields.query} onChange={() => { }} />
                                            {submitted && errors.last_name && <small className="text-danger">{errors.query}</small>}
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
                            
                        </>
                    
                </FormValidation> */}
            </>
        
        )
    }

}

export default INFORMATIONFORM;