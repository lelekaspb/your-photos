import styles from "@/styles/UserPage.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import UserSection from "@/components/user-section";

const UserPage: React.FunctionComponent = (props: any) => {
  const { user, images } = props;
  const [subscribe, setSubscribe] = useState(false);

  const handleClick = () => {
    setSubscribe((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    console.log("subscribe state is now " + subscribe);
  }, [subscribe]);

  return (
    <Layout title={`Your Photos | ${user.name}`}>
      <div className={styles.page_container}>
        <Navbar />
        <UserSection
          user={user}
          images={images}
          subscribe={subscribe}
          handleClick={handleClick}
        />
      </div>
    </Layout>
  );
};

export default UserPage;

export async function getServerSideProps(context: { params: any }) {
  const { params } = context;
  const { userid } = params;
  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userid}`
  );
  const userData = await userResponse.json();

  const imagesResponse = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );
  const imagesData = await imagesResponse.json();

  return {
    props: {
      user: userData,
      images: imagesData,
    },
  };
}
