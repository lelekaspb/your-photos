import styles from "@/styles/UserPage.module.css";

type UserInfoProps = {
  name: string;
  website: string;
  subscribe: boolean;
  handleClick: any;
};

const UserInfo: React.FunctionComponent<UserInfoProps> = (props) => {
  const { name, website, subscribe, handleClick } = props;
  return (
    <section className={styles.user_info}>
      <div className={styles.user_info__details}>
        <h1 className={styles.user_info__name}>{name}</h1>
        <p className={styles.user_info__website}>{website}</p>
      </div>
      <div className={styles.user_info__subscribe}>
        <button
          type="button"
          className={`${
            subscribe ? styles.subscribed : styles.user_info__button
          }`}
          onClick={handleClick}
        >
          {subscribe ? "Subscribed" : "Subscribe"}
        </button>
      </div>
    </section>
  );
};

export default UserInfo;
