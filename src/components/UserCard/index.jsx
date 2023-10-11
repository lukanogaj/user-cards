// import { useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
// import userImage from '../UserImage';
import dataForUsers from '../DataForUsers';

const UserCard = () => {
  // const [isShow, setIsToogle] = (useState = false);
  return (
    <div className={styles.hero}>
      {dataForUsers.map((card) => (
        <Image
          className={styles.picture}
          key={card?.id}
          src={card.image}
          alt='card'
          width={450}
          height={500}
          quality={80}
        />
      ))}
    </div>
  );
};

export default UserCard;
