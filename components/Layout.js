import React from 'react';
import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';



const Layout = ({ children, page }) => {
    return (
        <div>
            <Head>
                <title>Guitar LA | {page}</title>
                <meta name="description" content="Your custom guitar shop 🎸" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            {children}

            <Footer/>
        </div>
    );
};

export default Layout;