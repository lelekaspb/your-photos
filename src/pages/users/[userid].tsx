import styles from "@/styles/UserPage.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UserPage(props: any) {
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

  const listOfImages = images.map((image: any) => (
    <Image
      key={`${image.id}`}
      src={image.thumbnailUrl}
      alt={image.title}
      width={150}
      height={150}
    />
  ));

  return (
    <div>
      <nav className={styles.navbar}>
        <div>
          <Link href="/">
            <Image
              src="/yourphotos-logo-black.svg"
              alt="Logo"
              width={150}
              height={50}
              priority
            />
          </Link>
        </div>

        <div>
          <Image
            src="/placeholder-img.jpg"
            alt="Avatar"
            style={{ borderRadius: "100%" }}
            width={50}
            height={50}
            priority
          />
        </div>
      </nav>

      <article>
        <section className={styles.user_info}>
          <div className={styles.user_info__details}>
            <h1 className={styles.user_info__name}>{user.name}</h1>
            <p className={styles.user_info__website}>{user.website}</p>
          </div>
          <div className={styles.user_info__subscribe}>
            <button
              type="button"
              className={styles.user_info__button}
              onClick={handleClick}
            >
              Subscribe
            </button>
          </div>
        </section>
        <section className={styles.gallery}>
          <h2>Image Album</h2>
          <div className={styles.gallery__container}>{listOfImages}</div>
        </section>
      </article>
    </div>
  );
}

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
