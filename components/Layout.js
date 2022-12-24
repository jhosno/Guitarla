import React from 'react';
import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';



const Layout = ({ children, page, description }) => {
    return (
        <div>
            <Head>
                <title>{`Guitar LA 🎸 | ${page}`}</title>
                <meta name="description" content={`${description}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            {children}

            <Footer/>
        </div>
    );
};

export default Layout;