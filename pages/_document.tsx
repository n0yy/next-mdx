import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.6/dist/katex.min.css"
          integrity="sha384-mXD7x5S50Ko38scHSnD4egvoExgMPbrseZorkbE49evAfv9nNcbrXJ8LLNsDgh9d"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
