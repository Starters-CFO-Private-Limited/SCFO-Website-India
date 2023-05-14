import React from "react";

import Layout from 'scfonext/pages/components/site/layout';
import Container from "scfonext/pages/components/site/container";
import Row from "scfonext/pages/components/site/row";
import Col from "scfonext/pages/components/site/col";
import HeaderBanner from 'scfonext/pages/components/leadPages/v2/headerBanner';
import Partners from 'scfonext/pages/components/leadPages/v2/partners';
import ColoredTitle from 'scfonext/pages/components/leadPages/v2/coloredTitle';
import Digital from 'scfonext/pages/components/leadPages/v2/digital';
import Button from "scfonext/pages/components/site/button";
import FeatureCardV1 from 'scfonext/pages/components/leadPages/v2/featureCardV1';
import Numbers from 'scfonext/pages/components/leadPages/v2/numbers';
import LineConvert from 'scfonext/pages/components/leadPages/lineConvert';
import Head from 'next/head';

class Home extends React.Component {

    render() {

        return (
            <>
                <Head>
                    <meta charSet="utf-8"></meta>

                    <title>Virtual CFO Services | Accounting, Services in Delhi | Starter CFO</title>
                    <meta name="description" content="Starters CFO offers Virtual CFO Services for all your business needs. Hire us for Virtual CFO Services, Valuations and accounting service in Delhi, India."/>  
                    <meta name="Keywords" content="Best virtual cfo services, virtual cfo services, company valuation in india, company formation online, private limited company registration, accounting services for startups, accounting services in Delhi, private company valuation, business valuation service , company registration services"/>
                    <meta name="copyright" content="Starters CFO" />  
                    <meta name="language" content="English" />
                    <meta name="coverage" content="Worldwide" /> 
                    <meta name="distribution" content="Global" /> 
                    <meta name="author" content="Starter CFO"/>
                    <meta name="robots" content="index,follow" />

                    <meta property="og:type" content="website"></meta>
                    <meta property="og:url" content="https://www.starterscfo.com/"></meta>
                    <meta property="og:title" content="Virtual CFO Services | Accounting, Services in Delhi | Starter CFO"></meta>
                    <meta property="og:description" content="Starters CFO offers Virtual CFO Services for all your business needs. Hire us for Virtual CFO Services, Valuations and accounting service in Delhi, India."></meta>
                    <meta property="og:image" content="/static/images/banner/meta.png"></meta>

                    <meta property="twitter:card" content="summary_large_image"></meta>
                    <meta property="twitter:url" content="https://www.starterscfo.com/"></meta>
                    <meta property="twitter:title" content="Virtual CFO Services | Accounting, Services in Delhi | Starter CFO"></meta>
                    <meta property="twitter:description" content="Starters CFO offers Virtual CFO Services for all your business needs. Hire us for Virtual CFO Services, Valuations and accounting service in Delhi, India."></meta>
                    <meta property="twitter:image" content="/static/images/banner/meta.png"></meta>

                    <link rel="canonical" href="https://starterscfo.com" /> 
                </Head>

                <Layout thirdBanner={true}>

                    <HeaderBanner title='CFO as a service for start-ups & SMEs' description={(<><p>Entrepreneurship, running a profitable business is already taxing as it is.
                        GST returns, compliances, and routine accounting is not something a business owner should spend their cycles on.</p><br></br><p>You run your business. We will do the bookkeeping.
                            India's first Virtual CFO Service for start-ups & SMEs.</p></>)} image={'/static/images/svg/hero_3.svg'} />

                    <Container className="mt-10 mb-10 h-full">
                        <Row className="items-center justify-center text-lg text-center my-5 text-slate-800 h-full">
                            <Col className="items-center justify-center h-full">
                                <ColoredTitle title={(<>Save Time, Save Money.</>)}></ColoredTitle>
                                <p className="xs:w-full md:w-1/2 mt-5">
                                    You're a start-up / SME owner with lot's to do. We're an expert finance organisation with experience serving Entrepreneurs & start ups.
                                </p>
                                <p className="xs:w-full md:w-1/2">
                                    Let's take book keeping off your hands forever - so that you can focus on what's important to you - your business.
                                </p>
                                <Button link="/contact" className="mt-10">Get Started</Button>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="items-center justify-center w-full h-full mb-2 mt-10">
                            <Col className="w-full h-full">
                                <FeatureCardV1
                                    direction="horizontal"
                                    image={"/static/images/illustrations/automated_accounting.svg"}
                                    title="Company Incorporation & Valuation"
                                    description="Incorporating a business can be a lengthy and complicated process. Starters' CFO is dedicated to empowering entreprenuers in this regard and making India start up ready."
                                    features={["Virtual CFO Services", "Free Perks & Benefits", "Strategic Advisory"]}
                                />
                            </Col>
                        </Row>
                        <Row className="flex-col md:flex-row items-center items-stretch justify-center md:space-x-2 w-full h-full mb-2">
                            <Col className="w-full md:w-1/3 h-full flex-1">
                                <FeatureCardV1
                                    height="450px"
                                    direction="vertical"
                                    image={"/static/images/illustrations/compliance.webp"}
                                    title="Statutory Compliances"
                                    description="Beyond acting as your bookkeepers, we work autonomously to keep your firm up to date with all regulations and compliances."
                                    features={
                                        [
                                            "GST Compliance",
                                            "TDS Compliance",
                                            "Secretarial Compliances",
                                            "Statutory Audit",
                                            "Issue of form 16-A",
                                        ]
                                    }
                                />
                            </Col>
                            <Col className="w-full md:w-1/3 h-full flex-1 mt-2 md:mt-0">
                                <FeatureCardV1
                                    height="450px"
                                    direction="vertical"
                                    image={"/static/images/illustrations/1.svg"}
                                    title="Payroll Automation"
                                    description="Our software automatically generates payroll and initiates credits to employee's accounts. Employees receive their own dashboard."
                                    features={
                                        [
                                            "Employee Dashboard",
                                            "Automated Form 16",
                                            "Automated Investment Declaration",
                                            "Payslips",
                                            "& more...",
                                        ]
                                    }
                                />
                            </Col>
                            <Col className="w-full md:w-1/3 h-full flex-1 mt-2 md:mt-0">
                                <FeatureCardV1
                                    height="450px"
                                    direction="vertical"
                                    image={"/static/images/illustrations/service.svg"}
                                    title="Virtual CFO"
                                    description="We act as your partners in your business and will help you with any ad-hoc requirements you come up with. Simply text us!"
                                    features={
                                        [
                                            "Registration",
                                            "Internal Audit",
                                            "Income Tax & GST Assessments",
                                            "Budgets & Forecasting",
                                            "& more...",
                                        ]
                                    }
                                />
                            </Col>
                        </Row>
                        <Row className="items-center justify-center w-full h-full">
                            <Col className="w-full h-full">
                                <FeatureCardV1
                                    height="100%"
                                    direction="horizontal"
                                    image={"/static/images/illustrations/payroll.svg"}
                                    title="International Payroll Outsourcing"
                                    description="Hire and manage payroll + HR on auto pilot for your Indian employees as an international employer."
                                    features={[
                                        "Create legal presence in India without FDI complexities",
                                        "Onboard & forget -- dedicated account manager(s) for your India team keep everything streamlined.",
                                        "Offer perks, insurance to your India team",
                                        "Includes financial planning and tax saving advice for your employees",
                                        "Includes annual tax filing for all employees",
                                        "Deep integration with Zoho Payroll offers a digital portal to all employees.",
                                        "Deep integration with Zoho Books offers you quick access to your books and statistics."
                                    ]}
                                />
                            </Col>
                        </Row>
                        <Row className="flex-col md:flex-row items-center justify-center md:space-x-2 w-full h-full mt-2">
                            <Col className="w-full md:w-1/3 h-full">
                                <FeatureCardV1
                                    height="200px"
                                    direction="vertical"
                                    title="GST Registration"
                                    description="All companies in India require a GST registration. Additionally, the registration can involve additional steps, such as registering an LUT."
                                />
                            </Col>
                            <Col className="w-full md:w-1/3 h-full mt-2 md:mt-0">
                                <FeatureCardV1
                                    height="200px"
                                    direction="vertical"
                                    title="MSME Registration"
                                    description="Register with the Ministry of Micro, Small & Medium Enterprises (MSME) to qualify for government schemes and benefits. This process is completely online."
                                />
                            </Col>
                            <Col className="w-full md:w-1/3 h-full mt-2 md:mt-0">
                                <FeatureCardV1
                                    height="200px"
                                    direction="vertical"
                                    title="Trademark Registration"
                                    description={(<>Trademark your logo, brand, product or service name with the Government of India. This protects your business from competition.<br></br><br></br></>)}
                                />
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-10 md:mt-20 h-full md:h-96">
                        <Numbers />
                    </Container>

                    <Digital />

                    <Partners />

                    <LineConvert className="mt-10" />
                </Layout>
            </>
        );
    }
}

export default Home;
