import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // You can choose to navigate programmatically after 3 seconds
            router.push('/');
        }, 3000);
    }, [router]); // Add 'router' to the dependency array

    return (
        <div className="not-found">
            <h1>Oops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
    );
}

export default NotFound;
