import { useState, useRef } from 'react';
import './App.css';
import loveHeart from './love_heart.webp';
import blackCat2 from './black_cat_2.gif';
import blackCat3 from './black_cat_3.gif';
import cheeze from './cheeze_2.mov';


function App() {
  const [beatCount, setBeatCount] = useState(0);
  const [isBeating, setIsBeating] = useState(false);
  const blueSectionRef = useRef(null);

  const handleHeartClick = () => {
    if (isBeating) return; // Prevent multiple clicks during animation
    
    setIsBeating(true);
    const newCount = beatCount + 1;
    setBeatCount(newCount);

    // Remove animation after it completes
    setTimeout(() => {
      setIsBeating(false);
    }, 600);

    // After 3 beats, scroll to blue section
    if (newCount >= 2) {
      setTimeout(() => {
        blueSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      <div className="section blue-section" ref={blueSectionRef}>
      
          <video 
            className="cheeze-video"
            controls
            autoPlay
            loop
            muted
          >
            <source src={cheeze} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
    </div>
  );
}

export default App;
