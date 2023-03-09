import styles from "@/styles/UserPage.module.css";
import Image from "next/image";

type UserGalleryProps = {
  images: any[];
};

const UserGallery: React.FunctionComponent<UserGalleryProps> = (props) => {
  const { images } = props;
  const listOfImages = images.map((image: any) => (
    <Image
      key={image.id}
      src={image.thumbnailUrl}
      alt={image.title}
      width={150}
      height={150}
    />
  ));
  return (
    <section className={styles.gallery}>
      <h2 className={styles.gallery__header}>Image Album</h2>
      <div className={styles.gallery__container}>{listOfImages}</div>
    </section>
  );
};

export default UserGallery;
