import styles from '@/styles/Form.module.css'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import books from '../public/books.webp'
const Form = () => {
    const [country, setCountry] = useState()
    const [data1, setData1] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://universities.hipolabs.com/search?country=${country}`)
            .then(res => res.json())
            .then(data => {
                setData1(data.slice(0, 2))
                
                console.log(data.slice(0, 2))
                console.log(data1)
            })
    }
    return (
        <div className={styles.form}>
            <div className={styles.formSearch}>
                <form className={styles.serachBox} onSubmit={handleSubmit}>
                    <input type="text" className={styles.inputBox} placeholder="enter country name" value={country} onChange={(e) => { setCountry(e.target.value) }} />
                    <button className={styles.serachButton}>SEARCH</button>

                </form>
            </div>
            <div className={styles.universityDetail}>
            {data1.map((item1)=>(
                    <div className={styles.item} key = {item1.alpha_two_code}><div className={styles.imageBox}><Image src={books} fill objectFit='cover'></Image></div><Link href={item1.web_pages[0]} target = "_blank"><div className={styles.nameBox}>{item1.name}</div></Link></div>
                 ))}
                
            </div>
        </div>
    );
}

export default Form;