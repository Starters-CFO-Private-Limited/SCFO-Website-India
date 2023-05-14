import React from "react";

import Container from "scfonext/pages/components/site/container";
import Row from "scfonext/pages/components/site/row";
import Col from "scfonext/pages/components/site/col";
import Button from "scfonext/pages/components/site/button";
import Badge from "scfonext/pages/components/site/badge";
import PopConvert from '../leadPages/popConvert';

import { navigateToWhatsapp } from "scfonext/utils/leads/whatsapp";
import { WHATSAPP_DISPLAY_NUMBER, BLOG_LINK } from "scfonext/constants";

export default class Nav extends React.Component {

    state = {
        'showPopConvert': false,
        'showHamburgerMenu': false,
    }

    componentDidMount() {
        const fullName = localStorage.getItem("LEAD_FULL_NAME");
        this.setState({ fullName })
    }

    showSettings(event) {
        event.preventDefault();
    }

    togglePopConvert = () => {
        this.setState({
            'showPopConvert': !this.state.showPopConvert
        })
    }

    toggleHamburgerMenu = () => {
        this.setState({
            'showHamburgerMenu': !this.state.showHamburgerMenu
        })
    }

    hamburger() {
        return (
            <div className="block md:hidden" onClick={this.toggleHamburgerMenu}>
                <i className="fa-solid fa-bars text-2xl"></i>
            </div>
        )
    }

    hamburgerMenu() {
        return (
            <div className="absolute t-0 l-0 r-0 l-0 bg-white w-screen h-screen py-5 px-5">
                <Row className="justify-between items-center w-full">
                    <Col>
                        <img src="/static/images/logos/scfo/no-cap.png" className="h-10 md:h-14"></img>
                    </Col>
                    <a onClick={() => { navigateToWhatsapp() }} className="text-base mr-2">
                        <i className="fab fa-whatsapp text-emerald-500 mr-1"></i>&nbsp;<span className={'font-light text-gray-800 text-sm'}>{WHATSAPP_DISPLAY_NUMBER}</span>
                    </a>
                </Row>
                <Row className="w-full h-full">
                    <Col className="w-4/5 h-full justify-center">
                        <div style={{ marginTop: "-70px" }} className="flex flex-col space-y-3">
                            <a href="/startup-valuation-india" className="text-navy mr-3 text-xl">Valuation</a>
                            <a href="/virtual-cfo" className="text-navy mr-3 text-xl">Virtual CFO</a>
                            <a href="/compliances" className="text-navy mr-3 text-xl">Compliances</a>
                            <a href="#" className="text-navy mr-3 text-xl" onClick={() => { document.querySelector("#toolsSubMenu").classList.toggle("hidden") }}>Tools</a>
                            <div className="flex flex-col hidden" id="toolsSubMenu">
                                <a href="/tools/incorporation/help" className="text-navy ml-3 mr-3">Company Structure Quiz</a>
                            </div>
                            <a href="#" className="text-navy mr-3 text-xl" onClick={() => { document.querySelector("#registerSubMenu").classList.toggle("hidden") }}>Register</a>
                            <div className="flex flex-col hidden" id="registerSubMenu">
                                <a href="/company-incorporation" className="text-navy ml-3 mr-3">Company</a>
                                <a href="/gst" className="text-navy ml-3 mr-3">Trademark</a>
                                <a href="/trademark-registration" className="text-navy ml-3 mr-3">GST</a>
                                <a href="/startup-india-registration" className="text-navy ml-3 mr-3">Start Up India</a>
                                <a href="/msme-registration-india" className="text-navy ml-3 mr-3">MSME / Udyog Aadhar</a>
                            </div>
                        </div>
                    </Col>
                    <Col className="w-1/5 h-full items-center justify-center">
                        <div className="bg-scfo h-12 w-12 rounded-full items-center justify-center text-xl flex" style={{ marginTop: "-70px" }} onClick={this.toggleHamburgerMenu}>
                            <i className="fa fa-times text-white"></i>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

    render() {
        const {
            thirdBanner,
        } = this.props;

        const {
            showHamburgerMenu,
            fullName
        } = this.state;

        return (
            <React.Fragment>
                <PopConvert
                    show={this.state.showPopConvert}
                    onHide={this.togglePopConvert}
                    product={'general'}
                    description={(<><p>You run your business. We will do the bookkeeping.</p><p>India's first Virtual CFO Service for start-ups and SMEs.</p></>)}
                    title={(<>Get started with India's fastest growing<br></br>finance organisation.</>)}>
                </PopConvert>

                {
                    showHamburgerMenu ?
                        <>
                            {this.hamburgerMenu()}
                        </>
                        :
                        <></>
                }

                <div className={'items-center w-screen bg-slate-100 h-14 hidden md:flex'}>
                    <Container>
                        <Row className={'flex justify-between'}>
                            <Col>
                                <div className={'flex flex-row items-center'}>
                                    <a onClick={() => { navigateToWhatsapp() }} className="text-base mr-2">
                                        <i className="fab fa-whatsapp text-emerald-500 mr-1"></i>&nbsp;<span className={'font-light text-gray-800 text-sm'}>{WHATSAPP_DISPLAY_NUMBER}</span>
                                    </a>
                                    &nbsp;&nbsp;|&nbsp;&nbsp;
                                    <a href={BLOG_LINK} className={'font-light text-gray-800 text-sm mx-2'}>
                                        Blog
                                    </a>
                                    &nbsp;&nbsp;|&nbsp;&nbsp;
                                    <a href="https://www.facebook.com/StartersCFO/" target="_blank" rel="noreferrer" className="text-navy mr-2"><i className="fab fa-facebook"></i></a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="https://www.linkedin.com/company/starters-cfo/" target="_blank" rel="noreferrer" className="text-navy mr-2"><i className="fab fa-linkedin"></i></a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="https://twitter.com/CfoStarter" target="_blank" rel="noreferrer" className="text-navy mr-2"><i className="fab fa-twitter"></i></a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                            </Col>
                            <Col>
                                <Row className="items-center">
                                    <span className="text-sm text-slate-700 mr-2">{fullName ? `Hello, ${fullName}!` : ''}</span>
                                    <Button method={this.togglePopConvert}>Get Started</Button>
                                </Row>
                            </Col>
                        </Row>

                    </Container>
                </div>
                <div className={'flex items-center w-screen h-118'}>
                    <Container className="py-4">
                        <Row className={'flex justify-between items-center'}>
                            <Col>
                                <a href="/?gtm_source=header_logo">
                                    <img src="/static/images/logos/scfo/no-cap.png" className="h-10 md:h-14"></img>
                                </a>
                            </Col>
                            <Col>
                                {this.hamburger()}
                            </Col>
                            <Col className="hidden md:flex">
                                <div className={'flex flex-row items-center'}>
                                    <a href="/startup-valuation-india" className="text-navy mr-3">Valuation</a>
                                    <a href="/virtual-cfo" className="text-navy mr-3">Virtual CFO</a>
                                    <a href="/compliances" className="text-navy mr-3">Compliances</a>
                                    <div className="relative inline-block">
                                        <div className="flex items-center flex-row">
                                            <a href="#" className="text-navy mr-3" onClick={() => { document.querySelector("#toolsDesktopSubMenu").classList.toggle("hidden") }}>Tools&nbsp;<i className="fa-solid fa-angle-down"></i></a>
                                        </div>
                                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" id="toolsDesktopSubMenu">
                                            <div className="py-1" role="none">
                                                <a href="/tools/incorporation/help" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Company Structure Quiz</a>
                                            </div>
                                        </div>
                                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" id="toolsDesktopSubMenu">
                                            <div className="py-1" role="none">
                                                <a href="http://growth.tlb.org/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Dead or Alive?</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative inline-block">
                                        <div className="flex flex-row items-center">
                                            <a href="#" className="text-navy mr-3" onClick={() => { document.querySelector("#registerDesktopSubMenu").classList.toggle("hidden") }}>Register&nbsp;<i className="fa-solid fa-angle-down"></i></a>
                                        </div>
                                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" id="registerDesktopSubMenu">
                                            <div className="py-1" role="none">
                                                <a href="/company-incorporation" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Company</a>
                                                <a href="/trademark-registration" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Trademark</a>
                                                <a href="/gst" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">GST</a>
                                                <a href="/startup-india-registration" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Start Up India</a>
                                                <a href="/msme-registration-india" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">MSME / Udyog Aadhar</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="flex md:hidden">
                                <Row className="items-center">
                                    <span className="text-sm text-slate-700 mr-2">{fullName ? `Hello, ${fullName}!` : ''}</span>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {
                    thirdBanner ? (
                        <div className={'flex items-center w-screen h-118 bg-scfo-dark'} onClick={() => { window.location = "/startup-valuation-india" }}>
                            <Container className="py-4">
                                <Row className={'flex justify-between items-center'}>
                                    <Col>
                                        <div className={'flex flex-row items-center'}>
                                            <Badge emoji={'⚡️'} text={'Trending!'} className="mr-2" />
                                            <span className={"text-white text-xs md:text-md"}>
                                                Valuation for start ups & SMEs! Find out what your business is worth.
                                            </span>
                                        </div>
                                    </Col>
                                    <Col>
                                        <Button style="secondary" link={'/startup-valuation-india'} className="hidden md:flex">Get Started</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    ) : <></>
                }
            </React.Fragment >
        )
    }
}