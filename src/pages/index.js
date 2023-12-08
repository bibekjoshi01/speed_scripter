import dynamic from "next/dynamic";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primay Meta Tags */}
        <title>Speed Scripter</title>
        <meta name="title" content="Speed Scripter"></meta>
        <meta
          name="description"
          content="Speed Scripter is a fun and interactive typing speed test application built with Next.js."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Speed Scripter"></meta>
        <meta
          property="og:description"
          content="Speed Scripter is a fun and interactive typing speed test application built with Next.js."
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:image"
          content="https://cdn-icons-png.flaticon.com/512/282/282100.png"
        ></meta>
        <meta
          property="og:image:secure_url"
          content="https://cdn-icons-png.flaticon.com/512/282/282100.png"
        ></meta>
        <meta property="og:image:alt" content="Speed Scripter"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>
        <meta property="og:image:type" content="image/png"></meta>
        <meta property="og:site_name" content="Speed Scripter"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1> Hello !</h1>
      </main>
    </>
  );
}
