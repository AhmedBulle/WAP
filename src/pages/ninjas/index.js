import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>Services</h1>
      {ninjas.map(ninja => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          {/* Link automatically handles the <a> tag in Next.js */}
          <div className={styles.single}>
            <h3>{ninja.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Ninjas;
