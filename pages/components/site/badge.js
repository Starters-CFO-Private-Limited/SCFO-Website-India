import React from "react";

export default class Badge extends React.Component {

    render() {
        const {
            emoji,
            text,
        } = this.props;

        return (
            <React.Fragment>
                <div className={"rounded-full bg-pink-500 p-1 md:p-2 text-xs text-white flex items-center justify-center" + " " + this.props.className}>
                    {emoji}&nbsp;{text}
                </div>
            </React.Fragment>
        )
    }
}