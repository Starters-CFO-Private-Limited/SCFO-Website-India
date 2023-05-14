import React from 'react';
// import data from '../public/static/careerData.json'
// import Layout from 'scfonext/pages/components/site/layout';
// import Col from "scfonext/pages/components/site/col";
// import Row from "scfonext/pages/components/site/row";
// import Container from "scfonext/pages/components/site/container";
// import Button from "scfonext/pages/components/site/button";
// import CareerDetailModal from 'scfonext/pages/components/hiring/careerDetailModal';
// import Meta from 'scfonext/pages/components/site/meta';
// import Head from 'next/head';



class Careers extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            'showPopConvert': false,
            'detialsOfJob': ''
        }
    }

    togglePopConvert = (item) => {
        this.setState({
            'showPopConvert': !this.state.showPopConvert,
            'detialsOfJob': item
        })
    }

    render() {
        return (
            <></>
        )
    }

    // render() {
    //     return (
    //         <>
    //             <Head>
    //                 <link rel="stylesheet" href="/static/career.css" />
    //             </Head>

    //             <Meta title="Starters' CFO | Careers" description="Work at a leading start-up in India's ever evolving financial industry"></Meta>

    //             <Layout promobanner={true}>
    //                 <CareerDetailModal show={this.state.showPopConvert} jobdetails={this.state.detialsOfJob} onHide={this.togglePopConvert} product={'vcfo'}></CareerDetailModal>
    //                 <div className="d-none d-md-block d-lg-block d-xl-block hero--wrapper -white" style={{ 'height': '500px' }}>
    //                     <div className="hero__background">
    //                         <div className="-white">
    //                             <Container>
    //                                 <Row className="hero__text">
    //                                     <Col>
    //                                         <h1 className="color__dark mb-4"><b>We’re looking for people like you</b></h1>
    //                                         <a href="#currentOpenings"><Button className="btn__secondary on_white color__dark large">Current Openings</Button></a>
    //                                     </Col>
    //                                     <Col></Col>
    //                                 </Row>
    //                             </Container>
    //                         </div>
    //                     </div>
    //                     <div className="grass"></div>
    //                 </div>

    //                 <div className="d-xs-block d-sm-block d-md-none w-100">
    //                     <div className="hero--wrapper">
    //                         <div className="hero__background d-flex align-items-start -mobile">
    //                             <Container>
    //                                 <Row className="hero__text">
    //                                     <Col>
    //                                         <h4 className="title mb-5">We’re looking for people like you.</h4>
    //                                         <Button className="btn__secondary large">Current Openings</Button>
    //                                     </Col>
    //                                     <Col></Col>
    //                                 </Row>
    //                             </Container>
    //                         </div>
    //                     </div>
    //                     <div className="grass"></div>
    //                 </div>

    //                 <Container>

    //                     <Row style={{ marginTop: '50px' }}></Row>

    //                     <Row style={{ marginTop: '10px' }}>
    //                         <Col md={{ 'span': '8', 'offset': '2' }}>
    //                             <p className="font__20 text-center color__dark">Join Starters’ CFO to reshape the financial operations industry<br /> in India and serve thousands of companies.</p>
    //                         </Col>
    //                     </Row>

    //                     <Row style={{ marginTop: '20px' }}></Row>

    //                     <hr></hr>

    //                     <Row style={{ marginTop: '50px' }}>
    //                         <Col>
    //                             <h3 className="text-center">Looking for perks? We've got you covered</h3>
    //                         </Col>
    //                     </Row>

    //                     <Row style={{ marginTop: '50px' }}></Row>

    //                     <Row className="text-center">
    //                         <Col>
    //                             <img src="/static/images/illustrations/mentoring.svg" className="h-6"></img>
    //                             <br></br><br></br>
    //                             <p className="color__grey font__15 text-center">Mentoring by Business<br /> Speaker Dr. Vivek Bindra</p>
    //                         </Col>
    //                         <Col>
    //                             <img src="/static/images/illustrations/promotion.svg" className="h-6"></img>
    //                             <br></br><br></br>
    //                             <p className="color__grey font__15 text-center">On the job training and development</p>
    //                         </Col>
    //                         <Col>
    //                             <img src="/static/images/illustrations/work.svg" className="h-6"></img>
    //                             <br></br><br></br>
    //                             <p className="color__grey font__15 text-center">Flexible work options</p>
    //                         </Col>
    //                     </Row>

    //                     <Row style={{ marginTop: '20px' }}></Row>

    //                     <Row className="text-center">
    //                         <Col>
    //                             <img src="/static/images/illustrations/salary_increment.svg" className="h-6"></img>
    //                             <br></br><br></br>
    //                             <p className="color__grey font__15 text-center">Annual Salary Increments<br /> (after proper review)</p>
    //                         </Col>
    //                         <Col>
    //                             <img src="/static/images/illustrations/shield.svg" className="h-6"></img>
    //                             <br></br><br></br>
    //                             <p className="color__grey font__15 text-center">Peer recognition</p>
    //                         </Col>
    //                         <Col>
    //                             <img src="/static/images/illustrations/group.svg" className="h-6"></img>
    //                             <br></br><br></br>
    //                             <p className="color__grey font__15 text-center">Team outings</p>
    //                         </Col>
    //                     </Row>

    //                     <Row style={{ marginTop: '20px' }}></Row>

    //                     <Row style={{ marginTop: '50px' }}>
    //                         <Col><hr></hr></Col>
    //                         <h4 className="text-center color__dark"><b>Jobs & Location</b></h4>
    //                         <Col><hr></hr></Col>
    //                     </Row>

    //                     <Row style={{ marginTop: '20px' }}></Row>

    //                     <Row>
    //                         {data.map((item, index) => {
    //                             return (
    //                                 <Col md={4} key={index}>
    //                                     <Row>
    //                                         <Col className="text-center my-3 mobile-text-left">
    //                                             <p className="mb-0 color__scfo font__18 mt-2 jobSummary-underline" onClick={() => this.togglePopConvert(item)}>{item.job_title}</p>
    //                                             <p className="color__light-grey font__14">{item.location}</p>
    //                                         </Col>
    //                                     </Row>
    //                                 </Col>
    //                             )
    //                         })}
    //                     </Row>

    //                     <Row style={{ marginTop: '50px' }}></Row>

    //                 </Container>
    //             </Layout>
    //         </>
    //     )
    // }
}


export default Careers;
