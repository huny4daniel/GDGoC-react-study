import styles from './hero-section.module.css'
import heroImg from '../assets/panda_hero.png'

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textArea}>
        <h1>일상의 모든 물건을<br />거래해 보세요</h1>
        <button className={styles.shopButton}>구경하러 가기</button>
      </div>
      <img src={heroImg} alt="판다마켓 히어로" />
    </section>
  )
}

export default HeroSection
