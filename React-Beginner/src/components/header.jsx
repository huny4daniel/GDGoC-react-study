import styles from './header.module.css'
import logo from '../assets/logo/panda_market_logo.png'

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="판다마켓 로고" />
      </div>
      <div>
        <button className={styles.loginButton}>로그인</button>
      </div>
    </header>
  )
}

export default Header
