import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'
export default function Nosotros(second) {
    return (

        <Layout
            page='About Us'
            description="We wanna tell you about our history, and how we love guitars | GuitarLA"
        >
            <main className='contenedor'>

                <h2 className='heading'>Nosotros</h2>
                <div className={styles.about}>
                    <Image src="/img/nosotros.jpg" width={600} height={450} alt="Acerca de nosotros"  layout='responsive'/>
                    
                        <p>Perferendis eveniet aperiam voluptas ut aut deleniti ab unde. Libero ut quia dignissimos reprehenderit animi odit. Voluptas cum tempore dolores culpa repudiandae quia qui. Ut maxime architecto in et facere optio exercitationem aut. Necessitatibus autem et deleniti eos molestiae iusto pariatur. Ex quae molestiae dolore itaque dolorem.

                            Sit quidem culpa est. Voluptatum veritatis reiciendis sapiente magnam numquam. Dolores nostrum fugiat quas ex sunt maiores quod reiciendis. Et cum et temporibus.

                            Nihil distinctio facilis quia fuga. Non modi aliquam repudiandae. Aut harum quam qui ratione non qui. Earum est delectus modi cumque culpa doloremque enim.</p>
                    

                </div>
            </main>

        </Layout>
    )
}