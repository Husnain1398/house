
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
const Qrcode = 
dynamic(() => import("../Components/qrcode/Qrcode"), { ssr: false });


export default function Home() {

  return (

    <div className={styles.container}>
      <p>Welcome</p>
      <Qrcode />
    </div>
  )
}

