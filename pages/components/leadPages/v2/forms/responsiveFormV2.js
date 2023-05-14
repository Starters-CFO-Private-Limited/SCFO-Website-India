import React from 'react';
import Button from "scfonext/pages/components/site/button";
import Input from "scfonext/pages/components/leadPages/v2/input";
import Row from "scfonext/pages/components/site/row";
import Col from "scfonext/pages/components/site/col";
import submitLead from "scfonext/utils/leads/submitLead";
import { FormValidation } from 'calidation';
import { WHATSAPP_MESSAGE_NUMBER, WHATSAPP_DISPLAY_NUMBER, LEAD_FORM_CONFIG } from 'scfonext/constants';

class ResponseFormV2 extends React.Component {

    state = {
        buttonText: 'Get Started',
    }

    onSubmit = async ({ fields, isValid }) => {
        const {
            product,
            leadValue,
        } = this.props;

        if (isValid) {
            this.setState({ 'buttonText': 'Processing...' });

            submitLead(fields, product, leadValue);

            this.setState({
                'convertSuccess': true,
            })
        }
    };

    successElement = () => {
        return (
            <div className="w-full items-center justify-center">
                <p className="text-slate-700">
                    <Row className="text-center w-full items-center justify-center">
                        <Col className="w-full items-center justify-center">
                            <h4 className="text-navy text-md">WhatsApp us directly at</h4>
                            <a href="#" onClick={() => { navigateToWhatsapp() }} className="text-scfo text-3xl mt-2"><i className="fab fa-whatsapp"></i>&nbsp; {WHATSAPP_DISPLAY_NUMBER}</a>
                            <br></br>
                            <br></br>
                            We've received your message. We can't wait to get started.
                            We will reach out in the next 30 - 90 minutes. You can call us if you need a faster response.
                            <br></br><br></br>
                            <span className="color__grey">
                                WhatsApp us at <a href="#" onClick={() => { navigateToWhatsapp() }} target="_blank" rel="noreferrer"><i className="fab fa-whatsapp color__whatsapp"></i> {WHATSAPP_DISPLAY_NUMBER}</a>
                                <br></br>
                                Email us at <a href="mailto:info@starterscfo.in">info@starterscfo.in</a>
                                <br></br>
                                Chat with us, look for chat bubble in the bottom right corner of the screen.
                            </span>
                        </Col>
                    </Row>
                </p>
            </div>
        )
    }

    form = () => {
        const {
            title,
            subTitle,
            direction,
        } = this.props;

        const isVertical = direction === 'vertical';

        return (
            <FormValidation config={LEAD_FORM_CONFIG} onSubmit={this.onSubmit} className="w-full">
                {({ errors, fields, submitted }) => (
                    <>
                        <React.Fragment>
                            <Row className="mb-2 w-full">
                                <Col>
                                    <h4 className="text-navy text-2xl">{title}</h4>
                                    <p className="text-navy">{subTitle}</p>
                                </Col>
                            </Row>
                            <Row className={`w-full mb-2 mt-2 ${isVertical ? 'flex-col space-y-2' : 'flex-col md:flex-row'}`}>
                                <Col className={`w-full mr-2 ${isVertical ? '' : 'md:w-1/2'}`}>
                                    <Input type="text" placeholder="Full Name" name="full_name" value={fields.full_name} submitted={submitted} error={errors.full_name}></Input>
                                </Col>
                                <Col className={`mt-2 md:mt-0 w-full ${isVertical ? '' : 'md:w-1/2'}`}>
                                    <Input type="email" placeholder="Email" name="email" value={fields.email} submitted={submitted} error={errors.email}></Input>
                                </Col>
                            </Row>
                            <Row className="flex-col md:flex-row">
                                <Col className="w-full md:w-4/5 mr-2">
                                    <Row>
                                        <Input type="text" placeholder="Email" name="country_code" value={"+91"} disabled={true} className="w-16 mr-2"></Input>
                                        <Col className="w-full">
                                            <Input type="tel" placeholder="Mobile Number" name="mobile" value={fields.mobile} submitted={submitted} error={errors.mobile} maxLength={'10'} minLength={'10'}></Input>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="w-full md:w-1/5 mt-2 md:mt-0">
                                    <Button className="h-14" type="submit">
                                        {this.state.buttonText}
                                    </Button>
                                </Col>
                            </Row>
                        </React.Fragment>
                        <p className="text-slate-500 text-xs mt-5">
                            By creating an account with Starter's CFO, you agree to our <a href="/terms-of-service" className="text-slate-700">terms</a> and <a href="" className="text-slate-700">privacy policy</a>.
                        </p>
                    </>
                )}
            </FormValidation>
        )
    }

    render() {

        const {
            wrapperClassName
        } = this.props;

        return (
            <>
                <div className={wrapperClassName}>
                    {
                        this.state.convertSuccess ? <>
                            {this.successElement()}
                        </> : <>
                            {this.form()}
                        </>
                    }
                </div>
            </>
        )
    }
}

export default ResponseFormV2;