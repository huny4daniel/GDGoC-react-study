import styles from './footer.module.css'
import facebookLogo from '../assets/logo/facebook_logo.png'
import twitterLogo from '../assets/logo/twiter_logo.png'
import youtubeLogo from '../assets/logo/youtube_logo.png'
import instaLogo from '../assets/logo/insta_logo.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>©codeit - 2024</span>
      <div className={styles.links}>
        <a href="#">Privacy Policy</a>
        <a href="#">FAQ</a>
      </div>
      <div className={styles.social}>
        <a href="#"><img src={facebookLogo} alt="Facebook" /></a>
        <a href="#"><img src={twitterLogo} alt="Twitter" /></a>
        <a href="#"><img src={youtubeLogo} alt="YouTube" /></a>
        <a href="#"><img src={instaLogo} alt="Instagram" /></a>
      </div>
    </footer>
  )
}

export default Footer
