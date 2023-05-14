import React from 'react';
import Nav from "scfonext/pages/components/site/nav";
import Head from 'next/head';
import Script from 'next/script';


class Header extends React.Component {
    state = {
        ld: {
            person: {
                "@context": "http://schema.org/",
                "@type": "Person",
                "name": "Starters' CFO Private Limited",
                "jobTitle": "Business Valuation Consultants",
                "telephone": "+91 81128 11268",
                "url": "http://localhost:4000/startup-valuation-india"
            },
            organisation: {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Starters' CFO - India&#39;s Top Accounts outsourcing &amp; Tax Consultancy firm &amp; Chartered Accountants in India",
                "sameAs": "https://www.facebook.com/StartersCFO/",
                "url": "https://starterscfo.com/",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "INDIA",
                    "addressLocality": "Derawal Nagar",
                    "addressRegion": "Delhi-NCR",
                    "postalCode": "110009",
                    "streetAddress": "B1, 2nd Floor, Derawal Nagar"
                },
                "logo": "https://starterscfo.com/static/images/logos/scfo/no-cap.png"
            }
        }
    }
    render() {
        const {
            ld
        } = this.state;

        return (
            <>
                <Head>
                    {/* things we want to load on all pages go here. */}
                    {/* favicon */}
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png"></link>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png"></link>
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png"></link>
                    <link rel="shortcut icon" href="/static/favicons/favicon.ico"></link>
                    <link rel="manifest" href="/static/site.webmanifest"></link>
                    <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5"></link>
                    <meta name="msapplication-TileColor" content="#603cba"></meta>
                    <meta name="theme-color" content="#ffffff"></meta>

                    {/* hubspot meetings */}
                    <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>

                    {/* css */}
                    <link rel="stylesheet" href="/static/stylesheets/index.css" />

                    {/* viewport  */}
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no"></meta>

                    {/* integrations ( place last ) */}
                    <script src="/static/scripts/integrations.js"></script>
                    <script src="https://www.googleoptimize.com/optimize.js?id=OPT-NDFKF8J"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.min.js"></script>
                    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/5761448.js"></script>
                    <script src="https://kit.fontawesome.com/cca43918e2.js" crossOrigin="anonymous"></script>
                    <Script
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-TM334CP');`,
                        }}>
                    </Script>

                    {/* razorpay */}
                    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

                    <script type="application/ld+json">
                        {
                            JSON.stringify(ld.person)
                        }
                    </script>
                    <script type="application/ld+json">
                        {
                            JSON.stringify(ld.organisation)
                        }
                    </script>
                </Head>
                <Nav {...this.props} />
            </>
        )
    }
}

export default Header;
