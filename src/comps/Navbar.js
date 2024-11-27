import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Navbar = () => {
    return (
        <nav>
             <Head>
      <title>Ninja List | Ninja</title>
      <meta name="keywords" content="ninjas" />
    </Head>
        <div className="logo">
            <Image src="/water.jpg" alt="//" width={128} height={80}/>
            {/* <Image src="/drop.jpg" alt="//" width={140} height={80}/> */}

        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas">Services</Link>

        </nav>
        
    );
}
 
export default Navbar;