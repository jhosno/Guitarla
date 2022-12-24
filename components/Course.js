import React from 'react';
import Image from 'next/image'
import styles from '../styles/curso.module.css'


const Course = ({ course }) => {
    const { img, title, content } = course.attributes

    return (
        <section className={`${styles.curso} curso`}>
            <style jsx>{`
                .curso{
                    background-image:  url(${img?.data?.attributes?.url});   
                }
                `}
            </style>
            <div className={` ${styles.grid}`}>
                <div className={`${styles.contenido}`} >
                    <h2  className='heading'>{title}</h2>
                    <p>{content}</p>
                    
                </div>
            </div>
        </section>
    );
};

export default Course;