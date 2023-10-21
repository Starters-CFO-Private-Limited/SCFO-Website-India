import React from "react";
import Head from 'next/head';

export default class Meta extends React.Component {

    render() {
        const {
            title = "Starters' CFO - Virtual CFOs for Startups",
            description = "StartersCFO offers Virtual CFO Services for all your business needs. Hire us for Virtual CFO Services, Valuations and accounting service in Delhi, India.",
            keywords= "",
            robots= "",
            og_url= "",
            og_type= "website",
            og_title = "Starters' CFO - Virtual CFOs for Startups",
            og_description = "StartersCFO offers Virtual CFO Services for all your business needs. Hire us for Virtual CFO Services, Valuations and accounting service in Delhi, India.",
            og_image= "",
            twitter_card= "summary_large_image",
            twitter_title = "Starters' CFO - Virtual CFOs for Startups",
            twitter_description = "StartersCFO offers Virtual CFO Services for all your business needs. Hire us for Virtual CFO Services, Valuations and accounting service in Delhi, India.",
            twitter_image= ""

        } = this.props;

        const PrefixedTitle = "Starters' CFO |" + title;

        return (
            <React.Fragment>
                <Head>
                    <title>{title}</title>
                    <meta name="title" content={PrefixedTitle}></meta>
                    <meta name="description" content={description}></meta>

                    <meta name="Keywords" content={keywords} />
                    <meta name="robots" content={robots} />

                    <meta itemprop="name" content="Starters' CFO | Virtual CFOs, Company Incorporation, Accounting Software"></meta>
                    <meta itemprop="image" content={twitter_image}></meta>

                    <meta property="og:url" content={og_url}></meta>
                    <meta property="og:type" content={og_type}></meta>
                    <meta property="og:title" content={og_title}></meta>
                    <meta property="og:description" content={og_description}></meta>
                    <meta property="og:image" content={twitter_image}></meta>

                    <meta name="twitter:card" content={twitter_card}></meta>
                    <meta name="twitter:title" content={twitter_title}></meta>
                    <meta name="twitter:description" content={twitter_description}></meta>
                    <meta name="twitter:image" content={twitter_image}></meta>
                    
                    <meta name="google-site-verification" content="hwGg0k7JuVnA49F784MZXUy6ABXLBXG-OK8On0vglTA" />

                </Head>
            </React.Fragment>
        )
    }
}