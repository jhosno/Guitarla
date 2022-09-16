import Link from 'next/link'
import Layout from '../components/Layout'
export default function Nosotros(second) {
    return (
            
        <Layout
        page= 'nosotros'
        >

            <h1>Nosotros</h1>
            <Link href="/">Inicio</Link>
        </Layout>
    )
}