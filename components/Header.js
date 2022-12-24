import React from 'react';
import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Header.module.css'
import logo from "../public/img/logo.svg"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className='contenedor'>
                <div className={styles.nav}>
                    <Link href="/"  >
                        <a>
                        <Image width={400} height={100} src={logo.src} alt="Logo GuitarLA" />
                        </a>
                    </Link>
                    <nav className={styles.navigation} >
                        
                        <Link href="/tienda" >Tienda</Link>
                        <Link href="/nosotros" >Nosotros</Link>
                        <Link href="/blog" >Blog</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;