import {Html, Head, Main, NextScript} from 'next/document'

import React from 'react';

const Documents = () => {
    return (
        <Html>
            <Head>
            
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    );
};

export default Documents;