import styles from './index.module.scss';
import {
  FacebookIcon,
  LinkedinIcon,
  EmailIcon,
  PinterestIcon,
  Nothing,
} from '../images/media/icons';
const SocialIcons = () => {
  return (
    <footer className={styles.footer}>
      {' '}
      <div className={styles.icons}>
        <FacebookIcon />
      </div>
      <div className={styles.icons}>
        <LinkedinIcon />
      </div>
      <div className={styles.icons}>
        <EmailIcon />
      </div>
      <div className={styles.icons}>
        <PinterestIcon />
      </div>
    </footer>
  );
};

export default SocialIcons;
