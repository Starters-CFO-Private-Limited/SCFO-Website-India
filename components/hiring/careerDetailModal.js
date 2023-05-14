import React, { Fragment } from 'react';

import CareerForm from './careerForm';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CareerDetailModal extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            'buttonText': 'Submit',
            'convertSuccess': '',
            'showPopConvert': false,
        };
    }

    toggleForm = () => {
        this.setState({
            'showPopConvert': !this.state.showPopConvert,
        })
    }

    _handleClose(e) {
        e.preventDefault();
        this.props.onHide();
    }

    render() {
        // console.log(this.props.jobdetails.job_description)
        return (
            <>
                <CareerForm show={this.state.showPopConvert} onHide={this.toggleForm} product={'vcfo'}></CareerForm>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    dialogClassName="pop-convert--modal"
                    backdrop="static"
                    backdropClassName="pop-convert--modal-backdrop"
                    centered
                >
                    {this.props.jobdetails ?
                        <Modal.Body>
                            <a onClick={(e) => { this._handleClose(e) }}><i className="fa fa-times float-right font__20 color__grey hover-ponter"></i></a>

                            <Row style={{ marginTop: '50px' }}></Row>

                            <Row className="d-flex justify-content-center">
                                <Col md={{ 'span': '6' }} sm={{ 'span': '12' }} className="d-flex justify-content-center flex-column align-items-start">
                                    <h2>{this.props.jobdetails.job_title} Job Descripition</h2>
                                </Col>
                            </Row>

                            <Row style={{ marginTop: '20px' }}></Row>

                            <Row className="d-flex justify-content-center">
                                <Col className="mar-bottom" md={{ 'span': '6' }} sm={{ 'span': '12' }}>
                                    <div className="reliable_txt">
                                        <h4 className="color__dark title text_cus">Job Summary</h4>
                                        <ul className="card__list color__dark font__15 horizontal" style={{ marginTop: '15px' }}>
                                            {
                                                this.props.jobdetails.job_description.job_summary.map((item, i) => {
                                                    return (
                                                        <li className="d-block"><i className="fa fa-check"></i>&nbsp;{item}</li>
                                                    )
                                                })}
                                        </ul>
                                        <br></br>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Col className="mar-bottom" md={{ 'span': '6' }} sm={{ 'span': '12' }}>
                                    <div className="reliable_txt">
                                        <h4 className="color__dark title text_cus">Responsibilities and Duties</h4>
                                        <ul className="card__list color__dark font__15 horizontal" style={{ marginTop: '15px' }}>
                                            {
                                                this.props.jobdetails.job_description.responsibilities_and_duties.map((item, i) => {
                                                    return (
                                                        <li className="d-block"><i className="fa fa-check"></i>&nbsp;{item}</li>
                                                    )
                                                })}
                                        </ul>
                                        <br></br>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Col className="mar-bottom" md={{ 'span': '6' }} sm={{ 'span': '12' }}>
                                    <div className="reliable_txt">
                                        <h4 className="color__dark title text_cus">Key Skills</h4>
                                        <ul className="card__list color__dark font__15 horizontal" style={{ marginTop: '15px' }}>
                                            {
                                                this.props.jobdetails.job_description.skills.map((item, i) => {
                                                    return (
                                                        <li className="d-block"><i className="fa fa-check"></i>&nbsp;{item}</li>
                                                    )
                                                })}
                                        </ul>
                                        <br></br>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Col className="mar-bottom" md={{ 'span': '6' }} sm={{ 'span': '12' }}>
                                    <div className="reliable_txt">
                                        <h4 className="color__dark title text_cus">Qualifications you need</h4>
                                        <ul className="card__list color__dark font__15 horizontal" style={{ marginTop: '15px' }}>
                                            {
                                                this.props.jobdetails.job_description.qualification.map((item, i) => {
                                                    return (
                                                        <li className="d-block"><i className="fa fa-check"></i>&nbsp;{item}</li>
                                                    )
                                                })}
                                        </ul>
                                        <br></br>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="d-flex justify-content-center">
                                <Col className="mar-bottom" md={{ 'span': '6' }} sm={{ 'span': '12' }}>
                                    <div className="reliable_txt">
                                        <h4 className="color__dark title text_cus">Benefits</h4>
                                        <ul className="card__list color__dark font__15 horizontal" style={{ marginTop: '15px' }}>
                                            {
                                                this.props.jobdetails.job_description.benefits.map((item, i) => {
                                                    return (
                                                        <li className="d-block"><i className="fa fa-check"></i>&nbsp;{item}</li>
                                                    )
                                                })}
                                        </ul>
                                        <br></br>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="d-flex justify-content-center">
                                <Col className="mar-bottom" md={{ 'span': '6' }} sm={{ 'span': '12' }}>
                                    <div className="reliable_txt">
                                        <h4 className="color__dark title text_cus">Salary</h4>
                                        <ul className="card__list color__dark font__15 horizontal" style={{ marginTop: '15px' }}>
                                            <li className="d-block"><i className="fa fa-check"></i>&nbsp;{this.props.jobdetails.salary}</li>
                                        </ul>
                                        <h4 className="color__dark title text_cus">Hires Needed</h4>
                                        <ul className="card__list color__dark font__15 horizontal" style={{ marginTop: '15px' }}>
                                            <li className="d-block"><i className="fa fa-check"></i>&nbsp;{this.props.jobdetails.job_description.hires_needed}</li>
                                        </ul>

                                        <a href="https://forms.gle/F9C5JkQFENCy5w9m7" target="blank"><Button className="btn__secondary on_white color__dark large mt-4">Apply for job</Button></a>
                                        <br></br>
                                    </div>
                                </Col>
                            </Row>

                            <Row style={{ marginTop: '20px' }}></Row>

                        </Modal.Body>
                        :
                        <></>
                    }
                </Modal>
            </>
        )
    }
}

export default CareerDetailModal;
