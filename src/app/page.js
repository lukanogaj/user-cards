// import Image from 'next/image';
import styles from './page.module.css';
import UserCard from 'components/components/UserCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <UserCard />
    </div>
  );
}
