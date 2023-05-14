import React from "react";

import Header from './header';
import Footer from './footer';
import Script from 'next/script';

class Layout extends React.Component {

    render() {

        return (
            <>
                <Header {...this.props}></Header>
                {this.props.children}
                <Footer></Footer>
            </>
        )
    }
}

export default Layout;
