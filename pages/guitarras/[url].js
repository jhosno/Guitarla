import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/guitarras.module.css'

const Producto = ({ guitar }) => {
    console.log(guitar[0].attributes)
    const { title, price, img, description } = guitar[0].attributes
    return (
        <Layout
            page={title.toUpperCase()}
            description="Isn't nothing better that get a new guitar. Can you find your perfect match between all this wonderful guitars? Hell yeah! We know you can find it, we have all most magnificent guitars of the world | GuitarLA"
        >

            <main className={styles.guitarra}>
                <Image src={img.data.attributes.formats.medium.url} width={400} height={600} alt={`guitarra modelo ${title}`} />

                <div className={styles.contenido} >
                    <h3 className='heading'>{title.toUpperCase()}</h3>
                    <p className={styles.descripcion} >
                        {description}
                    </p>
                    <p className={styles.precio} >
                        ${price}
                    </p>
                    <Link href='/'>
                        <a className={styles.enlace}>
                            btn
                        </a>
                    </Link>
                </div>
            </main>

        </Layout>
    );
};

export default Producto;



export async function getStaticPaths() {
    const request = await fetch(`${process.env.API_URL}/guitars`)
    const { data } = await request.json();
    const paths = data.map(guitar => ({
        params: {
            url: guitar.attributes.url
        }
    }))

    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params: { url } }) {
    const request = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=img`)
    const { data: guitar } = await request.json();
    return {
        props: {
            guitar
        }
    }
}

