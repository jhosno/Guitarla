import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '../../utils/helpers'
import styles from '../../styles/blog.module.css'

import Layout from '../../components/Layout'

const Post = ({ post }) => {
    const { thumbnail, title, content, publishedAt } = post[0].attributes

    return (
        <Layout
            page={title}
            description="Isn't nothing better that get a new guitar. Can you find your perfect match between all this wonderful guitars? Hell yeah! We know you can find it, we have all most magnificent guitars of the world | GuitarLA"
        >

            <main className={`${styles.post} ${styles['mt-3']}`}>
                <Image src={thumbnail.data.attributes.formats.medium.url} width={600} height={400} alt={`guitarra modelo ${title}`} />

                <h3>{title}</h3>

                    <time className={styles.fecha} >
                        {formatDate(publishedAt)}
                    </time >
       
                <p className={styles.texto} >
                    {content}
                </p >
            </main>

        </Layout>
    );
};

export default Post;

export async function getStaticPaths() {
    const request = await fetch(`${process.env.API_URL}/posts`)
    const { data } = await request.json();
    const paths = data.map(post => ({
        params: {
            url: post.attributes.url
        }
    }))

    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params: { url } }) {
    const request = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=thumbnail`)
    const { data: post } = await request.json();
    return {
        props: {
            post
        }
    }
}
