import '../styles/globals.css'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Emmanuel Obukevwo - Full-Stack Developer Portfolio" />
        <meta name="author" content="Emmanuel Obukevwo" />
        <meta property="og:title" content="Emmanuel Obukevwo - Full-Stack Developer" />
        <meta property="og:description" content="Full-Stack Developer specializing in modern web applications" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <title>Emmanuel Obukevwo - Developer Portfolio</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
