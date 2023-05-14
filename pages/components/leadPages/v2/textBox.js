import React from "react";

export default class TextBox extends React.Component {

    handleClick = () => {
        const {
            link
        } = this.props;

        if (link) {
            window.open(link);
        }
    }

    render() {
        const {
            title,
            description,
            className,
        } = this.props;

        return (
            <React.Fragment>
                <div onClick={this.handleClick} className={`flex flex-col items-center justify-center border border-1 border-slate-300 hover:shadow-md rounded cursor-pointer h-full w-full py-5 px-4 ${className}`}>
                    <h2 className={`text-navy text-2xl font-bold text-center`}>
                        {title || "No title specified"}
                    </h2>
                    <p className={`text-slate-500 mt-4 text-center`}>
                        {description}
                    </p>
                </div>
            </React.Fragment>
        )
    }
}