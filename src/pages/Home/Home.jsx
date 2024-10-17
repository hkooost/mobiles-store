import Navbar from "../../components/Navbar/Navbar"
import styles from './Home.module.scss'
import Header from "../../components/Header/Header"

export default function Home() {
  return (
    <>
    <Navbar />
    <div className={styles.home}>
      <Header />
    </div>
    </>
  )
}