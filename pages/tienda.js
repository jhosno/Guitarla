import Link from 'next/link'
import Layout from '../components/Layout'
export default function Tienda(second) {
    return (
            
        <Layout
        page= 'tienda'
        >

            <h1>tienda</h1>
            <Link href="/">Inicio</Link>
        </Layout>
    )
}