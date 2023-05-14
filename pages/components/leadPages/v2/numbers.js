import React from "react";

import Row from "scfonext/pages/components/site/row";
import Col from "scfonext/pages/components/site/col";
import IconBoxV1 from 'scfonext/pages/components/leadPages/v2/iconBoxV1';
import ColoredTitle from 'scfonext/pages/components/leadPages/v2/coloredTitle';

export default class FeatureCard extends React.Component {

    render() {
        return (
            <Row className="flex-col md:flex-row">
                <Col className="w-full md:w-1/2 justify-center h-full">
                    <ColoredTitle title={(<>Numbers <br></br>don't lie!</>)} className="text-center md:text-left"></ColoredTitle>
                    <p className="text-slate-500 text-md mt-5 md:mt-10 w-full md:w-2/3 text-center md:text-left">
                        Over two decades of experience and thousands of customers over this time means you're in reliable and experienced hands. With a team of experts, we can help you with all your accounting needs.
                    </p>
                </Col>
                <Col className="w-full md:w-1/2 justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-2 grid-flow-row gap-2 mt-5 md:mt-0">
                        <IconBoxV1
                            height="150px"
                            direction="vertical"
                            title={(<>10+<br></br>Locations</>)}
                            icon={(<i className="fa fa-check-circle text-navy text-2xl"></i>)}
                        />
                        <IconBoxV1
                            height="150px"
                            direction="vertical"
                            title={(<>90<br></br>Experienced Accountants</>)}
                            icon={(<i className="fa fa-user-tie text-navy text-3xl"></i>)}
                        />
                        <IconBoxV1
                            height="150px"
                            direction="horizontal"
                            title={(<>50+<br></br>Valuations / month</>)}
                            icon={(<i className="fa fa-globe-asia text-navy text-3xl"></i>)}
                        />
                        <IconBoxV1
                            height="150px"
                            direction="vertical"
                            title={(<>2000+<br></br>Active Customers</>)}
                            icon={(<i className="fa fa-building text-navy text-2xl"></i>)}
                        />
                    </div>
                </Col>
            </Row>
        )
    }

}