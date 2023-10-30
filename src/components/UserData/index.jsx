import React from 'react';
import styles from './index.module.scss';
import SocialIcons from '../SocialIcons';
// import dataForUsers from '../DataForUsers';

const UserData = ({ card }) => {
  return (
    <div className={styles.userData}>
      <p>{card.paragraph}</p>
      <h2>{card.head}</h2>
      <h4>{card.heading}</h4>
      <SocialIcons />
    </div>
  );
};

export default UserData;
