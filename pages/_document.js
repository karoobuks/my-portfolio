import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Emmanuel Obukevwo - Full-Stack Developer Portfolio" />
        <meta name="author" content="Emmanuel Obukevwo" />
        <meta name="keywords" content="Emmanuel Obukevwo, karoobuks, Full-Stack Developer, React, Next.js, Node.js, JavaScript, TypeScript, Web Developer" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Emmanuel Obukevwo - Full-Stack Developer" />
        <meta property="og:description" content="Full-Stack Developer specializing in modern web applications with React, Next.js, and Node.js" />
        <meta property="og:site_name" content="Emmanuel Obukevwo Portfolio" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emmanuel Obukevwo - Full-Stack Developer" />
        <meta name="twitter:description" content="Full-Stack Developer specializing in modern web applications" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}