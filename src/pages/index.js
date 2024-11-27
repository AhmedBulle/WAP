import Head from 'next/head';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Footer from "@/comps/footer";
import Navbar from "@/comps/Navbar";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <Head>
      <title>Water</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Welcome to Water Conservation Projects</h1>
      <ul>
        <li>Water Conservation Tips.</li>
        <li>Track Your Water Usage.</li>
        <li>Rainwater Harvesting.</li>
        </ul>


            <Link href="/ninjas" className={styles.btn}>Contacts</Link>
    </div>
    </>
     )
     }