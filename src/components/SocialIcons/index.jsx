import styles from './index.module.scss';
import {
  FacebookIcon,
  LinkedinIcon,
  EmailIcon,
  PinterestIcon,
} from '../images/media/icons';
const SocialIcons = () => {
  return (
    <footer className={styles.footer}>
      <FacebookIcon />
      <LinkedinIcon />
      <EmailIcon />
      <PinterestIcon />
    </footer>
  );
};

export default SocialIcons;
