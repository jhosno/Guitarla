import Link from 'next/link'
import Layout from '../components/Layout'
import Post from '../components/Post'
import Course from '../components/Course'
import styles from '../styles/grid.module.css'
import Items from '../components/Items'

export default function Home({ posts, guitars, course }) {
  
  return (
    <div>

      <Layout
        page='Home'
        description="Welcome to guitars temple. Here you can get, learn, discover and much more about guitar. We are obsessed with guitars, just like you! | GuitarLA"
      >
        <main>

        

          <section>
            <h3 className="heading">Guitarras</h3>
            <div className={styles.grid}>
              {
                guitars?.map(guitar => (
                  <Items
                    guitar={guitar.attributes}
                    key={guitar.id}
                  />)
                )
              }
            </div>
            <Link href='tienda'>
              <a className="enlace">
                Ver todas
              </a>
            </Link>
          </section>
          <Course course={course}/>
            
          <section>
            <h3 className="heading">Blog</h3>
            <div className={styles.grid}>
              {
                posts?.map(posts => (
                  <Post
                    post={posts.attributes}
                    key={posts.id}
                  />)
                )
              }
            </div>

            <Link href='tienda'>
              <a className="enlace">
                Visita nuestro blog
              </a>
            </Link>
          </section>
        </main>
      </Layout>
    </div>
  )
}


export async function getStaticProps() {
  const getGuitars = `${process.env.API_URL}/guitars?sort=publishedAt%3Aasc&populate=img&pagination[start]=0&pagination[limit]=3`
  const getPosts = `${process.env.API_URL}/posts?sort=publishedAt%3Aasc&populate=thumbnail&pagination[start]=0&pagination[limit]=3`
  const getCourse = `${process.env.API_URL}/course?populate=img`
  //await tiene conflictos cuando las consultas son multiples (?) 
  const [setGuitars, setPosts, setCourse] = await Promise.all([
    fetch(getGuitars),
    fetch(getPosts), 
    fetch(getCourse)
  ])
  const [{ data: guitars }, { data: posts }, {data: course}] = await Promise.all([
    setGuitars.json(),
    setPosts.json(),
    setCourse.json()
  ])


  return {
    props: {
      guitars,
      posts,
      course
    }
  }
}
