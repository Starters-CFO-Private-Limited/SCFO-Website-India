import React from "react";

export default class ColoredTitle extends React.Component {

    render() {
        const {
            title,
            className
        } = this.props;

        return (
            <React.Fragment>
                <h2 className={"text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500" + " " + className} style={{ lineHeight: "55px" }}>{title}</h2>
            </React.Fragment>
        )
    }
}