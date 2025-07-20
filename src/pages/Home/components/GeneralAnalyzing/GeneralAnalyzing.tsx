import styles from './generalAnalyzing.module.css'

export default function GeneralAnalyzing() {
  return (
    <section className={`${styles.analyzing_container}`}>
        <ul className={`${styles.analyzing_data_container}`}>
            <li className={`${styles.analyzing_data}`}>
                <p className={`${styles.analyzing_data_value}`}>100</p>
                <p className={`${styles.analyzing_data_title}`}>Users</p>
            </li>
            <hr />
            <li>
                <p className={`${styles.analyzing_data_value}`}>6000</p>
                <p className={`${styles.analyzing_data_title}`}>Questions</p>
            </li>
            <hr />
            <li>
                <p className={`${styles.analyzing_data_value}`}>582</p>
                <p className={`${styles.analyzing_data_title}`}>Tests</p>
            </li>
            <hr />
            <li>
                <p className={`${styles.analyzing_data_value}`}>52K</p>
                <p className={`${styles.analyzing_data_title}`}>Like</p>
            </li>
        </ul>
    </section>
  )
}
