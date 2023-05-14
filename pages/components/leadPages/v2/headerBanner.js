import React from "react";

import Container from "scfonext/pages/components/site/container";
import Row from "scfonext/pages/components/site/row";
import Button from "scfonext/pages/components/site/button";
import Col from "scfonext/pages/components/site/col";
import ResponsiveFormV2 from 'scfonext/pages/components/leadPages/v2/forms/responsiveFormV2';

export default class HeaderBanner extends React.Component {

    render() {
        const {
            title,
            subTitle,
            description,
            image,
            responsiveFormParameters,
            gradient = "bg-gradient-to-r from-cyan-500 to-blue-500",
            primaryButtonLink = "/contact",
            secondaryButton = {
                text: "Get Started",
                display: false,
                link: "/contact",
                className: "",
                icon: false,
                pinf: false,
            },
            leadValue
        } = this.props;

        if (image && responsiveFormParameters) {
            throw "HeaderBanner: image and responsiveFormParameters cannot be used together";
        }

        return (
            <React.Fragment>
                <div className={`w-screen ${gradient}`}>
                    <Container className="py-10 h-full">
                        <Row className="h-full items-center">
                            <Col className="sm:w-full md:w-1/2 h-full">
                                <h1 className="text-white text-5xl font-bold mb-8">
                                    {title || "No title specified"}
                                    {
                                        subTitle && (
                                            <h2 className="text-white text-xl font-light mt-2">
                                                {subTitle}
                                            </h2>
                                        )
                                    }
                                </h1>
                                <div className="text-white xs:w-full md:w-2/3">
                                    {description}
                                    <Button link={primaryButtonLink} style="secondary" className="h-12 w-32 mt-6">Get Started</Button>
                                    {
                                        secondaryButton.display && (
                                            <Button link={secondaryButton.link} style="priamry" className={`h-12 mt-6 ml-2 ${secondaryButton.className}`}>{secondaryButton.icon ? <>{secondaryButton.icon}&nbsp;&nbsp;</> : <></>}
                                                {secondaryButton.text}
                                                {
                                                    secondaryButton.ping ?
                                                        <>
                                                            <span className="animate-ping relative inline-flex h-3 w-3 rounded-full bg-sky-800" style={{ top: "-20px", right: "-40px" }}></span>
                                                        </>
                                                        :
                                                        <></>
                                                }
                                            </Button>
                                        )
                                    }
                                </div>
                            </Col>
                            <Col className="sm:w-0 md:w-1/2">
                                {
                                    image && (
                                        <img src={image} className="sm:hidden md:flex mt-10"></img>
                                    )
                                }
                                {
                                    responsiveFormParameters && (
                                        <ResponsiveFormV2 {...responsiveFormParameters} leadValue={leadValue}></ResponsiveFormV2>
                                    )
                                }
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment >
        )
    }
}