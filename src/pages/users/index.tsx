import styles from "@/styles/UsersPage.module.css";
import Link from "next/link";

export default function UsersPage({ listofUsers }: any) {
  return (
    <div>
      <h1>Users Page</h1>

      <section>
        <ul className={styles.list}>
          {listofUsers && listofUsers.length > 0
            ? listofUsers.map((user: any) => (
                <Link key={user.id} href={`/users/${user.id}`}>
                  <li>
                    {user.name} as {user.username}
                  </li>
                </Link>
              ))
            : null}
        </ul>
      </section>
    </div>
  );
}

// getStaticProps method
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      listofUsers: data,
    },
  };
}
