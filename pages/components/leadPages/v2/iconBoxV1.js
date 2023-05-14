import React from "react";

import FeatureCard from "scfonext/pages/components/leadPages/v2/featureCard";
import Row from "scfonext/pages/components/site/row";
import Col from "scfonext/pages/components/site/col";

export default class IconBoxV1 extends FeatureCard {

    render() {
        const {
            title,
            icon,
            height,
        } = this.props;

        return (
            <React.Fragment>
                <Row className="cursor-pointer w-full" onClick={this.handleClick}>
                    <Col className="h-full w-full">
                        <div className={`flex h-full w-full items-center justify-center border border-slate-200 shadow-sm rounded-sm`} style={{ height: height }}>
                            <Col>
                                <h2 className={`text-navy text-lg md:text-xl font-bold mb-3 text-center`}>
                                    {title || "No title specified"}
                                </h2>
                                <p className={`text-slate-500 mb-4 text-center`}>
                                    {icon}
                                </p>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}