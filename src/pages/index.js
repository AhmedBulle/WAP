import Head from 'next/head';
import styles from '@/styles/Home.module.css'
import Footer from "@/comps/footer";
import Navbar from "@/comps/Navbar";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Input Devices: These are devices like a keyboard, mouse, microphone, or scanner that allow users to provide data and instructions to the computer.</p>
            <p className={styles.text}>Input Devices: These are devices like a keyboard, mouse, microphone, or scanner that allow users to provide data and instructions to the computer.</p>
            <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
    </div>
    </>
     )
     }