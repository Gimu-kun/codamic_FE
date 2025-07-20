import styles from './footer.module.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <footer className={`${styles.footer_container}`}>
        <section className={`${styles.footer_top}`}>
            <section className={`${styles.footer_top__section}`}>
                Logo
            </section>
            <ul className={`${styles.footer_top__section}`}>
                <h5>Footer title</h5>
                <li>Footer link</li>
                <li>Footer link</li>
                <li>Footer link</li>
                <li>Footer link</li>
                <li>Footer link</li>
            </ul>
            <ul className={`${styles.footer_top__section}`}>
                <h5>Footer title</h5>
                <li>Footer link</li>
                <li>Footer link</li>
                <li>Footer link</li>
                <li>Footer link</li>
                <li>Footer link</li>
            </ul>
            <ul className={`${styles.footer_top__section}`}>
                <h5>Footer title</h5>
                <li>Footer link</li>
                <li>Footer link</li>
                <li>Footer link</li>
                <li>Footer link</li>
                <li>Footer link</li>
            </ul>
        </section>
        <div className={`${styles.footer_middle_line}`}></div>
        <section className={`${styles.footer_bottom}`}>
            <section className={`${styles.social_contact}`}>
                <FacebookOutlinedIcon/>
                <InstagramIcon/>
                <GitHubIcon/>
            </section>
            <p>&copy;A product of Gimu Kun&trade;</p>
        </section>
    </footer>
  )
}
