import styles from './trust-section.module.css'
import pandaImg from '../assets/panda_bottom.png'

function TrustSection() {
  return (
    <section className={styles.trustSection}>
      <div className={styles.textArea}>
        <h2>믿을 수 있는<br />판다마켓 중고 거래</h2>
      </div>
      <img src={pandaImg} alt="판다마켓" />
    </section>
  )
}

export default TrustSection
