import React from "react";

export default class FeatureCard extends React.Component {

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

    featureListDirection = () => {
        const {
            features,
            direction,
        } = this.props;

        if (direction === "vertical") {
            return "flex-col";
        }

        if (features && features.length > 3) {
            return "flex-col";
        } else {
            return "flex-row";
        }
    }

    features = () => {
        const {
            features = [],
        } = this.props;

        return (
            <div className={`flex text-sm my-4 ${this.featureListDirection()}`}>
                {
                    features.map((feature, i) => <>
                        <span className="mr-3 mb-1 text-slate-600" key={i}><i className="fa fa-check mr-1"></i>&nbsp;{feature}</span>
                    </>)
                }
            </div>
        )
    }

    render() {
        return (
            <></>
        )
    }

}