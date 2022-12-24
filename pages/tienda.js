import Items from '../components/Items'
import Layout from '../components/Layout'
import styles from '../styles/grid.module.css'

export default function Tienda({ data }) {
    

    return (

        <Layout
            page='Shop'
            description="Isn't nothing better that get a new guitar. Can you find your perfect match between all this wonderful guitars? Hell yeah! We know you can find it, we have all most magnificent guitars of the world | GuitarLA"
        >

            <main className="contenedor">

                 <h2 className='heading'>Nuestra Colección</h2>

                 <div className={styles.grid}>
                     
                {
                    data?.map(guitar => (
                        <Items
                        guitar={guitar.attributes}
                        key={guitar.id}
                        />) 
                        ) 
                    } 
                    </div>
            </main>

        </Layout>
    )
}

// export async function getStaticProps(){
//     const request = await fetch(`${process.env.API_URL}/guitars?populate=imagen`)
//     const {data: guitars} = await request.json();
//     console.log(guitars)
//     return {
//         props:{
//             guitars 
//         }
//     } 
// }
export async function getServerSideProps() {
    const request = await fetch(`${process.env.API_URL}/guitars?populate=img`)
    const  {data }  = await request.json();
    
    return {
        props: {
            data
        }
    }
}