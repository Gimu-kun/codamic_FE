import { useEffect, useRef } from 'react';
import videos from '../../../../assets/videos/data-tree_3TVsDQKz.mp4'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import styles from './homebanner.module.css'

export default function HomeBanner() {
    const videoRef = useRef(null);

    const setSlowVideo = () => {
        if (videoRef.current) {
            (videoRef.current as any).playbackRate=0.7;
        }
    }

    useEffect(()=>{
        setSlowVideo();
    },[])
    return (
        <section className={`${styles.banner}`}>
            <section className={`${styles.banner__video_container}`}>
                <video ref={videoRef} className={`${styles.banner__video}`} src={videos} autoPlay loop muted ></video>
            </section>
            <section className={`${styles.banner__text_container}`}>
                <h1 className={`${styles.title}`}>Cấu trúc dữ liệu<br /> và giải thuật</h1>
                <div className={`${styles.slogan_container}`}>
                    <p className={`${styles.slogan}`}>Môn học nền tảng giúp bạn tối ưu hoá hiệu suất phần mềm – chìa khóa thành công trong ngành công nghệ và kinh doanh số.</p>
                </div>
                <button className={`${styles.button} ${styles.start}`}>
                    <span className={`${styles.button_text}`}>Bắt đầu ngay</span>
                    <DoubleArrowIcon className={`${styles.start_icon}`} />
                </button>
            </section>
            <div className={`${styles.drop_line} ${styles.drop_line1}`}></div>
            <div className={`${styles.drop_line} ${styles.drop_line2}`}></div>
            <div className={`${styles.drop_line} ${styles.drop_line3}`}></div>
            <div className={`${styles.drop_line} ${styles.drop_line4}`}></div>
            <div className={`${styles.drop_line} ${styles.drop_line5}`}></div>
        </section>
    )
}
