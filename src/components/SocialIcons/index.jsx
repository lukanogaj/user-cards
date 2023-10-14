import styles from './index.module.scss';
import {
  FacebookIcon,
  LinkedinIcon,
  EmailIcon,
  PinterestIcon,
  Nothing,
} from '../images/media/icons';
const SocialIcons = () => {
  console.log(Nothing);
  return (
    <footer className={styles.footer}>
      <FacebookIcon className={styles.icons} />
      <LinkedinIcon className={styles.icons} />
      <EmailIcon className={styles.icons} />
      <PinterestIcon className={styles.icons} />
      {/* <Nothing className={styles.icons} /> */}
    </footer>
  );
};

export default SocialIcons;
