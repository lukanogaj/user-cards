import React from 'react';
import styles from './index.module.scss';
import SocialIcons from '../SocialIcons';

const UserData = () => {
  return (
    <div className={styles.userData}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quidem ad!
        Delectus repudiandae totam vitae id laudantium doloribus. Fugiat dolor
        ad optio amet neque eum velit sit minima aliquid officiis.
      </p>
      <h2>Lee Stewart</h2>
      <h4>Senior Developer</h4>
      <SocialIcons />
    </div>
  );
};

export default UserData;
