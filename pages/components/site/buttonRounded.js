import React from "react";

export default class ButtonRounded extends React.Component {

    handleClick = () => {
        const {
            link,
            method,
        } = this.props;

        if (link) {
            window.location = link;
        } else if (method) {
            method();
        }
    }

    render() {
        const {
            className,
            type = "button",
            gradient = "bg-gradient-to-r from-sky-500 to-indigo-500",
        } = this.props;

        return (
            <React.Fragment>
                <button className={`text-white bg-scfo p-4 rounded-xl text-sm font-medium ${gradient}` + " " + className} onClick={this.handleClick} type={type}>
                    {this.props.children}
                </button>
            </React.Fragment>
        )
    }
}