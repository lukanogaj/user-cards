// import { useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import dataForUsers from '../DataForUsers';
// import SocialIcons from '../SocialIcons';
import UserData from '../UserData';

const UserCard = () => {
  // const [isShow, setIsToogle] = (useState = false);
  return (
    <div className={styles.hero}>
      {' '}
      {dataForUsers.map((card) => (
        <div key={dataForUsers.id} className={styles.flipCard}>
          <div key={dataForUsers.id} className={styles.flipCardInner}>
            <div key={dataForUsers.id} className={styles.flipCardFront}>
              <Image
                className={styles.picture}
                key={card?.id}
                src={card.image}
                alt='card'
                width={450}
                height={500}
                quality={80}
              />
            </div>
            <div className={styles.flipCardBack}>
              <UserData />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
