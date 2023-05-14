import React from "react";

import Header from './header';
import Footer from './footer';
import PopConvert from '../leadPages/popConvert';

class Layout extends React.Component {

    state = {
        'showPopConvert': false
    }

    togglePopConvert = () => {
        this.setState({
            'showPopConvert': !this.state.showPopConvert
        })
    }

    render() {

        return (
            <>
                <Header {...this.props}></Header>
                {this.props.children}
                <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert} product={'fromheader'}></PopConvert>
                <Footer></Footer>

                <div id="fb-root"></div>
                <div className="fb-customerchat"
                    attribution="setup_tool"
                    page_id="827013777421580">
                </div>
            </>
        )
    }
}

export default Layout;
