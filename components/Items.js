import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/guitarras.module.css'


const items = ({ guitar }) => {
    const { title, id, price, url, img, description } = guitar


    return (
        <article className={styles.guitarra}>
            <Image src={img.data.attributes.formats.medium.url} width={150} height={320} alt={`Foto de ${title}`} />
            <div className={styles.contenido}>
                <h2>
                    {title}
                </h2>
                <p className={styles.descripcion}>
                    {description}
                </p>
                <p className={styles.precio}>
                    ${price}
                </p>
                <Link href={`guitarras/${url}`}>
                    <a className={styles.enlace}>
                        Ver más
                    </a>
                </Link>

            </div>
        </article>
    );
};

export default items;