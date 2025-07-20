import { Outlet } from 'react-router-dom'
import styles from './authLayout.module.css'
import ClipPathShape from './ClipPathShape'

export default function AuthLayout() {
    
  return (
    <section className={`${styles.auth_page}`}>
        <section className={`${styles.auth_frame__left}`}>
            <div className={`${styles.auth_frame__left__background}`}>
              <ClipPathShape/>
              <div className={`${styles.auth_frame__shape} ${styles.shape1}`}></div>
              <div className={`${styles.auth_frame__shape} ${styles.shape2}`}></div>
              <div className={`${styles.auth_frame__shape} ${styles.shape3}`}></div>
              <div className={`${styles.auth_frame__shape} ${styles.shape4}`}></div>
            </div>
        </section>
        <section className={`${styles.auth_frame__right}`}>
            <section className={`${styles.auth_form}`}>
                <Outlet/>
            </section>
        </section>
    </section>
  )
}
