import React from 'react';
import Script from 'next/script';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-K61N83TFME"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-K61N83TFME');
            `}
          </Script>
          <Script
            id="ms_clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", 'ey5kbp6s41');`,
            }}
          />
    
          <Component {...pageProps} />
        </>
      );
}

export default MyApp