import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './header.module.css'
import { useEffect, useState } from 'react';

export default function Header() {
        const [systemDate, setSystemDate] = useState("");
        const systemDateFormat = () => {
            const date = new Date;
            const weekdays = ['Chủ nhật','Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7'];
            return `${weekdays[date.getDay()]}, ngày ${date.getDate()} tháng ${date.getMonth()} năm ${date.getFullYear()}`
        }
        useEffect(()=>{
            setSystemDate(systemDateFormat());
        },[])
  return (
    <header>
        <section className={`${styles.assist_nav}`}>
            <div className={`${styles.system_time}`}>
                {systemDate}
            </div>
            <div className={`${styles.social_media}`}>
                <FacebookOutlinedIcon className={`${styles.sm_icon}`}/>
                <InstagramIcon className={`${styles.sm_icon}`}/>
                <GitHubIcon className={`${styles.sm_icon}`}/>
            </div>
        </section>
        <nav>
            <section className={`${styles.hdr_bx} ${styles.left}`}>
                Logo
            </section>
            <section className={`${styles.hdr_bx} ${styles.middle}`}>
                <ul className={`${styles.navs}`}>
                    <li className={`${styles.nav__menu}`}>Trang chủ</li>
                    <li className={`${styles.nav__menu}`}>Tài liệu</li>
                    <li className={`${styles.nav__menu}`}>Liên hệ</li>
                    <li className={`${styles.nav__menu}`}>Về Codamic</li>
                </ul>
            </section>
            <section className={`${styles.hdr_bx} ${styles.right}`}>
                <button className={`${styles.button} ${styles.enroll}`}>
                    <span  className={`${styles.button_text}`}>Đăng ký</span>
                </button>
                <button className={`${styles.button} ${styles.signin}`}>
                    <span  className={`${styles.button_text}`}>Đăng nhập</span>
                </button>
            </section>
        </nav>
    </header>
  )
}
