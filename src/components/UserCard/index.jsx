import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import userImage from '../UserImage';
// import pictureOne from '../images/picture-1.jpg';

const UserCard = () => {
  const userCards = userImage.map((card) => (
    <div key={card.id} className={styles.userCard}>
      <Image src={card.image} alt='card' width={400} height={500} />
    </div>
  ));
  return <div className={styles.hero}>{userCards}</div>;
};

export default UserCard;
