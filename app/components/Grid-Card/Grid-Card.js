import Image from "next/image";
import styles from "./Grid-Card.module.css";

export default function GridCard({ avatar, name, role, bio }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={avatar}
          alt={name}
          width={120}
          height={120}
          className={styles.avatar}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
}
