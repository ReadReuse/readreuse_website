import { Html, Head, Main, NextScript, Title } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Readreuse: Study Smarter, Not Harder</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Transform your study routine with Readreuse, your ultimate study companion. Discover bite-sized study notes and last year's question papers for smarter studying."
        />
        <meta
          property="og:title"
          content="Readreuse: Study Smarter, Not Harder"
        />
        <meta
          property="og:description"
          content="Transform your study routine with Readreuse, your ultimate study companion. Discover bite-sized study notes and last year's question papers for smarter studying."
        />
        <meta property="og:image" content="/public/App_Logo.png" />
        <meta property="og:url" content="https://www.readreuse.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Readreuse: Study Smarter, Not Harder"
        />
        <meta
          name="twitter:description"
          content="Transform your study routine with Readreuse, your ultimate study companion. Discover bite-sized study notes and last year's question papers for smarter studying."
        />
        <meta name="twitter:image" content="/public/App_Logo.png" />
        <link rel="canonical" href="https://www.readreuse.in" />
        {/* <!-- Google Tag Manager --> */}
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TQLHR77D');`}</script>
        {/* <!-- End Google Tag Manager --> */}
      </Head>
      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQLHR77D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
