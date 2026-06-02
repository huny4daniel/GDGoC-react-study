import styles from './feature-section.module.css'

function FeatureSection({ tag, title, description, image, imagePosition = 'right' }) {
  return (
    <section className={`${styles.featureSection} ${imagePosition === 'left' ? styles.imageLeft : ''}`}>
      <div className={styles.card}>
        <img src={image} alt={title} />
      </div>
      <div className={`${styles.content} ${imagePosition === 'left' ? styles.contentRight : ''}`}>
        <span className={styles.tag}>{tag}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
}

export default FeatureSection
