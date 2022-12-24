import Link from 'next/link'
import Layout from '../components/Layout'
import Post from '../components/Post'
import styles from '../styles/grid.module.css'


export default function Blog({ data }) {

    return (
        <Layout
            page='Blog'
            description='Here you could discover, learn and improve your knowledge about this amazing world of guitars | GuitarLA'
        >

            <h1>blog</h1>
            <Link href="/">Inicio</Link>
            <div className={styles.grid}>
                {
                    data?.map(post => (
                        <Post
                            post={post.attributes}
                            key={post.id}
                        />)
                    )
                }
            </div>
        </Layout>
    )
}
export async function getStaticProps() {
    const request = await fetch(`${process.env.API_URL}/posts?sort=publishedAt%3Aasc&populate=thumbnail`)
    const { data } = await request.json();

    return {
        props: {
            data
        }
    }
}