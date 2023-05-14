import React from "react";

export default class Row extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className={'flex flex-row' + ' ' + this.props.className}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}