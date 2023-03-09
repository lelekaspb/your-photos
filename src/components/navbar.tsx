import styles from "@/styles/UserPage.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FunctionComponent = () => {
  return (
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
  );
};

export default Navbar;
