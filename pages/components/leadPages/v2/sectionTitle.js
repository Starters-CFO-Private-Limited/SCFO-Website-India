import React from "react";

class SectionTitle extends React.Component {

    render() {
        const {
            title,
            subTitle,
            className
        } = this.props;

        return (
            <React.Fragment>
                <div className="w-full flex flex-col items-center justify-center mt-10 mb-5 text-center md:text-left">
                    <h2 className={"text-4xl font-light text-slate-700" + " " + className} style={{ lineHeight: "55px" }}>{title}</h2>
                    <span className={"font-light text-slate-500 flex items-center justify-center"}>{subTitle}</span>
                </div>
            </React.Fragment>
        )
    }
}

export default SectionTitle;