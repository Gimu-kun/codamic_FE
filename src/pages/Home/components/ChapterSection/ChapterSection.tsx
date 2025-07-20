import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './chapterSection.module.css';

import chapter1Img from '../../../../assets/images/chapter1.jpg';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider, { type Settings } from 'react-slick';
import { useRef } from "react";

type ChapterCardProps = {
    number: string;
    title: string;
    description: string;
    image: string;
  };
  
  const ChapterCard = ({ number, title, description, image }: ChapterCardProps) => (
    <div className={styles.chapter_card_wrapper}>
      <div className={styles.chapter_card__chapter_number}>{number}</div>
      <div className={styles.chapter_card__img_container}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.chapter_detail__container}>
        <div className={styles.chapter_detail__title_container}>
          <h5 className={styles.chapter_detail__title}>{title}</h5>
          <button className={styles.chapter_detail__forward_btn}>
            <ArrowForwardIcon />
          </button>
        </div>
        <p className={styles.chapter_detail__describe}>{description}</p>
      </div>
    </div>
  );
  
  const chapters = [
    {
      id: 1,
      number: "Chương 1",
      title: "Tổng quan",
      description: "Học tập và làm quen với khái niệm cấu trúc dữ liệu, đồng thời bước đầu tìm hiểu các thuật toán đơn giản",
      image: chapter1Img
    },
    {
      id: 2,
      number: "Chương 2",
      title: "Mảng & Danh sách liên kết",
      description: "Khám phá cách hoạt động của mảng và danh sách liên kết trong thuật toán.",
      image: chapter1Img
    },
    {
      id: 3,
      number: "Chương 3",
      title: "Ngăn xếp & Hàng đợi",
      description: "Tìm hiểu về Stack và Queue - hai cấu trúc dữ liệu cơ bản nhưng quan trọng.",
      image: chapter1Img
    },
    {
      id: 4,
      number: "Chương 4",
      title: "Cây & Đồ thị",
      description: "Giới thiệu về cây nhị phân và cấu trúc đồ thị.",
      image: chapter1Img
    },
    {
      id: 5,
      number: "Chương 5",
      title: "Thuật toán sắp xếp",
      description: "Tìm hiểu các giải thuật sắp xếp kinh điển: Bubble, Merge, Quick...",
      image: chapter1Img
    }
  ];

export default function ChapterSection() {
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ]
  };

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  return (
    <section className={styles.chapter_section}>
      <h3 className={styles.chapter_section__title}>Tổng quan các chương</h3>
      <Slider ref={sliderRef} {...settings} className={styles.chapter_section__slider}>
        {chapters.map((chapter) => (
          <div key={chapter.id} className={styles.chapter_card_slide_wrapper}>
            <ChapterCard {...chapter} />
          </div>
        ))}
      </Slider>

      <button className={`${styles.chapter_section__slide_nav} ${styles.back__btn}`} onClick={handlePrev}>
        <ArrowBackIcon />
      </button>
      <button className={`${styles.chapter_section__slide_nav} ${styles.forward__btn}`} onClick={handleNext}>
        <ArrowForwardIcon />
      </button>
    </section>
  );
}
