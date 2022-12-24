import React from 'react';
import Link from 'next/link'
import styles from '../styles/Footer.module.css'


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navigation}>
                    <Link href="tienda">Tienda</Link>
                    <Link href="blog">Blog</Link>
                    <Link href="nosotros">Nosotros</Link>
                    
                </nav>

                <p>

                    All rights reserved {new Date().getFullYear() + ' '}|{' ' }
                    <a
                        href="https://jhosno.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Custom by Jhosno
                    </a>
                </p>

            
        </div>
        </footer >
    );
}

export default Footer;