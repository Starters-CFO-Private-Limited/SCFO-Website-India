import React from "react";

export default class Col extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className={'flex flex-col' + ' ' + this.props.className}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}