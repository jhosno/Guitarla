import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import {formatDate} from '../utils/helpers'
import styles from '../styles/blog.module.css'


const Post = ({ post }) => {
    const { content, id, thumbnail, url, title, publishedAt } = post

    
    return (
        <article className={styles.post}>
            <Image src={thumbnail.data.attributes.formats.medium.url} width={320} height={150} alt={`Foto de ${title}`} />
            <div className={styles.contenido}>
                <h2>
                    {title}
                </h2>
                <time className={styles.fecha}>
                    {formatDate(publishedAt)}
                </time>
                <p className={styles.resumen}>
                    {content.substring(0,245)}
                </p>
                <Link href={`post/${url}`}>
                    <a className={styles.enlace}>
                        Ver más
                    </a>
                </Link>

            </div>
        </article>
    );
};

export default Post;