import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "@/components/layout";

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Layout title="Your photos">
        <main className={styles.main}>
          <h1>HELLO</h1>
          <h2>This is YourPhotos App</h2>
          <div>
            <Link href="/users">
              <button className={styles.button}>Go to Users page</button>
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
