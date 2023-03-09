import UserGallery from "./user-gallery";
import UserInfo from "./user-info";

type UserSectionProps = {
  user: any;
  images: any[];
  subscribe: boolean;
  handleClick: any;
};

const UserSection: React.FunctionComponent<UserSectionProps> = (props) => {
  const { user, images, subscribe, handleClick } = props;

  return (
    <article>
      <UserInfo
        name={user.name}
        website={user.website}
        subscribe={subscribe}
        handleClick={handleClick}
      />

      <UserGallery images={images} />
    </article>
  );
};

export default UserSection;
