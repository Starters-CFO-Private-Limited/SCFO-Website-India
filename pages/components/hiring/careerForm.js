import React, { Fragment } from 'react';

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
        return (
            <></>
        )
    }

}

export default CareerForm;