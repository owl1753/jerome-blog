import '@/styles/main.css'
import Head from "next/head";

export default function Nextra({Component, pageProps}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" sizes="any"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}