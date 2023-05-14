import React from 'react';

import Container from "scfonext/pages/components/site/container";
import Row from "scfonext/pages/components/site/row";
import ResponsiveFormV2 from "scfonext/pages/components/leadPages/v2/forms/responsiveFormV2";

class LineConvert extends React.Component {

    state = {
        'buttonText': 'Submit',
        'convertSuccess': false
    }

    componentDidMount() {
        const fullName = localStorage.getItem("LEAD_FULL_NAME");
        this.setState({ fullName })
    }

    render() {

        const {
            fullName
        } = this.state;

        const {
            className,
            title = fullName ? `${fullName}, Ready to get started?` : "Ready to get started?",
            subTitle = 'Hear back in 24 hours, or Whatsapp +91 81128 11268 now.',
            leadValue,
        } = this.props;

        return (
            <>
                <div className={"bg-slate-100 py-10" + " " + className}>
                    {
                        this.state.convertSuccess ? <>
                            {this.successElement()}
                        </> : <>
                            <Container>
                                <Row>
                                    <ResponsiveFormV2 title={title} subTitle={subTitle} product={'general'} wrapperClassName={'w-full'} leadValue={leadValue} />
                                </Row>
                            </Container>
                        </>
                    }
                </div>
            </>
        )
    }

}

export default LineConvert;
