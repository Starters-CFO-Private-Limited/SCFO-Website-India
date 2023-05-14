import React from "react";

export default class Button extends React.Component {

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
            style = "primary", // or secondary
        } = this.props;

        return (
            <React.Fragment>
                {
                    style === "primary" ? (
                        <button className={'text-white bg-scfo py-1 px-2 rounded-sm text-sm font-light' + " " + className} onClick={this.handleClick} type={type}>
                            {this.props.children}
                        </button>
                    ) : (
                        <button className={'bg-white text-scfo py-1 px-2 rounded-sm text-sm font-light border border-scfo' + " " + className} onClick={this.handleClick} type={type}>
                            {this.props.children}
                        </button>
                    )
                }

            </React.Fragment>
        )
    }
}