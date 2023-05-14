import React from "react";
import Layout from "../../components/site/layout";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

import Container from "react-bootstrap/Container";


export default class Learn extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            'featuredPlaylist': [],
            'recentPlaylist': [],
            'section3': [],
            'section4': [],
            'section5': []
        };
    }

    componentDidMount() {

        const axios = require('axios');

        // playlist featured
        const url1 = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=PL15B1E77BB5708555&key=AIzaSyCEpdZ-lf_dtOvdDZ_W3ooqSl_UKC5XNbA';

        axios.get(url1)
            .then((response) => {
                this.setState({
                    'featuredPlaylist': response.data.items.slice(0, 4)
                })
            })
            .catch((response) => {
                console.error(response);
            })
            .finally(() => {
                Array.from(document.querySelectorAll('.js-player.featured')).map(p => new Plyr(p));
            })

        // playlist recent
        const url2 = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=PL02C68458677C576B&key=AIzaSyCEpdZ-lf_dtOvdDZ_W3ooqSl_UKC5XNbA';

        axios.get(url2)
            .then((response) => {
                this.setState({
                    'recentPlaylist': response.data.items.slice(0, 5)
                })
            })
            .catch((response) => {
                console.error(response);
            })
            .finally(() => {
                Array.from(document.querySelectorAll('.js-player.recent')).map(p => new Plyr(p));
            })

        // playlist section3
        const url3 = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=PL6CTrxW12Bre4kny-OhqOEQwNjso0VKPc&key=AIzaSyCEpdZ-lf_dtOvdDZ_W3ooqSl_UKC5XNbA';

        axios.get(url3)
            .then((response) => {
                this.setState({
                    'section3': response.data.items.slice(0, 5)
                })
            })
            .catch((response) => {
                console.error(response);
            })
            .finally(() => {
                Array.from(document.querySelectorAll('.js-player.section3')).map(p => new Plyr(p));
            })

        // playlist section4
        const url4 = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=PLVWg-YzuVsMbR6WWI8bEI_D7wXAwTZQvN&key=AIzaSyCEpdZ-lf_dtOvdDZ_W3ooqSl_UKC5XNbA';

        axios.get(url4)
            .then((response) => {
                this.setState({
                    'section4': response.data.items.slice(0, 5)
                })
            })
            .catch((response) => {
                console.error(response);
            })
            .finally(() => {
                Array.from(document.querySelectorAll('.js-player.section4')).map(p => new Plyr(p));
            })

        // playlist section5
        const url5 = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=PLMEZyDHJojxPEf42R4Y39LXuQEbjVfxIA&key=AIzaSyCEpdZ-lf_dtOvdDZ_W3ooqSl_UKC5XNbA';

        axios.get(url5)
            .then((response) => {
                this.setState({
                    'section5': response.data.items.slice(0, 5)
                })
            })
            .catch((response) => {
                console.error(response);
            })
            .finally(() => {
                Array.from(document.querySelectorAll('.js-player.section5')).map(p => new Plyr(p));
            })
        const players = Array.from(document.querySelectorAll('.js-player.static-vid')).map(p => new Plyr(p));
    }

    render() {

        return (
            <>
                <Layout>
                    <Container>
                        <Row>
                            <Col md={6} className="hero__text" style={{ marginTop: '50px' }}>
                                <h4 className="title color__dark">Learn with Starter's CFO</h4>
                                <br></br>
                                <p className="font__20 color__dark">
                                    Free snippets of critical information <br></br>
                                    to help you run your business smarter.
                                </p>
                                <Button className="btn__secondary large on_white font__15" type="submit" style={{ border: '1px solid #E02E2F', color: '#E02E2F' }}>
                                    <img className="mr-1" src="/static/svg/iconfinder_youtube_317714.svg"></img> Play on Youtube
                                </Button>
                            </Col>
                            <Col md={6} style={{ marginTop: '50px' }}>
                                <div className="plyr__video-embed js-player static-vid">
                                    <iframe
                                        src="https://www.youtube.com/embed/2REkk9SCRn0?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1&autoplay=0&autopause=1&muted=1&hideControls=1"
                                    >
                                    </iframe>
                                </div>
                                <Row>
                                    <Col>
                                        <p className="color__dark font__20 mb-0 mt-1"><b style={{ fontWeight: '600' }}>In a Heartbeat - Animated Short Film</b></p>
                                        <p className="color__category font__13"><span>#InaHeartbeat</span><span className="ml-2">#Animation</span></p>
                                        <p className="color__grey font__12 mt-2">
                                            India focussed on trade, terror & black money at the G20 summit. New Delhi also raised key issues like 5G & Iran crisis with Trump.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <div className="w-100">
                        <Container>
                            <Row style={{ marginTop: '80px' }} className="d-flex">
                                <Col style={{ marginTop: '20px' }}>
                                    <div className="plyr__video-embed js-player static-vid">
                                        <iframe
                                            src="https://www.youtube.com/embed/kJQP7kiw5Fk?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1&controls=0"
                                        >
                                        </iframe>
                                    </div>
                                    <Row>
                                        <Col>
                                            <h6 className="color__dark mt-2 mb-0"><b style={{ fontWeight: '600' }}>Gravitas: G20 Summit: Takeaways for India</b></h6>
                                            <p className="color__category font__13"><span>#LuisFonsi</span><span className="ml-2">#Despacito</span><span className="ml-2">#Imposible</span></p>
                                            <p className="color__grey font__12 mt-2">
                                                India focussed on trade, terror & black money at the G20 summit. New Delhi also raised key issues like 5G & Iran crisis with Trump.
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col style={{ marginTop: '20px' }}>
                                    <div className="plyr__video-embed js-player static-vid">
                                        <iframe
                                            src="https://www.youtube.com/embed/RgKAFK5djSk?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
                                        >
                                        </iframe>
                                    </div>
                                    <Row>
                                        <Col>
                                            <h6 className="color__dark mt-2 mb-0"><b style={{ fontWeight: '600' }}>Gravitas: G20 Summit: Takeaways for India</b></h6>
                                            <p className="color__category font__13"><span>#SeeYouAgain</span></p>
                                            <p className="color__grey font__12 mt-2">
                                                India focussed on trade, terror & black money at the G20 summit. New Delhi also raised key issues like 5G & Iran crisis with Trump.
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col style={{ marginTop: '20px' }}>
                                    <div className="plyr__video-embed js-player static-vid">
                                        <iframe
                                            src="https://www.youtube.com/embed/NUsoVlDFqZg?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
                                        >
                                        </iframe>
                                    </div>
                                    <Row>
                                        <Col>
                                            <h6 className="color__dark mt-2 mb-0"><b style={{ fontWeight: '600' }}>Gravitas: G20 Summit: Takeaways for India</b></h6>
                                            <p className="color__category font__13"><span>#LetMeBeYourLover</span><span className="ml-2">#EnriqueIglesias</span><span className="ml-2">#BailandoEspañol</span></p>
                                            <p className="color__grey font__12 mt-2">
                                                India focussed on trade, terror & black money at the G20 summit. New Delhi also raised key issues like 5G & Iran crisis with Trump.
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="w-100" style={{ marginTop: '50px' }}>
                        <Container>
                            <Row>
                                <Col>
                                    <hr></hr>
                                    <h5 className="color__dark" style={{ marginTop: '20px' }}><b style={{ fontWeight: '600' }}>Featured</b></h5>
                                    <p className="color__grey font__14">
                                        Most watched and popular videos from Starters' CFO
                                    </p>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '10px' }}>
                                {this.state.featuredPlaylist.map((object, i) =>
                                    <>
                                        {/* video item */}
                                        <Col md={3} style={{ marginTop: '20px' }}>
                                            <div className="plyr__video-embed js-player featured">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${object.snippet.resourceId.videoId}?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`}
                                                >
                                                </iframe>
                                            </div>
                                        </Col>
                                        <Col md={9} className="pl-3" style={{ marginTop: '20px' }}>
                                            <h6 className="color__dark mb-0"><b style={{ fontWeight: '600' }}>{object.snippet.title}</b></h6>
                                            <p className="color__category font__13"><span onClick={() => { window.location = 'https://www.youtube.com/results?search_query=%23Starters CFO' }}>#Starters CFO</span></p>
                                            <p className="color__grey font__12 mt-2">
                                                {object.snippet.description.slice(0, 300)}...
                                            </p>
                                        </Col>
                                        {/* end video item */}
                                    </>
                                )}
                            </Row>
                        </Container>
                    </div>
                    <div className="w-100" style={{ marginTop: '30px' }}>
                        <Container>
                            <Row>
                                <Col>
                                    <hr></hr>
                                    <h5 className="color__dark" style={{ marginTop: '20px' }}><b style={{ fontWeight: '600' }}>Recent Upload</b></h5>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-between">
                                {this.state.recentPlaylist.map((object, i) =>
                                    <>
                                        {/* recent video item */}
                                        <Col style={{ marginTop: '20px' }}>
                                            <div className="plyr__video-embed js-player recent">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${object.snippet.resourceId.videoId}?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`}
                                                >
                                                </iframe>
                                            </div>
                                            <p className="color__dark font__14 mb-0"><b style={{ fontWeight: '600' }}>{object.snippet.title.slice(0, 40)}...</b></p>
                                            <p className="color__category font__13"><span onClick={() => { window.location = 'https://www.youtube.com/results?search_query=%23Starters CFO' }}>#Starters CFO</span></p>
                                        </Col>
                                        {/* end recent video item */}
                                    </>
                                )}
                            </Row>
                        </Container>
                    </div>
                    <div className="w-100" style={{ marginTop: '30px', marginBottom: '50px' }}>
                        <Container>
                            <Row>
                                <Col>
                                    <hr></hr>
                                    <h5 className="color__dark" style={{ marginTop: '20px' }}><b style={{ fontWeight: '600' }}>Section 3</b></h5>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-between">
                                {this.state.section3.map((object, i) =>
                                    <>
                                        {/* section3 video item */}
                                        <Col style={{ marginTop: '20px' }}>
                                            <div className="plyr__video-embed js-player section3">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${object.snippet.resourceId.videoId}?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`}
                                                >
                                                </iframe>
                                            </div>
                                            <p className="color__dark font__14 mb-0"><b style={{ fontWeight: '600' }}>{object.snippet.title.slice(0, 40)}...</b></p>
                                            <p className="color__category font__13"><span onClick={() => { window.location = 'https://www.youtube.com/results?search_query=%23Starters CFO' }}>#Starters CFO</span></p>
                                        </Col>
                                        {/* end section3 video item */}
                                    </>
                                )}
                            </Row>
                        </Container>
                        <Container style={{ marginTop: '30px', marginBottom: '50px' }}>
                            <Row>
                                <Col>
                                    <hr></hr>
                                    <h5 className="color__dark" style={{ marginTop: '20px' }}><b style={{ fontWeight: '600' }}>Section 4</b></h5>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-between">
                                {this.state.section4.map((object, i) =>
                                    <>
                                        {/* section4 video item */}
                                        <Col style={{ marginTop: '20px' }}>
                                            <div className="plyr__video-embed js-player section4">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${object.snippet.resourceId.videoId}?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`}
                                                >
                                                </iframe>
                                            </div>
                                            <p className="color__dark font__14 mb-0"><b style={{ fontWeight: '600' }}>{object.snippet.title.slice(0, 40)}...</b></p>
                                            <p className="color__category font__13"><span onClick={() => { window.location = 'https://www.youtube.com/results?search_query=%23Starters CFO' }}>#Starters CFO</span></p>
                                        </Col>
                                        {/* end section4 video item */}
                                    </>
                                )}
                            </Row>
                        </Container>
                        <Container style={{ marginTop: '30px', marginBottom: '50px' }}>
                            <Row>
                                <Col>
                                    <hr></hr>
                                    <h5 className="color__dark" style={{ marginTop: '20px' }}><b style={{ fontWeight: '600' }}>Section 5</b></h5>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-between">
                                {this.state.section5.map((object, i) =>
                                    <>
                                        {/* section5 video item */}
                                        <Col style={{ marginTop: '20px' }}>
                                            <div className="plyr__video-embed js-player section5">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${object.snippet.resourceId.videoId}?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`}
                                                >
                                                </iframe>
                                            </div>
                                            <p className="color__dark font__14 mb-0"><b style={{ fontWeight: '600' }}>{object.snippet.title.slice(0, 40)}...</b></p>
                                            <p className="color__category font__13"><span onClick={() => { window.location = 'https://www.youtube.com/results?search_query=%23Starters CFO' }}>#Starters CFO</span></p>
                                        </Col>
                                        {/* end section5 video item */}
                                    </>
                                )}
                            </Row>
                        </Container>
                    </div>

                    <Row className="mt-5 pt-5 pb-5 ">
                        <Col className="d-flex justify-content-center align-items-center">
                            <Button className="btn__secondary on_white font__15" type="submit" style={{ border: '1px solid #E02E2F', color: '#E02E2F' }}>
                                <img className="mr-1" src="/static/svg/iconfinder_youtube_317714.svg"></img> Continue watching on Youtube
                            </Button>
                        </Col>
                    </Row>
                </Layout>

            </>
        )
    }
}
