import { useState } from 'react';
import style from './Carousel.module.css';
import next from "../../../assets/next.png";
import prev from "../../../assets/previous.png";

export default function Carousel() {
  const certificateImages = [
    'https://wallpapercave.com/wp/wp2465923.jpg',
    'https://c4.wallpaperflare.com/wallpaper/241/580/981/css-css3-wallpaper-preview.jpg',
    'https://e1.pxfuel.com/desktop-wallpaper/857/328/desktop-wallpaper-html-5-html-thumbnail.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificateImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificateImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={style.container}>
      <button onClick={prevSlide}>
        <img src={prev} alt="Previous" />
      </button>
      <img src={certificateImages[currentIndex]} alt={`Certificate ${currentIndex + 1}`} />
      <button onClick={nextSlide}>
        <img src={next} alt="Next" />
      </button>
    </div>
  );
};