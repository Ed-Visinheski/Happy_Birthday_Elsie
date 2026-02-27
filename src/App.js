import { useState, useRef, useEffect } from 'react';
import './App.css';
import loveHeart from './love_heart.webp';
import blackCat2 from './black_cat_2.gif';
import blackCat3 from './black_cat_3.gif';
import cheeze from './cheeze_2.mov';

// Import slideshow media
const slideshowMedia = [
  { type: 'image', src: require('./slide_show_photos/014E077E-8893-4D2D-A3E0-B2AFDDBB5693 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_0002 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_0022 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_0026 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_0035 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_0254 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_0281 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_0286 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_0291 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_0329 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_0357 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_0360 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_2906 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_2982 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_3009 2.JPG') },
  { type: 'video', src: require('./slide_show_photos/IMG_3952 2.mov') },
  { type: 'image', src: require('./slide_show_photos/IMG_3960 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_4442 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_4509 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_4517 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_4522 2.jpg') },
  { type: 'image', src: require('./slide_show_photos/IMG_4528 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_4529 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_4715 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_4720 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_4780 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_4863 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_4879 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_4880 2.JPG') },
  { type: 'video', src: require('./slide_show_photos/IMG_4955 2.MOV') },
  { type: 'video', src: require('./slide_show_photos/IMG_4960 2.MOV') },
  { type: 'image', src: require('./slide_show_photos/IMG_5096 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_5259 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_5268 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_5269 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_5275 2.JPG') },
  { type: 'image', src: require('./slide_show_photos/IMG_5369 2.PNG') },
  { type: 'image', src: require('./slide_show_photos/IMG_5410 2.JPG') },
];


function App() {
  const [beatCount, setBeatCount] = useState(0);
  const [isBeating, setIsBeating] = useState(false);
  const orangeSectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  // Slideshow logic
  useEffect(() => {
    const currentMedia = slideshowMedia[currentSlide];
    
    if (currentMedia.type === 'image') {
      // For images, advance after 2 seconds
      const timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slideshowMedia.length);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (currentMedia.type === 'video' && videoRef.current) {
      // For videos, advance when video ends
      const handleVideoEnd = () => {
        setCurrentSlide((prev) => (prev + 1) % slideshowMedia.length);
      };
      videoRef.current.addEventListener('ended', handleVideoEnd);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('ended', handleVideoEnd);
        }
      };
    }
  }, [currentSlide]);

  const handleHeartClick = () => {
    if (isBeating) return; // Prevent multiple clicks during animation
    
    setIsBeating(true);
    const newCount = beatCount + 1;
    setBeatCount(newCount);

    // Remove animation after it completes
    setTimeout(() => {
      setIsBeating(false);
    }, 600);

    // After 1 beats, scroll to orange section
    if (newCount >= 1) {
      setTimeout(() => {
        orangeSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        setBeatCount(0); // Reset count
      }, 800);
    }
  };

  return (
    <div className="App">
      <div className="section red-section">
        <div className="heart-container" onClick={handleHeartClick}>
          <img 
            src={loveHeart} 
            alt="Love Heart" 
            className={`love-heart ${isBeating ? 'beating' : ''}`} 
          />
          <img src={blackCat2} alt="Black Cat" className="black-cat cat-2" />
          <img src={blackCat3} alt="Black Cat" className="black-cat cat-3" />
        </div>
      </div>  
      <div className="section orange-section" ref={orangeSectionRef}>
          <video 
            className="cheeze-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={cheeze} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
      <div className="section yellow-section">
        <div className="newspaper-container">
          <h1 className="newspaper-title">Happy Birthday <br></br>Elsie &lt;3</h1>
          <div className="newspaper-columns">
            <p className="typewriter-text">
              Dear Elsie, <br></br> I've made you this website as I wanted to make you something unique, that no one has done for you before :D<br></br>
              Although we haven't been together for the logest time it doesn't feel that way at all (it feels wayyy longer!!) - you make me feel at home. 
              You're an amazing person, you push me to go above and beyond; I'm not afraid of failing or trying new things when I'm with you. 
              Please never change!!<br></br>You're are: kind, thoughtful, beautiful, generous, warm, and positive ... the list coud go on! 
              I'm so happy to be spending your birthday with you, I hope it'll be the best one yet!!!!!<br></br>
              I Love you,<br></br>
              Eduardo &lt;3
            </p>
          </div>
        </div>
      </div>
      <div className="section green-section">
        <div className="slideshow-container">
          {slideshowMedia[currentSlide].type === 'image' ? (
            <img
              key={currentSlide}
              src={slideshowMedia[currentSlide].src}
              alt={`Slide ${currentSlide + 1}`}
              className="slideshow-image"
            />
          ) : (
            <video
              key={currentSlide}
              ref={videoRef}
              src={slideshowMedia[currentSlide].src}
              className="slideshow-video"
              autoPlay
              muted
              playsInline
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
