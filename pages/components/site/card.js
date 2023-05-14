import React from "react";

export default class Card extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className={'flex flex-col'}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}