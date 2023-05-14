import React from "react";

export default class Container extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className={'container mx-auto' + ' ' + this.props.className}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}