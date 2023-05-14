import React from 'react';
import Row from "scfonext/pages/components/site/row";
import Col from "scfonext/pages/components/site/col";
import Link from 'next/link';
import Container from "scfonext/pages/components/site/container";
import { WHATSAPP_MESSAGE_LINK, WHATSAPP_DISPLAY_NUMBER, BLOG_LINK } from "scfonext/constants";


class Footer extends React.Component {

    render() {
        return (
            <>
                <div className="w-screen h-96 bg-navy text-white py-10">
                    <Container>
                        <Row>
                            <Col className="w-1/4">
                                <span className="mb-3">Pages</span>
                                <a href="https://rzp.io/l/custom-amount" className="text-xs text-slate-400 mb-2" target="_blank">Make Payment</a>
                                <a href="/contact" className="text-xs text-slate-400 mb-2">Contact</a>
                                <a href={BLOG_LINK} target="_blank" className="text-xs text-slate-400 mb-2">Blog</a>
                                <a href="/careers/" className="text-xs text-slate-400 mb-2">Careers</a>
                                <a href="/startup-valuation-india" className="text-xs text-slate-400 mb-2">Start Up Valuation in India</a>
                                <a href="/virtual-cfo" className="text-xs text-slate-400 mb-2">Virtual CFO</a>
                                <a href="/compliances" className="text-xs text-slate-400 mb-2">Compliances</a>
                                <span className="mb-3 mt-5">Free Tools</span>
                                <a href="/tools/incorporation/help" className="text-xs text-slate-400 mb-2">Company Incorporation Quiz</a>
                            </Col>
                            <Col className="w-1/4">
                                <span className="mb-3">Register</span>
                                <a href="/company-incorporation" className="text-xs text-slate-400 mb-2">Company</a>
                                <a href="/trademark-registration" className="text-xs text-slate-400 mb-2">Trademark</a>
                                <a href="/gst" className="text-xs text-slate-400 mb-2">GST</a>
                                <a href="/startup-india-registration" className="text-xs text-slate-400 mb-2">Start Up India</a>
                                <a href="/msme-registration-india" className="text-xs text-slate-400 mb-2">MSME</a>
                                <a href="/msme-registration-india" className="text-xs text-slate-400 mb-2">Udyog Aadhar</a>
                                <a href="/contact" className="text-xs text-slate-400 mb-2">NGO</a>
                            </Col>
                            <Col className="w-1/4">
                                <span className="mb-3">Legal</span>
                                <a href="/privacy-policy" className="text-xs text-slate-400 mb-2">Privacy Policy</a>
                                <a href="/terms-of-service" className="text-xs text-slate-400 mb-2">Terms of Service</a>
                                <a href="/contact" className="text-xs text-slate-400 mb-2">Complaint Escalation</a>
                            </Col>
                            <Col className="w-1/4">
                                <span className="mb-3">Social Presence</span>
                                <a href="https://www.facebook.com/StartersCFO/" target="_blank" rel="noreferrer" className="text-xs text-slate-400 mb-2"><i className="fab fa-facebook mr-1"></i>&nbsp;Facebook</a>
                                <a href="https://www.linkedin.com/company/starters-cfo/" target="_blank" rel="noreferrer" className="text-xs text-slate-400 mb-2">&nbsp;<i className="fab fa-linkedin mr-1"></i>&nbsp;LinkedIn</a>
                                <a href="https://twitter.com/CfoStarter" target="_blank" rel="noreferrer" className="text-xs text-slate-400 mb-2">&nbsp;<i className="fab fa-twitter mr-1"></i>&nbsp;Twitter</a>
                                <span className="mb-3 mt-5">Reach Us</span>
                                <a href="https://goo.gl/maps/WQcFicbeYHYuHEQs7" target="_blank" className="text-xs text-slate-400 mb-2">Starters’ CFO Private Limited<br></br>243, 2nd floor, Gujrawala Town, Part 3,<br></br>Delhi - 110009<br></br>Opp HDFC Bank, Near Pentamed Hospital</a>
                                <a href={WHATSAPP_MESSAGE_LINK} className="text-base mr-2">
                                <i className="fab fa-whatsapp text-xs text-slate-400 mb-2 mr-1"></i><span className={'text-xs text-slate-400 mb-1'}>{WHATSAPP_DISPLAY_NUMBER}</span>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

export default Footer;
