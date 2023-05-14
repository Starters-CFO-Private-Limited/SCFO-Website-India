import React from "react";
import Head from 'next/head';

export default class Meta extends React.Component {

    render() {
        const {
            title = "Starters' CFO - Virtual CFOs for Startups",
            description = "StartersCFO offers Virtual CFO Services for all your business needs. Hire us for Virtual CFO Services, Valuations and accounting service in Delhi, India."
        } = this.props;

        const PrefixedTitle = "Starters' CFO |" + title;

        return (
            <React.Fragment>
                <Head>
                    <title>{title}</title>
                    <meta name="title" content={PrefixedTitle}></meta>
                    <meta name="description" content={description}></meta>

                    <meta property="og:type" content="website"></meta>
                    <meta property="og:title" content={PrefixedTitle}></meta>
                    <meta property="og:description" content={description}></meta>
                    <meta property="og:image" content=""></meta>

                    <meta property="twitter:card" content="summary_large_image"></meta>
                    <meta property="twitter:title" content={PrefixedTitle}></meta>
                    <meta property="twitter:description" content={description}></meta>
                </Head>
            </React.Fragment>
        )
    }
}