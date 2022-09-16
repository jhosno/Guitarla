import Link from 'next/link'
import Layout from '../components/Layout'
export default function Blog(second) {
    return (
            
        <Layout
        page= 'block'
        >

            <h1>blog</h1>
            <Link href="/">Inicio</Link>
        </Layout>
    )
}