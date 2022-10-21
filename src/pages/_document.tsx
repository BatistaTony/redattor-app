import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-pt">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#556BD1" />
          <link
            rel="shortcut icon"
            href="/favicon-32x32.png"
            type="image/png"
          />

          <meta name="application-name" content="E-Redator" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="E-Redator" />
          <meta name="description" content="Jornal online." />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#556BD1" />
          <meta name="msapplication-tap-highlight" content="no" />

          <link rel="apple-touch-icon" href="/favicon-32x32.png" />

          <meta property="og:title" content="E-Redator - Jornal online." />
          <meta property="og:description" content="Jornal online." />
          <meta property="og:locale" content="pt_pt" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="E-Redator - Jornal online" />
          {/* <meta property="og:image" content="/iamge.jpg" /> */}
          {/* <meta property="og:image:secure_url" content="/iamge.jpg" /> */}
          <meta property="og:image:alt" content="Thumbnail" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="900" />
          <meta property="og:image:height" content="600" />

          <meta name="twitter:title" content="E-Redator - Jornal online" />
          <meta name="twitter:card" content="summary_large_image" />
          {/* <meta name="twitter:image" content="/iamge.jpg" /> */}
          {/* <meta name="twitter:image:src" content="/iamge.jpg" /> */}
          <meta name="twitter:image:alt" content="Thumbnail" />
          <meta name="twitter:image:width" content="900" />
          <meta name="twitter:image:height" content="600" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
