import React from "react";

import FeatureCard from "scfonext/pages/components/leadPages/v2/featureCard";
import Row from "scfonext/pages/components/site/row";
import Col from "scfonext/pages/components/site/col";

export default class FeatureCardV1 extends FeatureCard {

    render() {
        const {
            image,
            title,
            description,
            direction = 'vertical',
            className,
            features,
            imageClassName,
            style,
        } = this.props;

        const v = direction === 'horizontal';

        return (
            <React.Fragment>
                <Row className={`cursor-pointer min-h-full min-w-full max-h-full max-w-full items-center justify-center ${className}`} onClick={this.handleClick}>
                    <Col className="w-full h-full">
                        <div className={`flex w-full h-full border border-slate-200 shadow-sm py-2 px-5 rounded-sm ${v ? 'flex-col md:flex-row' : 'flex-col items-center'}`}>
                            {
                                image ?
                                    <>
                                        <Col className={`items-center justify-center ${v ? 'w-full md:w-1/3' : 'w-full mb-4 h-1/3'}`}>
                                            <img src={image} className={imageClassName || "h-40"} />
                                        </Col>
                                    </>
                                    :
                                    <>
                                    </>
                            }
                            <Col className={`${v ? 'w-full md:w-2/3' : 'w-full'}`}>
                                <h2 className={`text-navy text-2xl font-bold mb-3 ${v ? 'text-center mt-5 md:text-left' : 'text-center'}`}>
                                    {title || "No title specified"}
                                </h2>
                                <p className={`text-slate-500 mb-4 ${v ? '' : 'text-center'}`}>
                                    {description}
                                </p>
                                {features ? <hr /> : <></>}
                                {features ? this.features() : <></>}
                            </Col>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}