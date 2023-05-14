import React from 'react';

import Head from 'next/head';

import Layout from 'scfonext/pages/components/site/layout';
import Row from "scfonext/pages/components/site/row";
import Col from "scfonext/pages/components/site/col";
import Container from "scfonext/pages/components/site/container";
import IconBoxV2 from "scfonext/pages/components/leadPages/v2/iconBoxV2";
import HeaderBanner from 'scfonext/pages/components/leadPages/v2/headerBanner';
import ColoredTitle from 'scfonext/pages/components/leadPages/v2/coloredTitle';
import FeatureCardV1 from 'scfonext/pages/components/leadPages/v2/featureCardV1';
import SectionTitle from 'scfonext/pages/components/leadPages/v2/sectionTitle';
import TextBox from 'scfonext/pages/components/leadPages/v2/textBox';
import LineConvert from 'scfonext/pages/components/leadPages/lineConvert';
import Accordion from 'scfonext/pages/components/leadPages/v2/accordion';
import ButtonRounded from 'scfonext/pages/components/site/buttonRounded';

import VALUATION_FAQ from 'scfonext/content/valuationFaq';
import VideoSwiper from './components/leadPages/v2/videoSwiper';

import initiatePayment from 'scfonext/utils/payments/razorpay/initiatePayment';
import { navigateToWhatsapp } from 'scfonext/utils/leads/whatsapp';

import { VALUATION_HUBSPOT_MEETINGS_LINK, VALUATION_CONVERSION_VALUE, WHATSAPP_DISPLAY_NUMBER } from "scfonext/constants";

export default class Valuation extends React.Component {

    state = {
        meta: {
            title: "Starters' CFO | Start up Valuation Serivces",
            description: "Business valuation services for start ups and SMEs. Pre and post money valuation, valuation consultancy services.",
            keywords: "Startup Valuation Consultant,Startup Valuation Certificate,Startup Funding Consultants,IBBI Registered Valuer Valuation,Merchant Banker Valuation,CA Valuation,ESOP Valuation,Accounting Standard Valuation,Financial modelling for valuation through DCF,Comparable transactions for valuation through market multiple method,Valuation by stage / VC method",
            url: "https://www.starterscfo.com/startup-valuation-india"
        },
        ld: {
            product: {
                "@context": "http://www.schema.org",
                "@type": "product",
                "brand": "Starters' CFO ",
                "name": "Business Valuation Services",
                "description": "Valuation services and consultancy for start-ups, SMEs and other businesses. Valuation for regulatory purposes or for investment pitching. Financial Modelling services. IBBI Registered Valuer.",
                "aggregateRating": {
                    "@type": "aggregateRating",
                    "ratingValue": "4.7",
                    "reviewCount": "7800"
                }
            }
        }
    }

    headerDescription = () => {
        return (
            <>
                <ul>
                    <li><i className="fa fa-check"></i>&nbsp; Valuation for regulatory purposes</li>
                    <li><i className="fa fa-check"></i>&nbsp; Valuation for investment pitches</li>
                    <li><i className="fa fa-check"></i>&nbsp; Clear & detailed valuation reports for negotiations</li>
                    <li><i className="fa fa-check"></i>&nbsp; Trusted by 1000+ happy customers</li>
                </ul>
            </>
        )
    }

    initiatePayment = async (amountInPaise, description) => {
        await initiatePayment(amountInPaise, description)
    }

    head = () => {
        const {
            meta,
            ld,
        } = this.state;
        return (
            <>
                <Head>
                    <meta charSet="utf-8"></meta>

                    <title>Starters' CFO | Start up Valuation Serivces</title>
                    <meta name="title" content={meta.title}></meta>
                    <meta name="description" content={meta.description}></meta>
                    <meta name="keywords" content={meta.keywords}></meta>
                    <meta name="robots" content="index"></meta>

                    <meta property="og:type" content="website"></meta>
                    <meta property="og:url" content={meta.url}></meta>
                    <meta property="og:title" content={meta.title}></meta>
                    <meta property="og:description" content={meta.description}></meta>
                    <meta property="og:image" content="/static/images/banner/meta.png"></meta>

                    <meta property="twitter:card" content="summary_large_image"></meta>
                    <meta property="twitter:url" content={meta.url}></meta>
                    <meta property="twitter:title" content={meta.title}></meta>
                    <meta property="twitter:description" content={meta.description}></meta>
                    <meta property="twitter:image" content="/static/images/banner/meta.png"></meta>

                    <script type="application/ld+json">
                        {
                            JSON.stringify(ld.product)
                        }
                    </script>
                </Head>
            </>
        )
    }

    render() {
        return (
            <>
                {this.head()}
                <Layout thirdBanner={true}>
                    <HeaderBanner
                        title='What is your startup worth?'
                        subTitle={"Seamless valuation services from Starters' CFO"}
                        description={this.headerDescription()}
                        responsiveFormParameters={
                            {
                                product: 'valuation',
                                wrapperClassName: 'bg-white p-4 shadow-sm rounded h-full hidden md:flex',
                                title: 'Consult with us for free',
                                subTitle: 'Hear back in 24 hours, or Whatsapp +91 81128 11268 now.',
                                direction: 'vertical'
                            }
                        }
                        secondaryButton={
                            {
                                display: true,
                                text: "Instant Meeting",
                                link: VALUATION_HUBSPOT_MEETINGS_LINK,
                                className: "w-48",
                                icon: (<i className="fa fa-phone"></i>),
                                ping: true
                            }
                        }
                        leadValue={VALUATION_CONVERSION_VALUE}
                    />

                    <Container className="mt-10 mb-10">
                        <Row className="items-center justify-center text-xl text-center my-5 text-slate-800">
                            <Col className="items-center justify-center">
                                <ColoredTitle title={(<>Business Valuation Services</>)}></ColoredTitle>
                                <p className="xs:w-full md:w-2/3 mt-5">
                                    "Yesterday" was the right time to have an independent business valuation for your company by an independent business valuer. And tomorrow will be late.
                                </p>
                                <p className="xs:w-full md:w-2/3 mt-5">
                                    The need for a business valuation arises for several reasons: incoming investors, financial strategy, business planning, business sale, founder exit, public offering, or net worth certification.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mb-5 mt-5">
                        <Row className="flex-col md:flex-row">
                            <IconBoxV2
                                className="mt-2 md:mt-0"
                                image={'/static/images/illustrations/funding.png'}
                                title={'Fund Raise'}
                                description={'Raising money is a cumbersome multi-stage process while establishing a valuation is one of the most important steps along the way. Valuation matters to entrepreneurs as it determines the dilution in the company in exchange for fund raise.'}
                            />
                            <IconBoxV2
                                className="mt-2 md:mt-0"
                                image={'/static/images/illustrations/salary_increment.svg'}
                                title={'Sale of the business'}
                                description={'As an entrepreneur, if you are considering selling your venture to a third party, a valuation that is prepared before the beginning of the negotiation will put you in a position of power. When you have a good idea of the value of a business, you can avoid wasting time looking at deals that do not make financial sense.'}
                            />
                            <IconBoxV2
                                className="mt-2 md:mt-0"
                                image={'/static/images/illustrations/compliance.webp'}
                                title={'Mergers, Acquisition & Amalgamation'}
                                description={'Having a buy-sell agreement in place between multiple owners ensures a smooth transition of a business in events such as death or disputes among the owners. Entrepreneur needs to understand the value of the business to determine the dilution of equity shares.'}
                            />
                        </Row>
                        <Row className="flex-col md:flex-row">
                            <IconBoxV2
                                className="mt-2 md:mt-0"
                                image={'/static/images/illustrations/agreement.svg'}
                                title={'ESOP plans'}
                                description={'If the company is considering establishing an ESOP, a feasibility study is needed and a key part of that study is the valuation of the business. While publicly-traded companies can use their market values for the ESOP, privately-held corporations need an appraisal to know how much they can deduct for the contribution of shares to the plan.'}
                            />
                            <IconBoxV2
                                className="mt-2 md:mt-0"
                                image={'/static/images/illustrations/1.svg'}
                                title={'Regulatory purposes'}
                                description={"Regulatory Valuations are required under Companies Act, Income Tax Act, FEMA, SEBI Regulations, Insolvency & Bankruptcy Code, IND-AS (Financial Reporting). Starters' CFO helps companies to navigate this environment of changing laws and regulations by offering skilled expertise for forming strategy and defending valuation positions."}
                            />
                            <IconBoxV2
                                className="mt-2 md:mt-0"
                                image={'/static/images/illustrations/decision_making.png'}
                                title={'Decision Making'}
                                description={'An owner may want a business appraisal to help decide the near- and long-term strategies. While the investment in an appraisal is meaningful and not undertaken lightly, an owner at an inflection point in the business or his/her personal life may need the information to decide whether to sell, expand, gift, strategically plan or go in another direction.'}
                            />
                        </Row>
                    </Container>

                    <Container>
                        <SectionTitle title="Valuation Services" className="mt-10"></SectionTitle>
                        <Row className="items-center justify-center w-full h-full">
                            <Col className="w-full h-full">
                                <FeatureCardV1
                                    height="100%"
                                    direction="horizontal"
                                    image={"/static/images/illustrations/regulatory.jpg"}
                                    imageClassName="h-48"
                                    title="Valuation for regulatory purposes"
                                    description="Regulatory Valuations are required under Companies Act, Income Tax Act, FEMA, SEBI Regulations, Insolvency & Bankruptcy Code, IND-AS (Financial Reporting)."
                                    features={[
                                        "IBBI Registered Valuer Valuation",
                                        "Merchant Banker Valuation",
                                        "CA Valuation",
                                        "ESOP Valuation",
                                        "Accounting Standard Valuation",
                                        "Free Consultation"
                                    ]}
                                />
                            </Col>
                        </Row>
                        <Row className="items-center justify-center w-full h-full">
                            <Col className="w-full h-full">
                                <FeatureCardV1
                                    height="100%"
                                    direction="horizontal"
                                    image={"/static/images/illustrations/fund_raising_2.jpg"}
                                    title="Valuation for investment pitching"
                                    imageClassName="h-48"
                                    className="mt-5"
                                    description="How much should an investor pay for an interest in your company? It depends on what the company is worth."
                                    features={[
                                        "Financial modelling for valuation through DCF",
                                        "Comparable transactions for valuation through market multiple method",
                                        "Valuation by stage / VC method",
                                        "Free Consultation",
                                    ]}
                                />
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <SectionTitle title="Valuation Methods" subTitle="(click to learn more)" className="mt-10"></SectionTitle>
                        <Row className="flex-col md:flex-row md:items-stretch md:h-52 md:space-x-2 w-full mt-2">
                            <Col className="w-full md:w-1/3 h-full">
                                <TextBox
                                    title="Berkus Method"
                                    description="This is an early-stage valuation method that was explicitly created to find a starting point without relying upon the founder's financial forecasts."
                                    link="https://berkonomics.com/?p=1214"
                                />
                            </Col>
                            <Col className="w-full md:w-1/3 h-full mt-2 md:mt-0">
                                <TextBox
                                    title="Venture Capital Method"
                                    description="The most common valuation method by Bill Sahlman, without the disadvantages of DCF method or comparable analysis method."
                                    link="https://www.vcmethod.com/"
                                />
                            </Col>
                            <Col className="w-full md:w-1/3 h-full mt-2 md:mt-0">
                                <TextBox
                                    title="Risk Factor Summation"
                                    description="RFS is a rough pre-money valuation method for early stage startups. The RFS-method uses a base-value of a comparable startup for the valuation of your company."
                                    link="https://www.youtube.com/watch?v=dtYEvIdLGfg"
                                />
                            </Col>
                        </Row>
                        <Row className="flex-col md:flex-row md:items-stretch md:h-52 md:space-x-2 w-full mt-2">
                            <Col className="w-full md:w-1/3 h-full">
                                <TextBox
                                    title="Cost to Duplicate"
                                    description="This method involves taking into account all costs and expenses associated with the startup and the development of its product, including the purchase of its physical assets."
                                    link="https://pages.stern.nyu.edu/~adamodar/pdfiles/papers/younggrowth.pdf"
                                />
                            </Col>
                            <Col className="w-full md:w-1/3 h-full mt-2 md:mt-0">
                                <TextBox
                                    title="Scorecard Valuation"
                                    description="This method is used for comparing target companies to similar startups, such as business sector, stage of development and geographic location."
                                    link="https://www.forbes.com/sites/mariannehudson/2016/01/27/scorecard-helps-angels-value-early-stage-companies/?sh=b0b998b68740"
                                />
                            </Col>
                            <Col className="w-full md:w-1/3 h-full mt-2 md:mt-0">
                                <TextBox
                                    title="Book Value Method"
                                    description="This method is usually used as a method of cross-testing the more common technique of applying multiples to EBITDA, cash flow, or net earnings."
                                    link="https://thebusinessprofessor.com/business-personal-finance-valuation/book-value-adjusted-book-value-methods/"
                                />
                            </Col>
                        </Row>
                        <Row className="flex-col md:flex-row md:items-stretch md:h-52 md:space-x-2 w-full mt-2">
                            <Col className="w-full md:w-1/3 h-full">
                                <TextBox
                                    title="DCF Method"
                                    description="DCF is a valuation method used to estimate the value of an investment based on its expected future cash flows"
                                    link="https://www.investopedia.com/terms/d/dcf.asp#:~:text=Discounted%20cash%20flow%20(DCF)%20is,will%20generate%20in%20the%20future."
                                />
                            </Col>
                            <Col className="w-full md:w-1/3 h-full mt-2 md:mt-0">
                                <TextBox
                                    title="Comparable Method"
                                    description="This method looks at ratios of similar public companies and uses them to derive the value of another business."
                                    link="https://corporatefinanceinstitute.com/resources/knowledge/valuation/comparable-company-analysis/"
                                />
                            </Col>
                            <Col className="w-full md:w-1/3 h-full mt-2 md:mt-0">
                                <TextBox
                                    title="Stage Method"
                                    description="This method is often used by angel investors and venture capital firms to quickly come up with a rough-and-ready range of company value."
                                    link="https://www.investopedia.com/articles/financial-theory/11/valuing-startup-ventures.asp#toc-valuation-by-stage"
                                />
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <SectionTitle title="Have your Questions Answered" subTitle="Free!" className="mt-10"></SectionTitle>
                        <iframe src={`${VALUATION_HUBSPOT_MEETINGS_LINK}?embed=true`} width="100%" height="700px"></iframe>
                    </Container>

                    <LineConvert product={'valuation'} className="mt-10" leadValue={VALUATION_CONVERSION_VALUE}></LineConvert>

                    <Container>
                        <SectionTitle title="Want to keep learning?" subTitle="Recommended videos from experts" className="mt-10"></SectionTitle>
                        <VideoSwiper></VideoSwiper>
                    </Container>

                    <Container>
                        <Row className="flex-col md:flex-row mt-5">
                            <Col className="hidden md:flex md:w-1/2 items-center justify-center">
                                <img src="/static/images/illustrations/faq_2.png" alt="FAQ" className="w-2/3 md:w-full" />
                            </Col>
                            <Col className="w-full md:w-1/2">
                                <ColoredTitle title="Frequently Asked Questions" className="text-center mt-10 md:mt-0"></ColoredTitle>
                                <Accordion elements={VALUATION_FAQ} />
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <div className="flex flex-col md:flex-row min-h-48 w-full">
                            <div className="flex md:hidden flex-col md:flex-row w-full items-center justify-between mt-10 mb-10 md:mt-0">
                                <div className="flex flex-col w-full md:w-2/3">
                                    <span className="font-light text-slate-700 text-4xl">Consult with us today</span>
                                    <span className="font-bold text-sale-800 text-4xl">free!</span>
                                </div>
                                <div className="text-slate-700 text-xs w-full md:w-1/3 flex justify-center flex flex-col mt-5 md:mt-0">
                                    Need something different? We have custom plans available as well. Simply reach out to us via chat, Whatsapp, email or phone!
                                    <a href="#" className="text-base mr-2" onClick={() => { navigateToWhatsapp() }}>
                                        <i className="fab fa-whatsapp text-emerald-500 mr-1"></i>&nbsp;<span className={'font-light text-gray-800 text-sm'}>{WHATSAPP_DISPLAY_NUMBER}</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col w-full md:w-1/3 bg-red-100 h-full rounded-lg bg-gradient-to-b from-cyan-500 to-blue-500 mr-8 p-10">
                                <span className="font-light text-white text-4xl">Save your</span>
                                <span className="font-bold text-white text-4xl">money now.</span>
                                <p className="font-light text-white mt-10 text-sm">
                                    Starters' CFO competitive pricing saves you money every step of the way. We continiously strive to offer quality services that beat the competition by huge margins, while keeping our prices affordable.
                                    <br></br>
                                    <br></br>
                                    No payments are required before you start speaking to us! Consult with us for free, and have all your questions answered before you make any commitments.
                                    <br></br>
                                    <br></br>
                                    Our teams are always available on dedicated Whatsapp groups throughout your purchase and consultancy experience.
                                </p>
                                <img src="/static/images/illustrations/save_money_4.png" className="w-full mt-20"></img>
                            </div>
                            <div className="flex flex-col w-full md:w-2/3 flex-1">
                                <div className="hidden md:flex flex-col md:flex-row w-full items-center justify-between mt-10 md:mt-0">
                                    <div className="flex flex-col w-full md:w-2/3">
                                        <span className="font-light text-slate-700 text-4xl">Consult with us today</span>
                                        <span className="font-bold text-sale-800 text-4xl">free!</span>
                                    </div>
                                    <div className="text-slate-700 text-xs w-full md:w-1/3 flex justify-center flex flex-col mt-5 md:mt-0">
                                        Need something different? We have custom plans available as well. Simply reach out to us via chat, Whatsapp, email or phone!
                                        <a href="#" className="text-base mr-2" onClick={() => { navigateToWhatsapp() }}>
                                            <i className="fab fa-whatsapp text-emerald-500 mr-1"></i>&nbsp;<span className={'font-light text-gray-800 text-sm'}>{WHATSAPP_DISPLAY_NUMBER}</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row w-full h-full mt-5">
                                    <div className="flex flex-col w-full md:w-1/2 h-full mr-4 p-6 rounded-lg bg-gradient-to-b from-slate-100 to-slate-200 justify-between">
                                        <div>
                                            <div className="font-bold text-slate-700 flex flex-row w-full justify-between"><span className="text-xl">Basic</span><span className="text-md">Rs. 30,000/-</span></div>
                                            <ul className="text-slate-700 mt-10 text-sm">
                                                <li className='mb-3'><i className="fa fa-check"></i>&nbsp; Get Startup Valuation Certificate</li>
                                                <li className='mb-3'><i className="fa fa-check"></i>&nbsp; Work with a Registered Valuer</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-slate-700 mt-5 text-xs">
                                                <i className="fa-solid fa-circle-info text-slate-700"></i>&nbsp;&nbsp;If you are ready to get started, you can make an <b>advance payment</b>, and our team will reach out within 6 businsess hours to get started with you.
                                            </p>
                                            <ButtonRounded className="font-medium mt-3 w-2/3" method={() => { this.initiatePayment(3000 * 100, "Business Valuation", "Basic Plan") }}>Pay ₹3000</ButtonRounded>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full md:w-1/2 h-full bg-gradient-to-b from-cyan-700 to-blue-700 p-6 rounded-lg justify-between mt-5 md:mt-0">
                                        <div>
                                            <span className="font-bold text-white flex flex-row w-full justify-between"><span className="text-xl">Advanced</span><span className="text-md">Rs. 60,000/-</span></span>
                                            <ul className="text-white mt-10 text-sm">
                                                <li className='mb-3'><i className="fa fa-check"></i>&nbsp; Get Startup Valuation Certificate</li>
                                                <li className='mb-3'><i className="fa fa-check"></i>&nbsp; Work with a Registered Valuer</li>
                                                <li className='mb-3'><i className="fa fa-check"></i>&nbsp; Issue of shares (private placement of shares)</li>
                                                <li className='mb-3'><i className="fa fa-check"></i>&nbsp; Issue of shares to investors</li>
                                                <li className='mb-3'><i className="fa fa-check"></i>&nbsp; Complete ESOP implementation</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-white mt-5 text-xs">
                                                <i className="fa-solid fa-circle-info text-white"></i>&nbsp;&nbsp;If you are ready to get started, you can make an <b>advance payment</b>, and our team will reach out within 6 businsess hours to get started with you.
                                            </p>
                                            <ButtonRounded className="font-medium mt-3 w-2/3" method={() => { this.initiatePayment(6000 * 100, "Business Valuation", "Advanced Plan") }}>Pay ₹6000</ButtonRounded>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>

                    <LineConvert product={'valuation'} className="mt-10" leadValue={VALUATION_CONVERSION_VALUE}></LineConvert>
                </Layout>
            </>
        )
    }
}