import React from "react";

export default class Modal extends React.Component {

    render() {
        const {
            action,
            method
        } = this.props;

        return (
            <React.Fragment>
                <form className={'flex flex-col' + ' ' + this.props.className} action={action} method={method}>
                    {this.props.children}
                </form>
            </React.Fragment>
        )
    }
}