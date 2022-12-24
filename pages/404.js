import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
function page404(props) {
    return (
        <Layout
        page='Página no encontrada'
        description="Isn't nothing better that get a new guitar. Can you find your perfect match between all this wonderful guitars? Hell yeah! We know you can find it, we have all most magnificent guitars of the world | GuitarLA"
    >

        <main className=''>
       <h3>Uops! D:</h3>
        <Link href='/'>
            <a className='enlace'>De vuelta al home</a>
        </Link>
        </main>
    </Layout>
    );
}

export default page404;