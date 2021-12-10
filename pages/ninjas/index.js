import Head from "next/head";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { ninjas: data },
  };
};

export default function index({ ninjas }) {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas Listing</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1>Ninjas</h1>
        {ninjas.map((ninja) => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
