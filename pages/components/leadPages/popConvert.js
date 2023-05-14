import React, { Fragment } from 'react';
import Button from "scfonext/pages/components/site/button";
import Container from "scfonext/pages/components/site/container";
import Row from "scfonext/pages/components/site/row";
import Col from "scfonext/pages/components/site/col";
import Input from "scfonext/pages/components/leadPages/v2/input";
import submitLead from "scfonext/utils/leads/submitLead";
import { FormValidation } from 'calidation';
import { WHATSAPP_DISPLAY_NUMBER, LEAD_FORM_CONFIG } from 'scfonext/constants';

export default class PopConvert extends React.Component {

    state = {
        'buttonText': 'Submit',
        'convertSuccess': false
    }

    successElement = () => {
        const {
            onHide
        } = this.props;

        return (
            <div className="w-full">
                <p className="text-slate-700">
                    <Row className="w-full">
                        <Col className="w-full">
                            <h4 className="text-navy text-md">WhatsApp us directly at</h4>
                            <span className="text-scfo text-3xl mt-2"><i className="fab fa-whatsapp"></i>&nbsp; {WHATSAPP_DISPLAY_NUMBER}</span>
                            <br></br>
                            <br></br>
                            We've received your message. We can't wait to get started.<br></br>
                            We will reach out in the next 30 - 90 minutes. You can call us if you need a faster response.
                            <br></br><br></br>
                            <span className="color__grey">
                                WhatsApp us at <a href={`https://api.whatsapp.com/send?phone={WHATSAPP_MESSAGE_NUMBER}&text=Hi%21%20I%20just%20submitted%20a%20request%20form%20on%20your%20website.%0d%0aI%20am%20interested%20in%20your%20product.&source=&data=`} target="_blank" rel="noreferrer"><i className="fab fa-whatsapp color__whatsapp"></i> {WHATSAPP_DISPLAY_NUMBER}</a>
                                <br></br>
                                Email us at info@starterscfo.in
                                <br></br>
                                Chat with us, look for chat bubble in the bottom right corner of the screen.
                            </span>
                        </Col>
                    </Row>
                </p>
                <Button method={onHide} className="mt-10">Continue browing</Button>
            </div>
        )
    }

    render() {

        const {
            title,
            description,
            onHide,
            show
        } = this.props;

        const onSubmit = async ({ fields, isValid }) => {
            if (isValid) {
                this.setState({ 'buttonText': 'Processing...' });

                submitLead(fields, localStorage.getItem("product") || "general");

                this.setState({
                    'convertSuccess': true,
                })
            }
        };

        if (!show) {
            return (
                <></>
            )
        }

        return (
            <>
                <div
                    className="h-screen w-screen z-50 bg-white"
                >
                    <Container>
                        <Row className="flex w-full items-center justify-center mt-10">
                            <Col className="w-full items-start justify-center">

                                <a href="" onClick={(e) => { this._handleClose(e) }}>
                                    <img src="/static/images/logos/scfo/no-cap.png" className="h-14"></img>
                                </a>

                                {
                                    !this.state.convertSuccess ?
                                        <>
                                            <br></br><br></br>
                                            <p className="text-navy text-lg font-semibold">
                                                {title || "No title"}
                                            </p>
                                            <span className="text-sm text-slate-600 mt-3">
                                                {description || "No description"}
                                            </span>
                                            <br></br><br></br>
                                        </> :
                                        <></>
                                }
                                {
                                    this.state.convertSuccess ? <>
                                        <div className='mt-10'>
                                            {this.successElement()}
                                        </div>
                                    </> : <>
                                        <FormValidation className="w-full" config={LEAD_FORM_CONFIG} onSubmit={onSubmit}>
                                            {({ errors, fields, submitted }) => (
                                                <>
                                                    <React.Fragment>
                                                        <Row className="w-full mb-2 mt-2">
                                                            <Col className="w-full">
                                                                <Input type="text" placeholder="Full Name" name="full_name" value={fields.full_name} submitted={submitted} error={errors.full_name}></Input>
                                                            </Col>
                                                        </Row>
                                                        <Row className="w-full mb-2 mt-2">
                                                            <Col className="w-full">
                                                                <Input type="email" placeholder="Email" name="email" value={fields.email} submitted={submitted} error={errors.email}></Input>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col className="w-full">
                                                                <Row>
                                                                    <Input type="text" placeholder="Email" name="country_code" value={"+91"} disabled={true} className="w-16 mr-2"></Input>
                                                                    <Col className="w-full">
                                                                        <Input type="tel" placeholder="Mobile Number" name="mobile" value={fields.mobile} submitted={submitted} error={errors.mobile} maxLength={'10'} minLength={'10'}></Input>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                        <Row className="w-full mb-2 mt-2">
                                                            <Col className="w-full">
                                                                <Button className="h-14" type="submit">
                                                                    {this.state.buttonText}
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                        <input name="product" defaultValue={this.props.product} onChange={() => { }} style={{ 'display': 'none' }}></input>
                                                    </React.Fragment>
                                                    <p className="text-slate-500 text-xs mt-5">
                                                        By creating an account with Starter's CFO, you agree to our <a href="/terms-of-service" className="text-slate-700">terms</a> and <a href="" className="text-slate-700">privacy policy</a>.
                                                    </p>
                                                </>
                                            )}
                                        </FormValidation>
                                        <Button method={onHide} style="secondary" className="mt-10">Not Right Now</Button>
                                    </>
                                }
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }

}