
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';
import Link from 'next/link'
const Qrcode =
  dynamic(() => import("../components/qrcode/Qrcode"), { ssr: false });


export default function Home() {

  return (
    <div className={styles.container}>

      <div className={styles.topnav} >
        
        <Link href="/login"><a >LogIn</a></Link>
        <Link href="/about"><a >About</a></Link>
        <Link href="/BarcodeGenerator"><a >BarcodeGenerator</a></Link>
        <Link href="/BarcodeScanner"><a >BarcodeScanner</a></Link>
        <Link href="/Home"><a >Home</a></Link>
        <a href="javascript:void(0);" className="icon" onClick="myFunction()">
          <i className="fa fa-bars"></i>
        </a>

      </div>
      <p>Welcome</p>
      <Qrcode />
    </div>
  )
}

