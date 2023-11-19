"use client"
import styles from './page.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ListProducts from './components/ListProducts'

export default function Home() {
  return (
    <main className={styles.main}>
     <Header />
     <ListProducts />
     <Footer />
    </main>
  )
}
